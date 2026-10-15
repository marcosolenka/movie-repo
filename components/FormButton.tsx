import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  name: string;
  disabled: boolean;
  onPress: () => void;
};

export default function FormButton({
  name,
  disabled,
  onPress,
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#999',
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});