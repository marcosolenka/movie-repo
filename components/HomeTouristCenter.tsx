import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useState } from "react";

export default function HomeTouristCenter() {
  const [name, setName] = useState("");
  const [accessAuthorized, setAccessAuthorized] = useState(false);

  return (
    <View style={styles.container}>
      {accessAuthorized ? (
        // AUTORIZADO
        <View style={styles.loggedContainer}>
          <View>
            <Text style={styles.loggedH1}>ACCESS GRANTED</Text>
          </View>

          <View>
            <Text style={styles.loggedNameTitle}>Welcome, {name}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://res.cloudinary.com/dnxobqm8c/image/upload/v1790646589/User-Profile-PNG-Image_wm9wst.png",
              }}
            />
          </View>

          <View style={styles.loggedButtonsContainer}>
            <View>
              <Button color="blue" title="START TOUR" />
            </View>

            <View>
              <Button
                color="green"
                title="LOG OUT"
                onPress={() => setAccessAuthorized(false)}
              />
            </View>
          </View>
        </View>
      ) : (
        // NÃO AUTORIZADO
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>WELCOME TO TOURIST CENTER</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.h1}>VISITOR IDENTIFICATION</Text>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Type your full name..."
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View>
              <Button
                color="gray"
                title="Request Access"
                disabled={!name}
                onPress={() => setAccessAuthorized(true)}
              />
            </View>

            <View>
              <Button color="red" title="Reset" onPress={() => setName("")} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#5c7bd1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  h1: {
    fontWeight: "semibold",
    fontSize: 40,
    textAlign: "center",
  },
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 40,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#9b6a6a",
  },
  loggedContainer: {
    padding: 20,
  },

  loggedH1: {
    fontWeight: "semibold",
    fontSize: 20,
    textAlign: "center",
  },
  loggedNameTitle: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    padding: 20,
  },
  loggedButtonsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
