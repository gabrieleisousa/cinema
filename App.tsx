import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D14',
    paddingTop: 40,
  },
});


// remover o statusBar import de cima do importe
// ctrl + enter em cima do statusBar para importar do react native
//remove o style E ADICIONA O BARSTYLE
//estiliza o container
//barStyle é a cor de fundo, se o fundo preto, preciso que ele seja light-content para que a barra de cima apareça, se for fundo branco tem que ser o dark se não me engano
// instalar biblioteca: npm i @expo/vector