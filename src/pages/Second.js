import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Second(props) {
  console.log(props);

  function backToFirst() {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Second</Text>
      <Button title="Go Back" onPress={backToFirst} />
    </View>
  );
}

export default Second;

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
