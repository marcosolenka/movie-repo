import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { user } = useLocalSearchParams<{ user?: string }>();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerTitle}>🎬 Clube de Cinema</Text>
        
        {user ? (
          <Text style={styles.welcomeText}>
            Bem-vindo, <Text style={styles.highlight}>{user}</Text>! Hoje tem promoção para sócios! Ingresso R$10,00.
          </Text>
        ) : (
          <Text style={styles.welcomeText}>
            Bem-vindo ao Clube de Cinema! Ingresso R$20,00.
          </Text>
        )}

        {/* Botão de retorno correto utilizando router.back() para não empilhar histórico */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar à Tela Inicial</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 20,
  },
  welcomeText: {
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