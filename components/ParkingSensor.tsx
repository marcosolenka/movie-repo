import { useState, useEffect } from "react";
import { Text, View, TextInput, Alert, Button } from "react-native";

export default function ParkingSensor() {
  const [distance, setDistance] = useState("");
  const [status, setStatus] = useState(true);
  const message = status ? "Parar Sistema" : "Iniciar Sistema";

  useEffect(() => {
    console.log("📡 Sistema de Sensores Iniciado");

    const interval = setInterval(() => {
      console.log("Sistema de sensores ativo");
    }, 2000);

    return () => {
      status ? clearInterval(interval) : null;
      console.log("📴 Sistema de Sensores Desligado");
    };
  }, []);

  useEffect(() => {
    if (distance !== "" && Number(distance) < 20) {
      Alert.alert("⚠️ PERIGO: Muito Próximo!");
      console.log("⚠️ PERIGO: Muito Próximo!");
    }
  }, [distance]);

  return (
    <View>
      <View>
        <Text>Digite a distância em relação ao outro carro (cm):</Text>

        <TextInput
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
          placeholder="Distância em cm"
        />
      </View>
      <View>
        <Button title={message} onPress={() => setStatus(!status)}></Button>
      </View>
    </View>
  );
}
