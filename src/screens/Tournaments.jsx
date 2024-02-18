import { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// Modules

import { Modal, Portal, Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components

import { SearchBar } from "../components/tournaments/SearchBar";
import { Segmented } from "../components/tournaments/Segmented";
import { CardTournament } from "../components/tournaments/Card";
import { ModalFilter } from "../components/tournaments/ModalFilter";

// Icons

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ModalCreateTournament } from "../components/tournaments/ModalCreateTournament";

// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// const adUnitId = "ca-app-pub-3057507757705700/1889003027";

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3057507757705700/1889003027';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const Tournaments = () => {
  const [visible, setVisible] = useState(false);
  const [visibleTournament, setVisibleTournament] = useState(false);
  const [user, setUser] = useState("");

  const getUser = async () => {
    const person = await AsyncStorage.getItem("user");
    setUser(JSON.parse(person));
  };
  const hideModal = () => setVisible(false);
  const hideModalTournament = () => setVisibleTournament(false);

  const containerStyle = {
    backgroundColor: "white",
    width: "90%",
    height: 500,
  };

  const handleFilter = async () => {
    setVisible(true);
    await AsyncStorage.removeItem("firstTime");
    await AsyncStorage.removeItem("user");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          contentContainerStyle={containerStyle}
        >
          <ModalFilter />
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={visibleTournament}
          onDismiss={hideModalTournament}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          contentContainerStyle={containerStyle}
        >
          <ModalCreateTournament />
        </Modal>
      </Portal>

      <ScrollView style={styles.containerCards}>
        {/* <Segmented /> */}
        <SearchBar />
        <CardTournament
          type="Online"
          title="NEXT STAGE #14"
          mode="1v1"
          region="BRZ"
          month="Dec"
          numberOfDay="8"
          year="2023"
          startTime="7:00pm"
          endTime="11:00pm"
          prizePool="1500"
        />
        <CardTournament
          type="Online"
          title="Brawltalha #67"
          mode="2v2"
          region="BRZ"
          month="Jan"
          numberOfDay="5"
          year="2023"
          startTime="2:00pm"
          endTime="7:00pm"
          prizePool="100"
          finish={true}
        />

        <CardTournament
          type="Presencial"
          title="Batle Frontier #22"
          mode="2v2"
          region="AUS"
          month="Nov"
          numberOfDay="2"
          year="2024"
          startTime="12:00pm"
          endTime="5:00pm"
          prizePool="250"
        />

        {/* <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    /> */}
      </ScrollView>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn_action} onPress={handleFilter}>
          <AntDesign name="filter" size={34} color="black" />
        </TouchableOpacity>

        {user ? (
          <TouchableOpacity
            style={styles.btn_action}
            onPress={() => setVisibleTournament(true)}
          >
            <Ionicons name="add" size={34} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCards: {
    flex: 1,
    width: "90%",
    marginBottom: 10,
  },
  actions: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    gap: 15,
    alignItems: "flex-end",
    flexDirection: "column",
    right: 0,
    bottom: 0,
    margin: 10,
  },
  btn_action: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#41EAD4",
  },
});
