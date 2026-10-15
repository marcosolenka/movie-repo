import { View, Text, Switch, StyleSheet } from 'react-native';

type FormSwitchProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export default function FormSwitch({
  label,
  value,
  onValueChange,
}: FormSwitchProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 12,
    flex: 1,
  },
});