import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../containers/colors";

const AddSubButton = ({ text }) => {
  return (
    <View style={style.btn}>
      <Text style={style.btnText}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  btn: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  btnText: {
    fontWeight: "bold",
    fontSize:28
  },
});

export default AddSubButton;
