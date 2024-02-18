import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

import logo from "../../../assets/ball.png";

export const UserCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar.Image size={48} source={logo} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Brawl Nexus</Text>
        <Text style={{ fontSize: 18, color: "gray" }}>Tournaments: 20</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatar: {
    backgroundColor: "#fff",
    width: 48,
    height: 48,
  },
  content: {
    height: "100%",
  },
  text: {
    fontSize: 18,
  },
});
