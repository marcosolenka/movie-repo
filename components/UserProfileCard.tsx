import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

type UserProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
  status?: boolean;
  onPressFollow?: () => void;
};

export default function UserProfileCard({
  name,
  role,
  avatarUrl,
  bio,
  status,
  onPressFollow,
}: UserProfileCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.profileStats}>
          <Image style={styles.imageProfile} source={{ uri: avatarUrl }} />
          {status && <View style={styles.status}></View>}
        </View>
        <View style={styles.personalInformations}>
          <Text style={styles.h1}>{name}</Text>
          {bio ? (
            <Text style={styles.h2}>{role}</Text>
          ) : (
            <Text style={styles.h2}>Este usuário não possui biografia</Text>
          )}
        </View>
      </View>

      <View>
        <Text style={styles.personalDescription}>{bio}</Text>
      </View>
      {onPressFollow && (
        <TouchableOpacity style={styles.button} onPress={onPressFollow}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Seguir</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  imageProfile: {
    borderRadius: 100,
    backgroundColor: "#000",
    width: 100,
    height: 100,
  },
  headerCard: {
    flexDirection: "row",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 14,
    fontWeight: "light",
  },
  personalInformations: {
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  personalDescription: {
    marginTop: 10,
  },
  status: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 3,
    backgroundColor: "#b8d803",
    marginTop: 75,
    marginLeft: -28,
  },
  profileStats: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2f68e2",
    padding: 10,
    borderRadius: 30,
    width: "100%",
    marginTop: 10,
  },
});
