import { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import logo from "../../../assets/bh.png";

const colors = ["tomato", "thistle", "skyblue", "teal"];

export const FirstTime = () => {
  const navigation = useNavigation();

  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {

    const checkFirstTime = async () => {
        try {
          const firstTime = await AsyncStorage.getItem("firstTime");
    
          if (firstTime && firstTime !== "false") {
            
            navigation.navigate("HomeScreen");

          } else {
            await AsyncStorage.setItem("firstTime", "true");
          }
        } catch (error) {
          console.error("Error en la operación AsyncStorage:", error);
        }
      };
    
      checkFirstTime();
  }, []);

  const handleClick = () => {
    navigation.navigate("HubScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.content}>
        <SwiperFlatList
          index={2}
          showPagination
          paginationStyle={{ marginBottom: 180 }}
          paginationStyleItem={{ width: 10, height: 10 }}
          paginationActiveColor="cyan"
          data={colors}
          renderItem={({ item }) => (
            <View style={[styles.child, { backgroundColor: "white" }]}>
              <Image
                style={styles.image}
                source={logo} // Reemplaza con la ruta de tu imagen
                resizeMode="contain" // Puedes ajustar el modo de redimensionamiento según tus necesidades
              />
              <Text style={{ fontSize: 30 }}>Welcome to the best app,</Text>
              <Text style={{ fontSize: 30 }}>Brawlhalla Tournaments</Text>
              <Text style={{ fontSize: 18, maxWidth: "90%" }}>
                The convenience of having all tournament information in one
                place
              </Text>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.btn_start} onPress={handleClick}>
        <Text style={{ fontSize: 25, color: "white" }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  content: {
    width: "100%",
    height: "95%",
    // position: "absolute",
    // bottom: "50%",
  },
  child: {
    width,
    display: "flex",
    alignItems: "center",
    height: "70%",
    gap: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  btn_start: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 45,
    backgroundColor: "#FF206E",
    width: "95%",
    height: 55,
    borderRadius: 14,
  },
});
