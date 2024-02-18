import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const LayoutBlocks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square_big}>
        <AntDesign name="flag" size={64} color="white" />
        <Text style={{ fontSize: 40, color: "white" }}>260</Text>
        <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
          Tournaments
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>
          Total tournaments in the year 2023{" "}
        </Text>
      </View>

      <View style={styles.flex}>
        <View style={styles.square_small}>
          <MaterialCommunityIcons name="lan-connect" size={55} color="white" />
          <Text style={{ fontSize: 40, color: "white" }}>34</Text>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Community
          </Text>
        </View>
        <View style={styles.square_small}>
          <Ionicons name="person-outline" size={55} color="white" />
          <Text style={{ fontSize: 40, color: "white" }}>12</Text>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Informal
          </Text>
        </View>
      </View>

      <View style={styles.square_large}>
        <View>
          <Ionicons name="person-outline" size={55} color="white" />
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Official
          </Text>
        </View>
        <Text style={{ fontSize: 40, color: "white" }}>23</Text>
      </View>

      <View style={styles.containerRegions}>
        <View style={styles.columns}>
          <TouchableOpacity style={styles.square_verySmall}>
            <Feather name="twitter" size={28} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square_verySmall}>
            <Feather name="instagram" size={28} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columns}>
          <TouchableOpacity style={styles.square_verySmall}>
            <Feather name="twitch" size={28} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Twitch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.square_verySmall}>
            <AntDesign name="link" size={28} color="white" />
            <Text style={{ color: "white", fontSize: 20 }}>Website</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    gap: 35,
  },
  square_big: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    width: "95%",
    height: "30%",
    backgroundColor: "#41EAD4",
    borderRadius: 10,
  },
  flex: {
    width: "95%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  square_small: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    backgroundColor: "#FF206E",
    borderRadius: 10,
  },
  square_large: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    width: "95%",
    height: "15%",
    backgroundColor: "#FF206E",
    borderRadius: 10,
  },
  containerRegions: {
    width: "95%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columns: {
    width: "45%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  square_verySmall: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    width: "100%",
    height: "45%",
    backgroundColor: "#0C0F0A",
    borderRadius: 10,
  },
});
