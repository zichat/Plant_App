import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../containers/colors";

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={{ fontSize: 35, color: COLORS.green, fontWeight: "bold" }}>
        Plant Shop
      </Text>
      <Icon name="shopping-cart" size={28} />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Header;
