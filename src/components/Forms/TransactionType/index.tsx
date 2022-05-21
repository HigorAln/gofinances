import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props  extends TouchableOpacityProps{
  title: string;
  type: "arrow-up-circle" | "arrow-down-circle";
}

export function TransactionType({
  title,
  type,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Feather name={type} size={24} />

      <Title>
        {title}
      </Title>
    </Container>
  );
}