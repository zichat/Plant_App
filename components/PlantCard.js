import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../containers/colors";

const width = Dimensions.get("window").width / 2 - 30;

const PlantCard = ({ plant, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", plant)}
    >
      
      <View style={style.card}>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: plant.like
                ? "rgba(245, 42,42,0.2)"
                : "rgba(0,0,0,0.2)",
            }}
          >
            <Icon
              name="favorite"
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>

        <View style={{ height: 100, alignItems: "center" }}>
          <Image
            source={plant.img}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </View>

        <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontWeight: "bold", fontSize: 17, margin: 10 }}>
          {plant.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            ${plant.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 22, color: COLORS.white, fontWeight: "bold" }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default PlantCard;
