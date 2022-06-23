import { Feather } from '@expo/vector-icons';
import React from 'react';
import { categories } from '../../utils/categories';
import { 
  Container,
  Title,
  Footer,
  Amount,
  Category,
  CategoryName,
  Date,
 } from './styles';

export interface TransactionsCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionsCardProps;
}

export function TransactionCard({ data }: Props) {
  const category = categories.filter(item => item.key === data.category)[0];

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type === "positive"}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Feather name={category.icon as any} size={20} color={"#969CB2"}/>

          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>

    </Container>
  );
}