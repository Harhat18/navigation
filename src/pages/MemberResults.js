import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MemberResult({ route }) {
  const { user } = route.params;
  return (
    <View>
      <Text style={styles.messages}>Kayıt Tamamlandı.</Text>
      <Text style={styles.label}>Üye Adı:{user.userName}</Text>
      <Text style={styles.label}>Üye Soydı:{user.setSurname}</Text>
      <Text style={styles.label}>Üye Yaşı:{user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta:{user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi:{user.userHome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 5,
  },
  messages: {
    fontSize: 50,
    textAlign: "center",
  },
});
export default MemberResult;
