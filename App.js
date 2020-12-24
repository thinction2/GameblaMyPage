import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconComponent from "./iconComponent";
import UserPageComponent from "./userPageComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <UserPageComponent />
      <IconComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
