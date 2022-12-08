import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsHeader = ({ navigation }) => {
  return (
    <View style={style.header}>
      <Icon
        name="arrow-back"
        size={28}
        onPress={() => navigation.goBack("Home")}
      />

      <Icon name="shopping-cart" size={28} />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DetailsHeader;
