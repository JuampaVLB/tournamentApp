import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Modules

import SelectDropdown from "react-native-select-dropdown";
import { Divider } from "react-native-paper";

// Icons

import { AntDesign } from "@expo/vector-icons";

export const ModalFilter = () => {
  const regions = ["ALL", "NA", "EU", "SA", "SEA", "AUS"];
  const modes = ["ALL", "1v1", "2v2"];
  const types = ["ALL", "Official", "Community", "Informal"];
  const states = ["ALL", "Incompleted", "Completed"];
  const countries = ["ALL", "Egypt", "Canada", "Australia", "Ireland"];

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 20 }}>Search Filter</Text>
      </View>
      <View style={styles.body}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>State</Text>
          <SelectDropdown
            data={states}
            // defaultButtonText=""
            defaultValue={countries[0]}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "up" : "down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition="right"
            buttonStyle={{
              backgroundColor: "transparent",
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 150,
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Mode</Text>
          <SelectDropdown
            data={modes}
            defaultValue={countries[0]}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "up" : "down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition="right"
            buttonStyle={{
              backgroundColor: "transparent",
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 150,
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Type</Text>
          <SelectDropdown
            data={types}
            // defaultButtonText=""
            defaultValue={countries[0]}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "up" : "down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition="right"
            buttonStyle={{
              backgroundColor: "transparent",
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 150,
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Region</Text>
          <SelectDropdown
            data={regions}
            defaultValue={countries[0]}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "up" : "down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition="right"
            buttonStyle={{
              backgroundColor: "transparent",
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 150,
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
      <Divider />
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  top: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    paddingLeft: 25,
  },
  body: {
    paddingTop: 20,
    width: "100%",
    height: "75%",
    paddingLeft: 25,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "flex-end",
    width: "100%",
    height: "15%",
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
