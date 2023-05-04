import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./style";

const { width: screenWidth } = Dimensions.get("window");



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
