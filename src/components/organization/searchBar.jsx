import * as React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search Organization"
      style={styles.searchbar}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D8D8D8",
  },
});
