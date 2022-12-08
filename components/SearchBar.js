import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../containers/colors";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 30, flexDirection: "row" }}>
      <View style={style.searchContainer}>
        <Icon name="search" size={25} style={{ marginLeft: 20 }} />
        <TextInput placeholder="Search" style={style.input} />
      </View>

      <View style={style.sortBtn}>
        <Icon name="sort" size={30} color={COLORS.white} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;
