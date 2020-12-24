import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ImageProfile } from "./icon/icon";

const UserPageComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ImageProfile />
        <Text style={{ marginTop: 12 }}>Text_userDiscription</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.username}>Text_userName</Text>
        <Text style={{ color: "#707070" }}>@Text_userId</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    marginBottom: 50,
  },
  profile: {
    position: "absolute",
    left: -110,
  },
  information: {
    position: "abolute",
    top: -25,
  },
  username: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default UserPageComponent;
