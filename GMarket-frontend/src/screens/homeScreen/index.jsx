import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CarouselScreen from "../../components/Carousel";
import CategorieFeature from "../../components/categorieFeature";
import PosterCard from "../../components/PosterCard";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPosterData } from "../../redux/slices/currentSlice";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  const fakeSeachhandler = () => {
    navigation.navigate("Search Screen");
  };

  const categoriesPressHandler = async (cat) => {
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <TouchableOpacity onPress={fakeSeachhandler} style={styles.fakeSearch}>
        <AntDesign name="search1" size={20} color="black" />
        <Text style={{ marginLeft: 5 }}>Search Product</Text>
      </TouchableOpacity>
      <CarouselScreen data={app.carouselImages} />
      <View style={styles.categories}>
        <Text style={styles.cat_title}>Categories</Text>
        <View style={styles.cat_container}>
          {app.categoriesImages.map((data, index) => (
            <CategorieFeature
              key={index}
              onPress={categoriesPressHandler}
              text={data}
            />
          ))}
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.cat_title}>Recommended</Text>

        {app.recomendedProduct.map((element, index) => (
          <PosterCard
            onPress={() => {
              dispatch(setCurrentPosterData(element));
            }}
            key={index}
            data={element}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
