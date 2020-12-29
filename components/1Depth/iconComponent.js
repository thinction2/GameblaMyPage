import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  LatestViewVidio,
  ProfileEdit,
  Notice,
  AppInformation,
  AppSetting,
  Help,
  AccountManagement,
  Reply,
  FollowedChannel,
} from "../../icon/icon";

const IconComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconOneLineWrap}>
        <View style={styles.iconWrap}>
          <ProfileEdit />
        </View>
        <View style={styles.iconWrap}>
          <FollowedChannel />
        </View>
        <View style={[styles.iconWrap, { marginRight: 0 }]}>
          <Reply />
        </View>
      </View>
      <View style={styles.iconOneLineWrap}>
        <View style={styles.iconWrap}>
          <LatestViewVidio />
        </View>
        <View style={styles.iconWrap}>
          <AccountManagement />
        </View>
        <View style={[styles.iconWrap, { marginRight: 0 }]}>
          <AppSetting />
        </View>
      </View>
      <View style={[styles.iconOneLineWrap, { paddingBottom: 0 }]}>
        <View style={styles.iconWrap}>
          <Notice />
        </View>
        <View style={styles.iconWrap}>
          <Help />
        </View>
        <View style={[styles.iconWrap, { marginRight: 0 }]}>
          <AppInformation />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  iconOneLineWrap: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  iconWrap: {
    marginRight: 13,
  },
});

export default IconComponent;
