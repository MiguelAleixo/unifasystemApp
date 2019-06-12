import React, { Component } from 'react';
import { View, Alert, StyleSheet, KeyboardAvoidingView, ScrollView, Picker, AsyncStorage } from 'react-native';
import navigation from 'react-navigation';
import { TextInput, Button, List, Avatar, IconButton, FAB, Appbar } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'

export default class Info extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: [],
      info: {
        nome: '',
        codigo: '',
        cpf: '',
        imagem: "require('../assets/image1.jpg')",
        dataNascimento: '',
        curso: ''
      }
    };
  }



  onSubmit = async () => {
    this.state.user.push(this.state.info);
    let dados = this.state.user;
    console.warn(dados)

    try {
      await AsyncStorage.setItem('dados', JSON.stringify(dados));
      this.props.navigation.navigate('List');
    } catch (e) {
      console.error('Falha ao salvar dados');
    }
  }

  renderInfo() {
    return (
      <ScrollView
        style={[styles.container]}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >

        <TextInput
          mode="outlined"
          label="Nome"
          style={styles.inputContainerStyle}
          value={this.state.info.nome}
          onChangeText={nome => this.setState({ info: { ...this.state.info, nome: nome } })}
        />

        <TextInput
          mode="outlined"
          label="CPF"
          value={this.state.info.cpf}
          style={styles.inputContainerStyle}
          onChangeText={cpf => this.setState({ info: { ...this.state.info, cpf: cpf } })}
          render={
            props =>
              <TextInputMask
                {...props}
                type={'cpf'}
              />
          }
        />


        <TextInput
          mode="outlined"
          label="Data de nascimento"
          value={this.state.info.dataNascimento}
          style={styles.inputContainerStyle}
          onChangeText={dataNascimento => this.setState({ info: { ...this.state.info, dataNascimento: dataNascimento } })}
          render={
            props =>
              <TextInputMask
                {...props}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
              />
          }
        />


        <Picker
          selectedValue={this.state.info.curso}
          style={styles.inputContainerStyle}
          onValueChange={curso =>
            this.setState({ info: { ...this.state.info, curso: curso } })
          }>
          <Picker.Item label="Sistemas de informação" value="Sistemas de informação" />
          <Picker.Item label="Engenharia de software" value="Engenharia de software" />
          <Picker.Item label="Letras" value="Letras" />
          <Picker.Item label="Psicologia" value="Psicologia" />
        </Picker>
      </ScrollView >
    );
  }

  render() {

    try {
      AsyncStorage.getItem('dados').then((value) => {
        this.setState({ user: JSON.parse(value || '[]') });
      });
    } catch (e) {
      console.error('falha ao ler dados');
    }

    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: '#3F51B5' }}>
        <Appbar.BackAction
          onPress={() => this.props.navigation.navigate('List')}
        />
          <Appbar.Content
            title="Novo aluno"
          />
          <Avatar.Image size={40} source={require('../assets/indiano-google.jpg')} />
        </Appbar.Header>

        <View style={styles.container}>
          {this.renderInfo()}
          <FAB
            style={styles.fab}
            icon="done"
            onPress={this.onSubmit.bind(this)}
          />
        </View>
      </View>
    )

  }
}

Info.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8
  },
  wrapper: {
    flex: 1,
    margin: 40
  },
  inputContainerStyle: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: '#FFF'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#F50057'
  }
});