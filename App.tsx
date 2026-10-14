import { StyleSheet, Text, View } from "react-native";
import ParkingSensor from "./components/ParkingSensor";

export default function App() {
  return <ParkingSensor></ParkingSensor>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBadge: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#25D366",
  },
});
