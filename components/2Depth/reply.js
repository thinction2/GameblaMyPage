import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ArrowBack, Done } from "../../icon/icon";

const ReplyPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBanner}>
        <ArrowBack />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>작성한 댓글</Text>
        <View style={{ opacity: 0 }}>
          <Done />
        </View>
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
});

export default ReplyPage;
