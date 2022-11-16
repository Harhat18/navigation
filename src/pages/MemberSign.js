import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./components/input/input";
import Button from "./components/Button/Button";

function MemberSign({ navigation }) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHome, setUserHome] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHome) {
      Alert.alert("Kebap", "Bilgiler boş bırakılamaz");
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHome,
    };
    navigation.navigate("MemberResultScreen", { user });
  }
  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üyenin adı giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin Soyadı giriniz..."
        onChangeText={setSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin Yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin E-postasını giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye yaşadığı şehir"
        placeholder="Üyenin yaşadığı şehri giriniz..."
        onChangeText={setUserHome}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
