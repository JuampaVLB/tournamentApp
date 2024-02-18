import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens

import Tabs from "./tabs";
import { Tournaments } from "../screens/Tournaments";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { PreRegister } from "../screens/PreRegister";
import { FirstTime } from "../components/main/FirstTime";
import { Hub } from "../components/account/Hub";
import { ShowInfo } from "../components/tournaments/ShowInfo";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="FirstScreenTime"
      screenOptions={{ headerShown: false }}
    >
      <HomeStackNavigator.Screen name="FirstScreenTime" component={FirstTime} />

      <HomeStackNavigator.Screen name="HubScreen" component={Hub} />

      <HomeStackNavigator.Screen name="PreRegisterScreen" component={PreRegister} />

      <HomeStackNavigator.Screen name="RegisterScreen" component={Register} />

      <HomeStackNavigator.Screen name="LoginScreen" component={Login} />

      <HomeStackNavigator.Screen name="HomeScreen" component={Tabs} />

      <HomeStackNavigator.Screen
        name="TournamentsScreen"
        component={Tournaments}
      />

      <HomeStackNavigator.Screen name="HistoryScreen" component={Tournaments} />
    </HomeStackNavigator.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return <MyStack />;
}
