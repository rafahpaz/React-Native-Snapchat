import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./snap.png')} style={styles.image} />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#f23c54', position: 'absolute', bottom: 130, alignSelf: 'center', marginTop: 20 }]}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center' }]}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#0dabfa', position: 'absolute', bottom: 0, alignSelf: 'center', marginTop: 20 }]}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center' }]}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffc00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 400,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#f23c54',
    padding: 25,
    width: '100%',
    height: '20%'
  },
  buttonText: {
    color: '#e8eff2',
    fontSize: 60,
  },
});
