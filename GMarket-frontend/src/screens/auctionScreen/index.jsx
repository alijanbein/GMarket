import {
  View,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import style from "./style";
import PosterInfo from "../../components/PosterInfo";
import ChatModal from "../../components/chatModal";

const AuctionScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ScrollView style={style.container}>
      <PosterInfo keyname="Remaining Time:" val="02:25" />
      <Image
        style={style.image}
        source={{ uri: "https://picsum.photos/id/1003/500/500" }}
      />
      <PosterInfo keyname="Last Price:" val="10000" price />
      <PosterInfo keyname="Product Name:" val="karaz" />
      <PosterInfo keyname="Product type:" val="Fruits" />
      <PosterInfo keyname="Farmer Name:" val="Ali janbein" />
      <PosterInfo
        keyname="Description:"
        desc
        val={
          "orem ipsum dolor gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
        }
      />
      <TouchableHighlight onPress={()=>{setModalVisible(true)}}>
        <Text>press</Text>
      </TouchableHighlight>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <ChatModal onCancel = {toggleModal}/>
      </Modal>
    </ScrollView>
  );
};

export default AuctionScreen;
