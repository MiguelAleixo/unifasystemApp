import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Picker, AsyncStorage } from 'react-native';
import { TextInput, Avatar, FAB, Appbar } from 'react-native-paper';
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
                imagem: '',
                dataNascimento: '',
                curso: 'Sistemas de informação'
            },
            alreadyExist: false
        };

    }

    componentDidMount() {
        this.getData();
    }

    async onSubmit() {
        const dados = this.state.user;
        const info = this.state.info;

        if (!this.state.alreadyExist) {
            info.imagem = Math.floor(Math.random() * 3);
            dados.push(this.state.info);
        } else {
            dados[this.props.navigation.getParam('id')] = info;
        }

        try {
            await AsyncStorage.setItem('dados', JSON.stringify(dados));
            this.props.navigation.navigate('List');
        } catch (e) {
            console.error('Falha ao salvar dados');
        }
    }

    async getData() {
        console.log('chamo');
        try {
            await AsyncStorage.getItem('dados').then((value) => {
                this.setState({ user: JSON.parse(value || '[]') });
            });

            if (this.props.navigation.getParam('id') !== undefined) {
                const userId = this.props.navigation.getParam('id');

                let info = this.state.info;

                info = this.state.user[userId];

                this.setState({ info, alreadyExist: true });
            }

        } catch (e) {
            console.error('falha ao ler dados');
        }
    }

    renderInfo() {
        return (
            <ScrollView
                keyboardShouldPersistTaps={'always'}
                removeClippedSubviews={false}
            >

                <TextInput
                    mode="outlined"
                    label="Nome"
                    style={{ ...styles.inputContainerStyle, marginTop: 16 }}
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
    inputContainerStyle: {
        marginBottom: 16,
        backgroundColor: '#FFF'
    },
    fab: {
        position: 'absolute',
        margin: 8,
        right: 0,
        bottom: 0,
        backgroundColor: '#F50057'
    }
});