import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { CategorySelect } from '../../components/Forms/CategorySelect';
import { Input } from '../../components/Forms/Input';
import { TransactionType } from '../../components/Forms/TransactionTypeButton';
import { TransactionsTypes } from './styles';
import { Container, Header, Title, Form, Fields } from './styles';

export function Register() {
	const [transactionType, setTransactionType] = useState('');

	function handleTransactionsTypeSelect(type: 'up' | 'down') {
		setTransactionType(type);
	}

	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>

			<Form>
				<Fields>
					<Input placeholder="Nome" />
					<Input placeholder="Preco" />

					<TransactionsTypes>
						<TransactionType
							type="up"
							title="Income"
							onPress={() => handleTransactionsTypeSelect('up')}
							isActive={transactionType === 'up'}
						/>
						<TransactionType
							type="down"
							title="Outcome"
							onPress={() => handleTransactionsTypeSelect('down')}
							isActive={transactionType === 'down'}
						/>
					</TransactionsTypes>

					<CategorySelect title="Categoria" />
				</Fields>

				<Button title="Enviar" />
			</Form>
		</Container>
	);
}
