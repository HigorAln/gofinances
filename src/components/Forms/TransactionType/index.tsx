import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Porps  extends TouchableOpacityProps{
  title: string;
  type: "up" | "down";
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}

export function TransactionType({
  title,
  type,
  ...rest
}: Porps) {
  return (
    <Container {...rest}>
      <Feather name={icons[type]} size={24} style={{marginRight: "12px" }}/>

      
      <Title>
        {title}
      </Title>
    </Container>
  );
}