import React, { Component } from 'react';
import { View, Alert, StyleSheet, KeyboardAvoidingView, ScrollView, Picker, AsyncStorage } from 'react-native';
import navigation from 'react-navigation';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'

export default class Info extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      cpf: '',
      dataNascimento: '',
      cidade: '',
      curso: ''
    };
  }

  _isCPFValid = () => /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/.test(this.state.cpf);
  _isDateValid = () => /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.state.dataNascimento);

  onSubmit = async() => {
    Alert.alert(JSON.stringify(this.state))
    try {
      // const {produto,quantidade} = this.state;
      // var p = {produto: produto, quantidade: quantidade};
      // global.dados.push(this.state);

      await AsyncStorage.setItem('data', JSON.stringify(this.state));
      // this.props.navigation.navigate('Consulta',{});
    } catch (e) {
      console.error('Falha ao salvar dados');
    }
  }

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

        <TextInput
          mode="outlined"
          label="Nome"
          style={styles.input}
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
        />

        <View style={styles.inputContainerStyle}>
          <TextInput
            mode="outlined"
            label="CPF"
            value={this.state.cpf}
            error={!this._isCPFValid()}
            onChangeText={cpf => this.setState({ cpf })}
            render={
              props =>
                <TextInputMask
                  {...props}
                  type={'cpf'}
                />
            }
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
          <HelperText type="error" visible={!this._isDateValid()}>
            Digite uma data válida
            </HelperText>
        </View>

        <Picker
          selectedValue={this.state.curso}
          style={styles.input}
          onValueChange={ curso =>
            this.setState({ curso })
          }>
          <Picker.Item label="Sistemas de informação" value="1" />
          <Picker.Item label="Engenharia de software" value="2" />
          <Picker.Item label="Letras" value="3" />
          <Picker.Item label="Psicologia" value="4" />
        </Picker>

        <Button mode="contained" onPress={this.onSubmit.bind(this)} style={styles.button}>
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
    marginLeft: 8,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 26
  },
  button: {
    margin: 8
  }
});