import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const dataList = [
    {name: 'O Chamado', price: 3, category: 'Terror', onSale: true},
    {name: 'Interestelar', price: 5, category: 'Ficção Científica', onSale: false},
    {name: 'Fale Comigo', price: 1, category: 'Terror', onSale: true},
    {name: 'Moana', price: 5, category: 'Infantil', onSale: true},
  ]

  const userName = 'Marcos';

  return (
    <View style={styles.container}>
      {/* Faz a interpolação do username */}
      <Text>Bem vindo de volta { userName }</Text>
      {/* Define o índice do array como valor da prop key, que identifica o elemento. Utiliza função map para iterar o array */}
      {dataList.map((movie, index) => (
        <View key={index}>
          <Text>Filme: { movie.name }</Text>
          {/* Utiliza operador curto circuito para aplicar estilo caso filme esteja em promoção. Foi usado view para renderizar
          o alerta e o preço, para poder renderizar o badge de notificação. */}
          <View>
            <Text>Preço: {movie.price}</Text>

            {movie.onSale && (
              <View style={styles.notificationBadge} />
            )}
          </View>
          <Text>Categoria: { movie.category }</Text>  
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#25D366',
  },
});
