import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

function First(props) {
  console.log(props);
  function navigationToPage() {
    props.navigation.navigate("SecondScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello First</Text>
      <Button title="Go To Second" onPress={navigationToPage} />
    </SafeAreaView>
  );
}

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
