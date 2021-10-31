import React, { useState } from 'react';
import { 
Modal,
TouchableWithoutFeedback,
Keyboard,
Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import uuid from 'react-native-uuid';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { CategorySelect } from '../CategorySelect';
import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsContainer
} from './styles';
import { useAuth } from '../../Hooks/auth';

interface FormData {
  name: string;
  amount: string;
}

const schema = yup.object().shape({
  name: yup
  .string()
  .required('Nome é obrigatório'),

  amount: yup.
  number()
  .typeError('Informe um valor numerico')
  .positive('O valor não pode ser negativo')
  .required('O valor é obrigatório')
});

export function Register() {
  const [transactioType, setTransactioType] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);

  const { user } = useAuth();
  
  const [category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const navigation = useNavigation();

  const {
    control,
    reset,
    handleSubmit,
    formState:{ errors }
  } = useForm({resolver: yupResolver(schema)});

  function handleTransactionTypeSelected(type: 'positive' | 'negative') {
    setTransactioType(type);
  }

  function handleOpenSelectModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectModal() {
    setCategoryModalOpen(false);
  }

 async function handleRegister(form: FormData) {
    if(!transactioType)
    return Alert.alert('Selecione uma transação');

    if(category.key === 'category')
    return Alert.alert('Selecione uma categoria');

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactioType,
      category: category.key,
      date: new Date(),
    }

    try {
     const datakey = `@gofinances:transactions_user:${user.id}`;

      const data = await AsyncStorage.getItem(datakey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ];

      await AsyncStorage
      .setItem(datakey, JSON.stringify(dataFormatted));

      reset();
      setCategory({
        key: 'category',
        name: 'category'
      });
      setTransactioType('');

      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar!');
    }

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control} 
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            name="amount"
            control={control}  
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />

          <TransactionsContainer>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionTypeSelected('positive')}
                isActive={transactioType === 'positive'}
              />

              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeSelected('negative')}
                isActive={transactioType === 'negative'}
              />
          </TransactionsContainer>

          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectModal}
          />

        </Fields>

        <Button 
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectModal}
        />
      </Modal>
    </Container>
  </TouchableWithoutFeedback>
  )
}