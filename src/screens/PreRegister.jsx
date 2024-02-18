import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

export const PreRegister = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FontAwesome5
          style={{ marginTop: 20 }}
          name="arrow-left"
          size={24}
          color="black"
        />
        <View style={styles.titles}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Permisos Necesarios
          </Text>
          <Text style={{ fontSize: 20, color: "gray" }}>
            Vamos a pedirte acceso a tu localizacion para:
          </Text>
        </View>

        <View style={styles.features}>
          <View style={{ width: "95%" }}>
            <View style={styles.feature}>
              <Feather name="info" size={44} color="black" />
              <Text style={{ fontSize: 20, width: "85%" }}>
                Ofrecerte mejores promociones y locales registrados
              </Text>
            </View>

            <Divider style={{ marginTop: 20 }} />

            <View style={styles.feature}>
              <Feather name="info" size={44} color="black" />
              <Text style={{ fontSize: 20, width: "85%" }}>
                Ofrecerte mejores promociones y locales registrados
              </Text>
            </View>

            <Divider style={{ marginTop: 20 }} />

            <View style={styles.feature}>
              <Feather name="info" size={44} color="black" />
              <Text style={{ fontSize: 20, width: "85%" }}>
                Ofrecerte mejores promociones y locales registrados
              </Text>
            </View>

            <Divider style={{ marginTop: 20 }} />
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ fontSize: 23, color: "black" }}>Continuar</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    height: "100%",
    width: "95%",
  },
  titles: {
    marginTop: 15,
  },
  features: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    width: "100%",
  },
  feature: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
  },
  btn_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  btn: {
    width: "95%",
    height: 60,
    marginBottom: 18,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41EAD4",
  },
});
