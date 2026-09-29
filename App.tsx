import { View, StyleSheet, Alert } from "react-native";
import UserProfileCard from "./components/UserProfileCard";

export default function App() {
  return (
    <View style={styles.container}>
      <UserProfileCard
        name="Marcos Olenka"
        role="Analista de NTI"
        status={true}
        avatarUrl="https://res.cloudinary.com/dnxobqm8c/image/upload/v1790645666/image_mirssy.png"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onPressFollow={() => {
          Alert.alert("Seguir", "Você começou a seguir o usuário!");
        }}
      />
      <UserProfileCard
        name="Emilly Zatti"
        role="Empresária"
        status={false}
        avatarUrl="https://res.cloudinary.com/dnxobqm8c/image/upload/v1790646208/Captura_de_tela_2026-09-28_224253_aqkzqx.png"
      />
      <UserProfileCard
        name="Usuário Anônimo"
        role="Não interessa"
        avatarUrl="https://res.cloudinary.com/dnxobqm8c/image/upload/v1790646589/User-Profile-PNG-Image_wm9wst.png"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        onPressFollow={() => {
          Alert.alert("Seguir", "Você começou a seguir o usuário!");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#94bdc7",
  },
});
