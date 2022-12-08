import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import COLORS from "../containers/colors";
import DetailsHeader from "../components/DetailsHeader";
import ImageContainer from "../components/ImageContainer";
import DetailsContainer from "../components/DetailsContainer";

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DetailsHeader navigation={navigation} />

      <ImageContainer plant={plant} />

      <DetailsContainer plant={plant} />
    </SafeAreaView>
  );
};

export default DetailsScreen;
