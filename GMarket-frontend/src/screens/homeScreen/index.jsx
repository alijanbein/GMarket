import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import SearchBar from "../../components/searchBar";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CarouselScreen from "../../components/Carousel";
import CategorieFeature from "../../components/categorieFeature";
import PosterCard from "../../components/PosterCard";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const navigation = useNavigation();
  // const auth = useSelector(state => state.auth);
  const app = useSelector((state) => state.app);
  // console.log(auth);
  console.log(app);
  const [searchText, setSeachText] = useState("");
  const serchTextHandler = (text) => {
    setSeachText(text);
  };

  const serchHandler = async () => {
    console.log(searchText);
  };

  const fakeSeachhandler = () => {
    navigation.navigate("Search Screen");
  };

  const categoriesPressHandler = async (cat) => {
    console.log(cat);
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
          {app.categoriesImages.map((data,index) => (
            <CategorieFeature key ={index} onPress={categoriesPressHandler} text={data} />
          ))}
          {/* <CategorieFeature onPress={categoriesPressHandler} text="Fruit" />
          <CategorieFeature onPress={categoriesPressHandler} text="Lemons" />
          <CategorieFeature onPress={categoriesPressHandler} text="New f" />
          <CategorieFeature onPress={categoriesPressHandler} text="IDK" /> */}
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.cat_title}>Recommended</Text>

        {app.recomendedProduct.map((element, index) => (
          <PosterCard key={index} data={element} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
