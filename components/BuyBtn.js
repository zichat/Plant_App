import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../containers/colors";

const BuyBtn = ({text}) => {
  return (
    <View style={style.buyBtn}>
      <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default BuyBtn;
