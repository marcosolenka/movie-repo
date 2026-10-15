import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormSwitch from "../components/FormSwitch";

export default function MovieFormScreen() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [nameError, setNameError] = useState("Campo obrigatório");

  const [gender, setGender] = useState("");
  const [genderValid, setGenderValid] = useState(false);
  const [genderError, setGenderError] = useState("Campo obrigatório");

  const [description, setDescription] = useState("");
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [descriptionError, setDescriptionError] = useState("Campo obrigatório");

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const valid = nameValid && genderValid && descriptionValid && acceptedTerms;

    setIsFormValid(valid);
  }, [nameValid, genderValid, descriptionValid, acceptedTerms]);

  const handleSubmit = () => {
    console.log("Filme cadastrado:");
    console.log("Nome:", name);
    console.log("Gênero:", gender);
    console.log("Descrição:", description);
    console.log("Termos aceitos:", acceptedTerms);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading style={styles.loading} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Movie Repo</Text>
          <Image
            source={require("../assets/wallpaper.jpg")}
            style={styles.wallpaper}
            resizeMode="cover"
          />

          <View>
            <FormInput
              label="Nome do Filme"
              value={name}
              onChangeText={setName}
              onValidationChange={setNameValid}
              error={nameValid ? "" : nameError}
            />

            <FormInput
              label="Gênero do Filme"
              value={gender}
              onChangeText={setGender}
              onValidationChange={setGenderValid}
              error={genderValid ? "" : genderError}
            />

            <FormInput
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              onValidationChange={setDescriptionValid}
              error={descriptionValid ? "" : descriptionError}
            />

            <FormSwitch
              label="Aceito os termos de uso"
              value={acceptedTerms}
              onValueChange={setAcceptedTerms}
            />
            <FormButton
              name="SALVAR"
              disabled={!isFormValid}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  wallpaper: {
    width: 300,
    height: 300,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
