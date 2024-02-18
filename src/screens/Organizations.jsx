import { View, ScrollView } from "react-native";

// Components

import { SearchBar } from "../components/organization/searchBar";
import { UserCard } from "../components/organization/UserCard";

export const Organizations = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
      }}
    >
      <ScrollView style={{ width: "95%" }}>
        <SearchBar />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </ScrollView>
    </View>
  );
};
