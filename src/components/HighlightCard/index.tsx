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
  type: "up" | "down" | "total"
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign"
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
        <Feather name={icon[type]} size={40} color={type === "up" ? "#12a454" : type === "down" ? "#E83F5B" : "#ffffff" } />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}