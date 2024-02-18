import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { LayoutBlocks } from "../components/main/Blocks";

export const Home = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const person = await AsyncStorage.getItem("user");
    setUser(JSON.parse(person));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <Text onPress={() => console.log(user.email)}>hola como estas</Text>
      <LayoutBlocks />
    </View>
  );
};
