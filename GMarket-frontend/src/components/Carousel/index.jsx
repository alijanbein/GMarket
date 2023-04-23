import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import styles from './style';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  {
    uri: 'https://picsum.photos/id/1003/500/500',
    title: 'Image 1'
  },
  {
    uri: 'https://picsum.photos/id/1004/500/500',
    title: 'Image 2'
  },
  {
    uri: 'https://picsum.photos/id/1005/500/500',
    title: 'Image 3'
  },
  {
    uri: 'https://picsum.photos/id/1006/500/500',
    title: 'Image 4'
  },
];

const CarouselScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImageItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.uri }} />
      </View>
    );
  };

  renderImageItem.prototypes = {
    item:PropTypes.shape({
        uri :PropTypes.string
    })
  }
   return (
    <View style={styles.container}>
      <Carousel
        data={images}
        autoplay={true}
        autoplayInterval={4000}
        renderItem={renderImageItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 50}
        loop={true}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );

};





export default CarouselScreen;
