import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./src/pages/First";
import Second from "./src/pages/Second";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={First} />
        <Stack.Screen name="SecondScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
