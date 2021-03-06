import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { HightlightCard } from '../../components/HightlightCard';
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Header,
  UserWapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HightlightCards,
  Transactions,
  Title,
  TransactinList,
  LoadContainer
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../Hooks/auth';


export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HightlightProps {
  amount: string;
  lastTransaction: string;
}
interface HightlightData {
  entries: HightlightProps;
  expensives: HightlightProps;
  total: HightlightProps;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hightlightData, setHightlightData] = useState<HightlightData>({} as HightlightData);

  const themes = useTheme();
  const { signOut, user } = useAuth();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative'
  ) {

    const collectionFilttered = collection
      .filter(transaction => transaction.type === type);

    if (collectionFilttered.length === 0)
      return 0;

    const lastTransaction = new Date(
      Math.max.apply(Math, collectionFilttered
        .map(transaction => new Date(transaction.date).getTime())));

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;

  }


  async function loadTransactions() {
    const datakey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(datakey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {

        if (item.type === 'positive')
          entriesTotal += Number(item.amount);
        else
          expensiveTotal += Number(item.amount);

        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        }
      });

    setTransactions(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive');
    const lastTransactionExpensive = getLastTransactionDate(transactions, 'negative');

    const totalInterval = lastTransactionExpensive === 0
      ? 'N??o a transa????es'
      : `01 a ${lastTransactionExpensive}`;


    const total = entriesTotal - expensiveTotal;

    setHightlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionEntries === 0
          ? 'N??o h?? transa????es'
          : `??ltima entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: lastTransactionExpensive === 0
          ? 'N??o h?? transa????es'
          : `??ltima sa??da dia ${lastTransactionExpensive}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        lastTransaction: totalInterval,
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []))

  return (
    <Container >
      {
        isLoading ?
          <LoadContainer>
            <ActivityIndicator
              color={themes.colors.primary}
              size="large"
            />
          </LoadContainer> :
          <>
            <Header>
              <UserWapper>
                <UserInfo>
                  <Photo
                    source={{ uri: user.photo }}
                  />
                  <User>
                    <UserGreeting>Ol??,</UserGreeting>
                    <UserName>{user.name}</UserName>
                  </User>
                </UserInfo>

                <LogoutButton onPress={signOut}>
                  <Icon name="power" />
                </LogoutButton>

              </UserWapper>
            </Header>

            <HightlightCards>
              <HightlightCard
                type="up"
                title="Entrada"
                amount={hightlightData.entries.amount}
                lastTransaction={hightlightData.entries.lastTransaction}
              />

              <HightlightCard
                type="down"
                title="Sa??das"
                amount={hightlightData.expensives.amount}
                lastTransaction={hightlightData.expensives.lastTransaction}
              />

              <HightlightCard
                type="total"
                title="Total"
                amount={hightlightData.total.amount}
                lastTransaction={hightlightData.total.lastTransaction}
              />
            </HightlightCards>

            <Transactions>
              <Title>Listagem</Title>

              <TransactinList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TransactionCard data={item} />}
              >

              </TransactinList>
            </Transactions>
          </>
      }
    </Container>
  )
}


