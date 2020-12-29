import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ArrowBack, Done, ImageProfileModify } from "../../icon/icon";

const ProfileEditPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBanner}>
        <ArrowBack />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>프로필 수정</Text>
        <Done />
      </View>
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <ImageProfileModify />
      </View>
      <View>
        <Text>닉네임</Text>
        <TextInput style={styles.input} placeholder="닉네임을 입력해주세요." />
        <Text
          style={{
            alignSelf: "flex-end",
            marginRight: 32,
            color: "rgba(0,0,0,0.5)",
          }}
        >
          0 / 20
        </Text>
      </View>
      <View style={{ marginTop: 36 }}>
        <Text>한 줄 소개</Text>
        <TextInput
          style={[styles.input, { height: 74.16 }]}
          placeholder="한 줄 소개를 작성해주세요."
        />
        <Text
          style={{
            alignSelf: "flex-end",
            marginRight: 32,
            color: "rgba(0,0,0,0.5)",
          }}
        >
          0 / 60
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  topBanner: {
    marginHorizontal: -8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: "center",
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.04)",
    height: 56,
    marginTop: 6,
    marginHorizontal: 8,
    paddingLeft: 16,
  },
});

export default ProfileEditPage;
