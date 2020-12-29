import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ImageProfile } from "../../icon/icon";

const UserPageComponent = () => {
  return (
    <View style={styles.container}>
      <>
        <View style={styles.profileContainer}>
          <ImageProfile />
          <Text style={styles.userName}>userName</Text>
          <Text style={styles.userId}>@userId</Text>
          <Text style={styles.userDiscription}>userDiscription</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "powderblue",
            display: "block",
          }}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#C5DEA8",
    width: "100%",
  },
  profileContainer: {
    marginTop: 80,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 4.5,
  },
  userId: {
    color: "#707070",
    fontSize: 14,
  },
  userDiscription: {
    fontSize: 12,
    marginTop: 8,
  },
  box: {
    backgroundColor: "#fff",
    border: "3px solid black",
    with: "100%",
    height: "50px",
  },
});

export default UserPageComponent;
