import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.100.116:3000';

function showError(err) {
    Alert.alert("Opa! Ocorreu um problema!", err.message);
}

function showSuccess(msg) {
    Alert.alert("Sucesso!", msg);
}

export { server, showError, showSuccess }