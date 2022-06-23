import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'

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
	TransactionList,
	LogoutButton,
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import {
	TransactionCard,
	TransactionsCardProps,
} from '../../components/TransactionCard';

import AsyncStorage from '@react-native-async-storage/async-storage'

export interface DataListProps extends TransactionsCardProps {
	id: string;
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>();

  
  async function loadTransaction() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
      const amount = Number(item.amount).toLocaleString('pt-BR', { 
        style: "currency",
        currency: "BRL"
      });

      const date = Intl.DateTimeFormat('pt-Br', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
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

    setData(transactionsFormatted)
  }

  useEffect(() => {
    loadTransaction();
  }, [])

  useFocusEffect(useCallback(() => {
    loadTransaction();
  }, []))
	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo source={{ uri: 'https://github.com/higoraln.png' }} />

						<User>
							<UserGreeting>Olá, </UserGreeting>
							<UserName>Higor</UserName>
						</User>
					</UserInfo>

					<LogoutButton onPress={() => {}}>
						<Feather name="power" size={24} color="#ff872c" />
					</LogoutButton>
				</UserWrapper>
			</Header>

			<HightLightCards>
				<HighlightCard
					type="arrow-up-circle"
					amount="R$ 17.400,00"
					lastTransaction="Última entrada dia 13 de abril"
					title="Entradas"
				/>
				<HighlightCard
					type="arrow-down-circle"
					amount="R$ 1.259,00"
					lastTransaction="Última saída dia 03 de abril"
					title="Saídas"
				/>
				<HighlightCard
					type="dollar-sign"
					amount="R$ 16.141,00"
					lastTransaction="01 à 16 de abril"
					title="Total"
				/>
			</HightLightCards>

			<Transactions>
				<Title>Listagem</Title>

				<TransactionList
					data={data}
					keyExtractor={(item: any) => item.id}
					renderItem={({ item }) => (
						<TransactionCard data={item as TransactionsCardProps} />
					)}
				/>
			</Transactions>
		</Container>
	);
}
