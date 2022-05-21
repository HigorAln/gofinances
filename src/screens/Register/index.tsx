import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { Input } from '../../components/Forms/Input';
import { TransactionType } from '../../components/Forms/TransactionTypeButton';
import { TransactionsTypes } from './styles';
import { Container, Header, Title, Form, Fields } from './styles';

import { Modal } from 'react-native';
import { CategorySelect } from '../CategorySelect';

export function Register() {
	const [transactionType, setTransactionType] = useState('');
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);

	const [category, setCategory] = useState({
		key: 'category',
		name: 'Categoria',
	});

	function handleTransactionsTypeSelect(type: 'up' | 'down') {
		setTransactionType(type);
	}

	function handleOpenSelectCategoryModal() {
		setCategoryModalOpen(true);
	}

	function handleCloseSelectCategoryModal() {
		setCategoryModalOpen(false);
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

					<CategorySelectButton
						onPress={handleOpenSelectCategoryModal}
						title={category.name}
					/>
				</Fields>

				<Button title="Enviar" />
			</Form>

			<Modal visible={categoryModalOpen} animationType="slide">
				<CategorySelect
					closeSelectCategory={handleCloseSelectCategoryModal}
					setCategory={setCategory}
					category={category}
				/>
			</Modal>
		</Container>
	);
}
