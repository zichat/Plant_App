import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../containers/colors";
import AddSubButton from "./AddSubButton";
import BuyBtn from "./BuyBtn";

const DetailsContainer = ({ plant }) => {
  return (
    <View style={style.detailsContainer}>
      <View
        style={{ marginLeft: 20, flexDirection: "row", alignItems: "flex-end" }}
      >
        <View style={style.line} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best Choice</Text>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{plant.name}</Text>
        <View style={style.priceTag}>
          <Text
            style={{
              marginLeft: 15,
              color: COLORS.white,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            ${plant.price}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
        <Text
          style={{
            color: COLORS.grey,
            fontSize: 16,
            lineHeight: 22,
            marginTop: 10,
          }}
        >
          {plant.about}
        </Text>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AddSubButton text="-" />
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: "bold",
              }}
            >
              1
            </Text>
            <AddSubButton text="+" />
          </View>

          <BuyBtn text="Buy" />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsContainer;
