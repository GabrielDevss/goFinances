import React, { useEffect, useState } from 'react';

import { HightlightCard } from '../../components/HightlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
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
  TransactinList
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';


 export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [ data, setData ] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const datakey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(datakey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps) => {
      
      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format((new Date(item.date)))

        return {
          id: item.id,
          name: item.name,
          amount, 
          type: item.type,
          category: item.category,
          date,
        }

    });

    setData(transactionsFormatted);

  }
  useEffect(() => {
    loadTransactions();
  },[])

  return(
    <Container >
      <Header>
          <UserWapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://github.com/GabrielDevss.png'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
                <UserName>Gabriel</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => {}}>
            <Icon name="power"/>
          </LogoutButton>

          </UserWapper>
      </Header>

      <HightlightCards>
        <HightlightCard
          type="up"
          title= "Entrada"
          amount= "R$ 17.400.00"
          lastTransaction= "Última entrada dia 13 de abril"
        />

        <HightlightCard
          type="down"
          title= "Saídas"
          amount= "R$ 1.259.00"
          lastTransaction= "Última saída dia 3 de abril"
        />

        <HightlightCard
          type="total"
          title= "Total"
          amount= "R$ 16.141.00"
          lastTransaction= "01 à 16 abril"
        />
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactinList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}     
        >
    
        </TransactinList>
      </Transactions>
    </Container>
  ) 
}


