import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header></Header>
      <SearchBar></SearchBar>
      <View style={styles.containerCategory}>
        <CategoryButton title="Todos" selected={true}></CategoryButton>
        <CategoryButton title="Ação" selected={false}></CategoryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D14',
    paddingTop: 40,
  },
  containerCategory: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 15
  }
});


// remover o statusBar import de cima do importe
// ctrl + enter em cima do statusBar para importar do react native
//remove o style E ADICIONA O BARSTYLE
//estiliza o container
//barStyle é a cor de fundo, se o fundo preto, preciso que ele seja light-content para que a barra de cima apareça, se for fundo branco tem que ser o dark se não me engano
// instalar biblioteca: npm i @expo/vector