import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const FILMES = [
  { id: '0', nome: 'Interestelar' },
  { id: '1', nome: 'A Origem' },
  { id: '2', nome: 'Batman: O Cavaleiro das Trevas' },
  { id: '3', nome: 'Pulp Fiction: Tempo de Violência' },
  { id: '4', nome: 'O Senhor dos Anéis: A Sociedade do Anel' },
  { id: '5', nome: 'Clube da Luta' },
  { id: '6', nome: 'Matrix' },
  { id: '7', nome: 'O Poderoso Chefão' },
  { id: '8', nome: 'Forrest Gump: O Contador de Histórias' },
  { id: '9', nome: 'Vingadores: Ultimato' },
];

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Busca o filme correspondente ao ID recebido nos parâmetros da rota
  const filmeEncontrado = FILMES.find((filme) => filme.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerTitle}>Detalhes da Produção</Text>

        {filmeEncontrado ? (
          <Text style={styles.movieText}>
            Exibindo detalhes do filme: <Text style={styles.highlight}>{filmeEncontrado.nome}</Text>
          </Text>
        ) : (
          <Text style={styles.movieText}>
            Filme com ID <Text style={styles.highlight}>{id}</Text> não encontrado no catálogo.
          </Text>
        )}

        {/* Botão de retorno para a Home (ou uso de router.back()) */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 24,
    borderRadius: 12,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 20,
  },
  movieText: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  highlight: {
    color: '#4682B4',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});