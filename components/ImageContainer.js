import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ImageContainer = ({ plant }) => {
  return (
    <View style={style.imageContainer}>
      <Image source={plant.img} style={{ resizeMode: "contain", flex: 1 }} />
    </View>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageContainer;
