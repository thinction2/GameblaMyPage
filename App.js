import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import IconComponent from "./components/1Depth/iconComponent";
import ProfileEditPage from "./components/2Depth/profileEditPage";
import UserPageComponent from "./components/1Depth/userPageComponent";
import FollowedChannelPage from "./components/2Depth/followedChannelPage";
import ReplyPage from "./components/2Depth/reply";
import LatestViewVidioPage from "./components/2Depth/LatestViewVidioPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 1 Depth */}
      {/* <View>
        <UserPageComponent />
      </View>
      <View>
        <IconComponent />
      </View> */}
      {/* 2 Depth - 1 */}
      {/* <View>
        <ProfileEditPage />
      </View> */}
      {/* 2 Depth - 2 */}
      {/* <View>
        <FollowedChannelPage />
      </View> */}
      {/* 2 Depth - 3 */}
      {/* <View>
        <ReplyPage />
      </View> */}
      {/* 2 Depth - 4 */}
      {/* <View>
        <LatestViewVidioPage />
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
