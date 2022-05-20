import React from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionType } from '../../components/Forms/TransactionType';
import { 
  Container,
  Header,
  Title,
  Form,
  Fields
 } from './styles';


export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

     <Form>
       <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preco' />

          <TransactionType type="up" title="income" />
       </Fields>

        <Button title="Enviar"/>
     </Form>

    </Container>
  );
}