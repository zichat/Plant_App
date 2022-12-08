import React from "react";
import { SafeAreaView} from "react-native";
import COLORS from "../containers/colors";
import SearchBar from "../components/SearchBar";
import Header from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import PlantList from "../components/PlantList";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <Header/>

      <SearchBar/>

      <CategoryList/>

      <PlantList navigation={navigation}/>

    </SafeAreaView>
  );
};



export default HomeScreen;
