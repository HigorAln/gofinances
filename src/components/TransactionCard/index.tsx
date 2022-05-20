import { Feather } from '@expo/vector-icons';
import React from 'react';
import { 
  Container,
  Title,
  Footer,
  Amount,
  Category,
  CategoryName,
  Date,
 } from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionsCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionsCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type === "positive"}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Feather name={data.category.icon} size={20} color={"#969CB2"}/>

          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>

    </Container>
  );
}