import * as React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Avatar, Card, Text, Divider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
<Feather name="dollar-sign" size={24} color="black" />;

// Modules

import { useNavigation } from "@react-navigation/native";

import torneoImg from "../../../assets/torneo.png";
import founderImg from "../../../assets/ball.png";

export const CardTournament = (props) => {
  const navigation = useNavigation();
  const cardStyle = props.finish ? styles.cardFinish : styles.card;

  const handleClick = () => {
    navigation.navigate("ShowInfoScreen", { tournamentId: 1 });
  };

  return (
    <Card style={cardStyle} mode="contained" onPress={handleClick}>
      <Card.Cover source={torneoImg} />
      <Card.Content style={styles.cardContent}>
        <Text variant="titleLarge">
          {props.title} - {props.mode}
        </Text>
        <Text variant="bodyMedium">
          {`${props.type} (${props.region}) ${props.month} ${props.numberOfDay}, ${props.year} ${props.startTime} - ${props.endTime}`}
        </Text>

        <View style={styles.flexInfo}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="dollar-sign" size={24} color="#FF206E" />
            <Text style={{ fontWeight: "600", fontSize: 20 }}>
              {props.prizePool} USD
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Feather name="clock" size={24} color="#FF206E" />
            {props.finish ? (
              <Text style={{ fontWeight: "100", fontSize: 18 }}>Completed</Text>
            ) : (
              <Text style={{ fontWeight: "100", fontSize: 18 }}>
                3 days left
              </Text>
            )}
          </View>
        </View>

        <Divider />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar.Image
            size={34}
            source={founderImg}
            style={{ backgroundColor: "white" }}
          />
          <Text>Created for Brawl Nexus</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D8D8D8",
  },
  cardFinish: {
    marginTop: 20,
    padding: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D8D8D8",
    opacity: 0.5,
  },
  cardContent: {
    display: "flex",
    marginTop: 15,
    gap: 35,
  },
  flexInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#20314a",
    height: 1,
  },
});
