// Modules

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

// Assets

import logo from "../../assets/bh.png";

export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        AsyncStorage.setItem("user", JSON.stringify(user));
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        Alert.alert(err.message);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={logo} resizeMode="contain" />
        <View style={styles.form}>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            activeOutlineColor="#FF206E"
            left={<TextInput.Icon icon="email" />}
            onChangeText={(str) => setEmail(str)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            activeOutlineColor="#FF206E"
            value={password}
            left={<TextInput.Icon icon="lock" />}
            onChangeText={(str) => setPassword(str)}
          />
          <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={{ fontSize: 16 }}>
          Don't have an account?{" "}
          <Text style={{ color: "#FF206E", fontWeight: "bold" }}>
            Signup here
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  registerContainer: {
    width: "95%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  content: {
    width: "95%",
    height: "60%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 120,
  },
  form: {
    marginTop: 35,
    display: "flex",
    gap: 20,
    width: "100%",
  },
  btn: {
    width: "100%",
    height: 55,
    marginBottom: 18,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41EAD4",
  },
});
