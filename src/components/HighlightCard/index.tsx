import React from 'react';
import { 
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction
 } from './styles';
import { Feather } from '@expo/vector-icons';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "arrow-up-circle" | "arrow-down-circle" | "dollar-sign"
}

export function HighlightCard({
  amount,
  lastTransaction,
  title,
  type
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Feather name={type} size={40} color={type === "arrow-up-circle" ? "#12a454" : type === "arrow-down-circle" ? "#E83F5B" : "#ffffff" } />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}