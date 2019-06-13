import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import loginStyle from './Style';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'professor@unifacef.edu',
            pass: 'teste123',
            errorUser: false
        }
    }

    onEnter() {
        const { user, pass } = this.state;

        if (user !== 'professor@unifacef.edu' || pass !== 'teste123') {
            this.setState({ errorUser: true });
            console.log('batata');
            return;
        }

        this.props.navigation.navigate('List');
    }

    render() {
        return (
            <View style={loginStyle.container}>
                <Image
                    source={require('../assets/LOGO_Uni-FACEF.jpg')}
                    style={loginStyle.imageProfile} />

                <TextInput
                    mode="outlined"
                    label="Usuário"
                    value={this.state.user}
                    style={{ marginBottom: 16, backgroundColor: '#FFF' }}
                    onChangeText={user => this.setState({ user })}
                    underlineColor="black"
                />

                <TextInput
                    mode="outlined"
                    label="Senha"
                    secureTextEntry={true}
                    value={this.state.pass}
                    style={{ marginBottom: 32, backgroundColor: '#FFF' }}
                    onChangeText={pass => this.setState({ pass })}
                />

                <Button
                    mode="contained"
                    onPress={() => this.onEnter()}
                    style={{ marginBottom: 32, backgroundColor: '#3F51B5' }}>
                    Entrar
                </Button>

                <Text style={loginStyle.forgotText}>Esqueci minha senha</Text>

                <Snackbar
                    visible={this.state.errorUser}
                    onDismiss={() => this.setState({ errorUser: false })}
                >
                    Usuário ou senha incorretos!
                </Snackbar>
            </View>
        )
    }
}