import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    imageProfile: {
        width: '100%',
        resizeMode: 'contain',
    },
    forgotText: {
        fontSize: 16,
        textAlign: 'center'
    }
});

export default loginStyle;