import React from "react";
import { FlatList } from "react-native";
import plants from "../containers/plants";
import PlantCard from "./PlantCard";

const PlantList = ({navigation}) => {
  return (
    <FlatList
      columnWrapperStyle={{ justifyContent: "space-between" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
      numColumns={2}
      data={plants}
      renderItem={({item}) => {
        return <PlantCard navigation={navigation} plant={item}/>
      }}
    ></FlatList>
  );
};

export default PlantList;
