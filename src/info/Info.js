import React, { Component } from 'react';
import { View, Alert, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import navigation from 'react-navigation';
import { TextInput, Button, HelperText, TextInputMask } from 'react-native-paper';

export default class Info extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      cpf: '456.869.008-09',
      dataNascimento: '01/12/1999',
      cidade: '',
      curso: ''
    };
  }

  _isCPFValid = () => /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/.test(this.state.cpf);
  _isDateValid = () => /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.state.dataNascimento);

  onSubmit() {
    Alert.alert(JSON.stringify(this.state))
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      // <KeyboardAvoidingView style={styles.wrapper}>
      <ScrollView
        style={[styles.container]}
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >
       
        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="Nome"
            value={this.state.nome}
            onChangeText={nome => this.setState({ nome })}
          />
          <HelperText type="info">
            Digite o nome completo
            </HelperText>
        </View>

        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="CPF"
            value={this.state.cpf}
            error={!this._isCPFValid()}
            onChangeText={cpf => this.setState({ cpf })}
          />
          <HelperText type="error" visible={!this._isCPFValid()}>
            Digite um CPF válido
            </HelperText>
        </View>

        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="Data de nascimento"
            value={this.state.dataNascimento}
            error={!this._isDateValid()}
            onChangeText={dataNascimento => this.setState({ dataNascimento })}
          />
          <HelperText type="error" visible={!this._isDateValid()}>
            Digite uma data válida
            </HelperText>
        </View>

        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="Cidade"
            value={this.state.cidade}
            onChangeText={cidade => this.setState({ cidade })}
          />
          <HelperText type="info">
            Escolha a cidade
            </HelperText>
        </View>

        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="Curso"
            value={this.state.curso}
            onChangeText={curso => this.setState({ curso })}
          />
          <HelperText type="info">
            Escolha o curso
            </HelperText>
        </View>

        <Button mode="contained" onPress={() => this.onSubmit()} style={styles.button}>
          Cadastrar
        </Button>
      </ScrollView >
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
  button: {
    margin: 8
  }
});