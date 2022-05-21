import React from 'react';
import { Container, Icon, Category } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
	title: string;
}

export function CategorySelectButton({ title, ...rest }: Props) {
	return (
		<Container {...rest} activeOpacity={0.7}>
			<Category>{title}</Category>

			<Icon name="chevron-down" />
		</Container>
	);
}
