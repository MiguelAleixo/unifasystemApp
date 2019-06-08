import React from 'react';
import { View, Button, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import navigation from 'react-navigation';
import { TextInput } from 'react-native-paper';

type Props = {
  theme: Theme,
};

type State = {
  text: string,
  name: string,
  outlinedText: string,
};

export default class Info extends React.Component {
  state = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    cidade: '',
    curso: ''
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      // <KeyboardAvoidingView style={styles.wrapper}>
        <ScrollView
          style={[styles.container]}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={false}
        >
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Nome"
            value={this.state.nome}
            onChangeText={nome => this.setState({ nome })}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="CPF"
            value={this.state.cpf}
            onChangeText={cpf => this.setState({ cpf })}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Data de nascimento"
            value={this.state.dataNascimento}
            onChangeText={dataNascimento => this.setState({ dataNascimento })}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Cidade"
            value={this.state.cidade}
            onChangeText={cidade => this.setState({ cidade })}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Curso"
            value={this.state.curso}
            onChangeText={curso => this.setState({ curso })}
          />
        </ScrollView>
      // {/* </KeyboardAvoidingView> */}
    );
  }
}

Info.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'rgba(0,0,0,0.04)'
  },
  wrapper: {
    flex: 1,
    margin: 40
  },
  inputContainerStyle: {
    margin: 8,
  },
});