import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

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
	LoadContainer,
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import {
	TransactionCard,
	TransactionsCardProps,
} from '../../components/TransactionCard';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DataListProps extends TransactionsCardProps {
	id: string;
}

interface HighLightProps {
	amount: string;
	lastTransactions: string;
}

interface HighLightData {
	entries: HighLightProps;
	expensives: HighLightProps;
	total: HighLightProps;
}

export function Dashboard() {
	const [isLoading, setIsLoadind] = useState(true);
	const [transactions, setTransactions] = useState<DataListProps[]>();
	const [highLightData, setHightLightData] = useState<HighLightData>(
		{} as HighLightData,
	);

	const theme = useTheme();

	function getLastTransactionsDate(
		collection: DataListProps[],
		type: 'positive' | 'negative',
	) {
		const lastTransaction = Math.max.apply(
			Math,
			collection
				.filter((item: DataListProps) => item.type === type)
				.map((item: DataListProps) => new Date(item.date).getTime()),
		);

		const lastTransactionsFormatted = new Date(lastTransaction);

		return `${lastTransactionsFormatted.getDate()} de ${lastTransactionsFormatted.toLocaleString(
			'pt-BR',
			{ month: 'long' },
		)}`;
	}

	async function loadTransaction() {
		const dataKey = '@gofinances:transactions';
		const response = await AsyncStorage.getItem(dataKey);
		const transactions = response ? JSON.parse(response) : [];

		let entriesTotal = 0;
		let expensiveTotal = 0;

		const transactionsFormatted: DataListProps[] = transactions.map(
			(item: DataListProps) => {
				if (item.type === 'positive') {
					entriesTotal += Number(item.amount);
				} else {
					expensiveTotal += Number(item.amount);
				}

				const amount = Number(item.amount).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});

				const date = Intl.DateTimeFormat('pt-Br', {
					day: '2-digit',
					month: '2-digit',
					year: '2-digit',
				}).format(new Date(item.date));

				return {
					id: item.id,
					name: item.name,
					amount,
					type: item.type,
					category: item.category,
					date,
				};
			},
		);
		setTransactions(transactionsFormatted);

		const lastTransactionsEntries = getLastTransactionsDate(
			transactions,
			'positive',
		);
		const lastTransactionsExpensives = getLastTransactionsDate(
			transactions,
			'negative',
		);
		const totalInterval = `01 a ${lastTransactionsExpensives}`;

		setHightLightData({
			entries: {
				amount: entriesTotal.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}),
				lastTransactions: `Ultima entrada dia ${lastTransactionsEntries}`,
			},
			expensives: {
				amount: expensiveTotal.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}),
				lastTransactions: `Ultima saida dia ${lastTransactionsExpensives}`,
			},
			total: {
				amount: (entriesTotal - expensiveTotal).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}),
				lastTransactions: totalInterval,
			},
		});

		setIsLoadind(false);
	}

	useEffect(() => {
		loadTransaction();
	}, []);

	useFocusEffect(
		useCallback(() => {
			loadTransaction();
		}, []),
	);
	return (
		<Container>
			{isLoading ? (
				<LoadContainer>
					<ActivityIndicator color={theme.colors.primary} size="large" />
				</LoadContainer>
			) : (
				<>
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
							amount={highLightData?.entries?.amount}
							lastTransaction={highLightData?.entries?.lastTransactions}
							title="Entradas"
						/>
						<HighlightCard
							type="arrow-down-circle"
							amount={highLightData?.expensives?.amount}
							lastTransaction={highLightData?.expensives?.lastTransactions}
							title="Saídas"
						/>
						<HighlightCard
							type="dollar-sign"
							amount={highLightData?.total?.amount}
							lastTransaction={highLightData?.total?.lastTransactions}
							title="Total"
						/>
					</HightLightCards>

					<Transactions>
						<Title>Listagem</Title>

						<TransactionList
							data={transactions}
							keyExtractor={(item: any) => item.id}
							renderItem={({ item }) => (
								<TransactionCard data={item as TransactionsCardProps} />
							)}
						/>
					</Transactions>
				</>
			)}
		</Container>
	);
}
