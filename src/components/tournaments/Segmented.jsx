import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

export const Segmented = () => {
  const [value, setValue] = React.useState("official");

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "official",
            label: "Official",
            checkedColor: "white",
            style: value === "official" ? styles.selectedButton : styles.button,
          },
          {
            value: "community",
            label: "Community",
            checkedColor: "white",
            style:
              value === "community" ? styles.selectedButton : styles.button,
          },
          {
            value: "informal",
            label: "Informal",
            checkedColor: "white",
            style: value === "informal" ? styles.selectedButton : styles.button,
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    borderColor: "#D8D8D8",
    color: "white",
    // backgroundColor: 'green', // Color del botón no seleccionado
  },
  selectedButton: {
    borderColor: "#D8D8D8",
    backgroundColor: "#FF206E", // Color del botón seleccionado
  },
});
