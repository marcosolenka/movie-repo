import { View, StyleSheet, Alert } from "react-native";
import HomeTouristCenter from "./components/HomeTouristCenter";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeTouristCenter></HomeTouristCenter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
