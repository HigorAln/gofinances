import React from 'react'
import { Feather } from '@expo/vector-icons'; 

import { 
  Container,
   Header,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   UserWrapper,
   HightLightCards,
   Transactions,
   Title,
   TransactionList
 } from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionsCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionsCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id: "1",
      title:"Desenvolvimento de site",
      amount:'R$ 12.000,00',
      category:{
        name: "Vendas",
        icon: "dollar-sign"
      },
      date:"13/04/2020",
      type:"positive",
    },
    {
      id: "2",
      title:"Hamburgueria Pizzy",
      amount:'R$ 59,00',
      category:{
        name: "Alimentação",
        icon: "coffee"
      },
      date:"10/04/2020",
      type:"negative",
    },
    {
      id: '3',
      title:"Aluguel do apartamento",
      amount:'R$ 1.200,00',
      category:{
        name: "Alimentação",
        icon: "shopping-bag"
      },
      date:"27/03/2020",
      type:"negative",
    },
  ]

  return(
    <Container>
      <Header>
       <UserWrapper>
        <UserInfo>
          <Photo source={{ uri: "https://github.com/higoraln.png" }}/>

          <User>
            <UserGreeting>Olá, </UserGreeting>
            <UserName>Higor</UserName>
          </User>
        </UserInfo>

        <Feather name="power" size={24} color="#ff872c" />

       </UserWrapper>
      </Header>

      <HightLightCards>
        <HighlightCard type="up" amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' title='Entradas' />
        <HighlightCard type="down" amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril' title='Saídas' />
        <HighlightCard type="total" amount='R$ 16.141,00' lastTransaction='01 à 16 de abril' title='Total' />
      </HightLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <TransactionCard data={item as TransactionsCardProps} />}
        />

      </Transactions>
    </Container>
  )
}