import React from 'react';
import { Button, View, Text, AsyncStorage, StyleSheet, Alert } from 'react-native';
import { List, Avatar, IconButton, FAB, Appbar } from 'react-native-paper';

export default class Listagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [
                // {
                //     codigo: '1',
                //     nome: 'Godofredo Arantes Neves',
                //     cpf: '111.111.111-11',
                //     dataNascimento: '15/08/1988',
                //     cidade: 'Franca',
                //     curso: 'Engenharia de Software',
                //     imagem: require('../assets/image1.jpg')
                // },
                // {
                //     codigo: '2',
                //     nome: 'Batata Frita',
                //     cpf: '222.222.222-22',
                //     dataNascimento: '19/10/1987',
                //     cidade: 'Franca',
                //     curso: 'Engenharia de Software',
                //     imagem: require('../assets/image2.jpg')
                // },
                // {
                //     codigo: '3',
                //     nome: 'Beltrano Betrano',
                //     cpf: '333.333.333-33',
                //     dataNascimento: '23/08/1999',
                //     cidade: 'Franca',
                //     curso: 'Sistemas de Informação',
                //     imagem: require('../assets/image3.jpg')
                // },
                // {
                //     codigo: '6',
                //     nome: 'Ciclano Ciclano',
                //     cpf: '444.444.444-44',
                //     dataNascimento: '14/08/2001',
                //     cidade: 'Franca',
                //     curso: 'Ciência da Computação',
                //     imagem: require('../assets/image1.jpg')
                // }
            ]
        };

        // try {
        //     AsyncStorage.setItem("dados", JSON.stringify(this.state.user));
        // } catch (e) {
        //     console.error('Falha ao salvar dados');
        // }
    }

    async deleteItem(index) {
        let users = this.state.user;
        users.splice(index, 1);

        try {
            await AsyncStorage.setItem('dados', JSON.stringify(users));
        } catch (e) {
            console.error('Falha ao salvar dados');
        }
        this.setState({ ...this.state });
    }

    renderList() {
        return this.state.user.map((user, index) => (
            <List.Item
                onPress={() => console.log('xenes')}
                key={index}
                title={user.nome}
                description={`${user.cpf} - ${user.curso}`}
                left={props => (<Avatar.Image {...props} size={52} source={user.imagem} />)}
                right={props => <IconButton icon="delete" onPress={() => { this.deleteItem(index) }}
                />}
            />
        ))
    }

    render() {
        //   console.warn(JSON.stringify(this.state))
        try {
            AsyncStorage.getItem('dados').then((value) => {
                this.setState({ user: JSON.parse(value || '[]') });
            });
        } catch (e) {
            console.error('falha ao ler dados');
        }

        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{backgroundColor: '#3F51B5'}}>
                    <Appbar.Action icon="menu" />
                    <Appbar.Content
                        title="Lista de alunos"
                    />
                    <Avatar.Image size={40} source={require('../assets/indiano-google.jpg')} />
                </Appbar.Header>

                <View style={styles.container}>
                    {this.renderList()}
                    <FAB
                        style={styles.fab}
                        icon="add"
                        onPress={() => this.props.navigation.navigate('Info')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        position: 'relative'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#F50057'
    },
})

List.navigationOptions = {
    title: 'Listagem de Usuários',
}