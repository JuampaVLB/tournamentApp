import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

import { List, Divider } from "react-native-paper";

// Assets

import { MaterialCommunityIcons, FontAwesome, AntDesign, Feather, Entypo} from "@expo/vector-icons";

import torneoImg from "../../../assets/torneo.png";

// Modules

import { useNavigation, useRoute } from "@react-navigation/native";

export const ShowInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const tournamentId = route.params?.tournamentId;

  console.log(tournamentId);

  return (
    <ScrollView>
      <StatusBar />
      <Image style={styles.image} source={torneoImg} resizeMode="stretch" />
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 40 }}>Next Stage #14</Text>
        <View style={styles.block}>
          <List.Section
            titleStyle={{ textAlign: "left", paddingLeft: 0, fontSize: 25 }}
            title="Information"
          >
            {/* <List.Subheader>Some title</List.Subheader> */}
            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Type: "
              left={() => (
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color="#FF206E"
                />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Region: "
              left={() => (
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color="#FF206E"
                />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Award: "
              left={() => (
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color="#FF206E"
                />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Region: "
              left={() => (
                <MaterialCommunityIcons
                  name="information-outline"
                  size={24}
                  color="#FF206E"
                />
              )}
            />
          </List.Section>

          <List.Section
            titleStyle={{ textAlign: "left", paddingLeft: 0, fontSize: 25 }}
            title="Schedule"
          >

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Check In: "
              left={() => (
                <AntDesign name="clockcircleo" size={24} color="#FF206E" />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Tournament: "
              left={() => (
                <AntDesign name="clockcircleo" size={24} color="#FF206E" />
              )}
            />
          </List.Section>

          <List.Section
            titleStyle={{ textAlign: "left", paddingLeft: 0, fontSize: 25 }}
            title="Rules"
          >
            {/* <List.Subheader>Some title</List.Subheader> */}
            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Game Mode: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Teams: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Lives: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Match Time: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Gadgets: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Test Features: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="Map Set: "
              left={() => <Entypo name="ruler" size={24} color="#FF206E" />}
            />
          </List.Section>

          <List.Section
            titleStyle={{ textAlign: "left", paddingLeft: 0, fontSize: 25 }}
            title="Prizing"
          >
            {/* <List.Subheader>Some title</List.Subheader> */}
            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="1st: "
              left={() => (
                <FontAwesome name="money" size={24} color="#FF206E" />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="2nd: "
              left={() => (
                <FontAwesome name="money" size={24} color="#FF206E" />
              )}
            />

            <List.Item
              titleStyle={{ marginTop: -3, fontSize: 20, fontWeight: "bold" }}
              title="3rd: "
              left={() => (
                <FontAwesome name="money" size={24} color="#FF206E" />
              )}
            />
          </List.Section>

          <Divider />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: -10,
              justifyContent: "space-around",
              alignItems: "center",
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            <Feather name="twitter" size={28} color="#41EAD4" />
            <Feather name="instagram" size={28} color="#41EAD4" />
            <Feather name="twitch" size={28} color="#41EAD4" />
            <AntDesign name="link" size={28} color="#41EAD4" />
          </View>
          <Divider />
          <Text
            style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}
          >
            Created for <Text style={{ color: "#FF206E" }}>Brawl Nexus</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    backgroundColor: "gray",
    width: "100%",
    height: 200,
  },
  block: {
    // marginTop: 30,
  },
});
