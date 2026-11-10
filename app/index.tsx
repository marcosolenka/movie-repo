import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  // Gera um ID aleatório entre 0 e 9 para o Botão 3
  const handleRandomMovie = () => {
    const randomId = Math.floor(Math.random() * 10);
    router.push(`/movie/${randomId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube de Cinema</Text>
      
      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar como Convidado</Text>
        </Pressable>
      </Link>

      <Pressable 
        style={styles.button} 
        onPress={() => router.push('/home?user=Marcos')}
      >
        <Text style={styles.buttonText}>Entrar como Usuário Logado</Text>
      </Pressable>

      {/* Botão 3: Ver um Filme Aleatório (ID entre 0 e 9) */}
      <Pressable style={[styles.button, styles.movieButton]} onPress={handleRandomMovie}>
        <Text style={styles.buttonText}>Ver um Filme Aleatório</Text>
      </Pressable>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  movieButton: {
    backgroundColor: '#E50914',
    borderColor: '#E50914',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});