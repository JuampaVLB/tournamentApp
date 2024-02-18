import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import logo from "../../../assets/bh.png";

export const Hub = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.content}>
        <Image style={styles.image} source={logo} resizeMode="contain" />
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          The best app for monitorizing your tournaments in brawlhalla
        </Text>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("PreRegisterScreen")}
          >
            <Text style={{ fontSize: 25, color: "white" }}>
              Create a free account
            </Text>
          </TouchableOpacity>

          <View
            style={{ width: "100%", height: 1, backgroundColor: "gray" }}
          ></View>

          <View
            style={{
              width: "100%",
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <TouchableOpacity
              style={styles.btnWithoutBg}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={{ fontSize: 25, color: "black" }}>Login as a organization</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={{ fontSize: 25, color: "white" }}>
                Login as a player
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: "95%",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "40%",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF206E",
    width: "100%",
    height: 55,
    borderRadius: 14,
  },
  btnWithoutBg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    width: "100%",
    height: 55,
    borderRadius: 14,
  },
});

export default Hub;
