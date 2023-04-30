import {
  View,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style";
import PosterInfo from "../../components/PosterInfo";
import ChatModal from "../../components/chatModal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UseHttp from "../../hooks/http-hook";
import { useSelector } from "react-redux";

const AuctionScreen = () => {
  const [error, isLoading, sendRequest] = UseHttp();
  const auth = useSelector((state) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [auctionData, setAuctionData] = useState({});
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await sendRequest(
        "auction/get_latest_auction",
        "GET",
        "",
        {
          authorization: "Bearer " + auth.token,
        }
      );
      if (response.status == "sucess") {
        // console.log(response.latestAuction.poster.image_url);
        setAuctionData(response.latestAuction);
      }
    };
    fetchData();
  }, []);

  console.log(auctionData);
  console.log(auth.userData);
  return (
    <View style={{ flex: 1 }}>
      {!isObjEmpty(auctionData) ? (
        <ScrollView style={style.container}>
          <PosterInfo keyname="Remaining Time:" val="02:25" />
          <Image
            style={style.image}
            source={{
              uri:auctionData.poster.image_url,
            }}
          />
          <PosterInfo
            keyname="Last Price:"
            val={auctionData.startingBid}
            price
          />
          <PosterInfo
            keyname="Product Name:"
            val={auctionData.poster.product_type}
          />
          <PosterInfo keyname="Product type:" val={auctionData.poster.title} />
          <PosterInfo
            keyname="Farmer Name:"
            val={auctionData.user.first_name + " " + auctionData.user.last_name}
          />
          <PosterInfo
            keyname="Description:"
            desc
            val={auctionData.poster.description}
          />

          <TouchableOpacity onPress={toggleModal} style={style.join}>
            <MaterialIcons name="chat" size={30} color="#fff" />
            <Text style={style.join_text}>Join</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <ChatModal onCancel={toggleModal} />
          </Modal>
        </ScrollView>
      ) : (
        <View style={style.empty}>
          <Text style={style.empty_text}>No auction set Yet</Text>
        </View>
      )}
    </View>
  );
};

export default AuctionScreen;
