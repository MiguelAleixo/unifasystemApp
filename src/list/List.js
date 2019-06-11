import React from 'react';
import { Button, View, Text, AsyncStorage }
  from 'react-native';

import { List } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons';
import { FAB } from 'react-native-paper';

export default class Listagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          nome: 'Godofredo Arantes Neves',
          cpf: '111.111.111-11',
          dataNascimento: '15/08/1988',
          cidade: 'Franca',
          curso: 'Engenharia de Software',
          icon: 'delete'
        },
        {
          nome: 'Batata Frita',
          cpf: '222.222.222-22',
          dataNascimento: '19/10/1987',
          cidade: 'Franca',
          curso: 'Engenharia de Software',
          icon: 'delete'
        },
        {
          nome: 'Beltrano Betrano',
          cpf: '333.333.333-33',
          dataNascimento: '23/08/1999',
          cidade: 'Franca',
          curso: 'Sistemas de Informação',
          icon: 'delete'
        },
        {
          nome: 'Ciclano Ciclano',
          cpf: '444.444.444-44',
          dataNascimento: '14/08/2001',
          cidade: 'Franca',
          curso: 'Ciência da Computação',
          icon: 'delete'
        }
      ]
    };
  }
  render() {
    try {
      AsyncStorage.getItem('dados').then((value) => {
        this.state.user = (JSON.parse(value) || []);
      });
    } catch (e) {
      console.error('falha ao ler dados');
    }

return (
  <View>

     {
        global.dados.map((user, i) => (
          <List.Item
            title={user.nome}
            description={user.cpf}
            right={props => <List.Icon {...props} icon="folder" />}
          />
        ))
      }

      <Button title='novo'
      onPress={()=>
        this.props.navigation.navigate('Info')} 
      />

  </View>
);
  }
}

List.navigationOptions = {
  title: 'Listagem de Usuários',
}