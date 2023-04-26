import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";
import styles from "./style";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

const { width: screenWidth } = Dimensions.get("window");

const images = [
  {
    uri: "https://picsum.photos/id/1003/500/500",
    title: "Image 1",
  },
  {
    uri: "https://picsum.photos/id/1004/500/500",
    title: "Image 2",
  },
  {
    uri: "https://picsum.photos/id/1005/500/500",
    title: "Image 3",
  },
  {
    uri: "https://picsum.photos/id/1006/500/500",
    title: "Image 4",
  },
];

const renderImageItem = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
    </View>
  );
};
const CarouselScreen = (props) => {
  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={props.data}
        autoplay={true}
        autoplayInterval={4000}
        renderItem={renderImageItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 30}
        loop={true}
      />
    </View>
  );
};

export default CarouselScreen;
