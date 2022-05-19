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
   HightLightCards
 } from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard(){
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
    </Container>
  )
}