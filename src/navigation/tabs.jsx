import { Text } from "react-native";

// Modules

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

// Components

import { Home } from "../screens/Home";
import { Tournaments } from "../screens/Tournaments";
import { Organizations } from "../screens/Organizations";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FF206E",
        tabBarStyle: {
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Tournaments"
        component={Tournaments}
        options={{
          tabBarLabel: "Tournaments",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="tournament"
              size={size}
              color={color}
            />
          ),
          //   headerShown: false,
        }}
      />

      <Tab.Screen
        name="Organizations"
        component={Organizations}
        options={{
          tabBarLabel: "Organizations",
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <AntDesign name="caretup" size={size} color={color} />
            <Octicons name="organization" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <>
      <MyTabs />
    </>
  );
};

export default HomeScreen;
