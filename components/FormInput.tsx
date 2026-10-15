import { Text, View, TextInput, StyleSheet } from 'react-native';

type FormInputProps = {
  label: string;
  error?: string;
  value: string;
  onChangeText: (text: string) => void;
  onValidationChange: (isValid: boolean) => void;
};

export default function FormInput({
  label,
  error,
  value,
  onChangeText,
  onValidationChange,
}: FormInputProps) {

  function handleChangeText(text: string) {
    onChangeText(text);

    const isValid = text.trim() !== '';
    onValidationChange(isValid);
  }

  return (
    <View style={styles.form}>
      <Text>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 12,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});