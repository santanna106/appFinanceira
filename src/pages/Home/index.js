import React, {useContext,useState} from 'react';
import { View,Text, Button } from 'react-native';

import {AuthContext} from '../../contexts/auth'
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import {Background,Container,Nome,Saldo,Title,List} from './styles'

export default function Home() {

 const [historico,setHistorico] = useState([
   {key:'1',tipo:'receita',valor:1200},
   {key:'2',tipo:'despesa',valor:200},
   {key:'3',tipo:'receita',valor:140},
   {key:'4',tipo:'receita',valor:100},
 ])

 const {user} = useContext(AuthContext)
 return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>
      <Title>Ultimas Movimentações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={(({item}) => (<HistoricoList data={item} />))}
      />
    </Background>   
  );
}