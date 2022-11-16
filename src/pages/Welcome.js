import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./components/Button/Button";
function Welcome({ navigation }) {
  function goToMemberSign() {
    navigation.navigate("MemberSignScreen");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>KEBAP FİTNESS</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
});

export default Welcome;
