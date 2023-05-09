import {
  View,
  Text,
  Image,
  Modal,
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
import sadBot from "../../../assets/sad-bot.png";
const AuctionScreen = () => {
  const [error, isLoading, sendRequest] = UseHttp();
  const auth = useSelector((state) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [auctionData, setAuctionData] = useState({});
  const [date, setDate] = useState({ minutes: "", seconds: "" });
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
        setAuctionData(response.latestAuction);
      }
      else{
        setAuctionData({})
      }
    };
    fetchData();
    const timer = setInterval(() => {
      fetchData();
    }, 5000);
  }, []);

  const calculateTimeLeft = () => {
    const difference = new Date(auctionData.endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      setDate({
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }
  };
  useEffect(() => {
    if (!isObjEmpty(auctionData)) {
      const intervalId = setInterval(() => {
        calculateTimeLeft();
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [auctionData]);
  return (
    <View style={{ flex: 1 }}>
      {!isObjEmpty(auctionData) ? (
        <ScrollView style={style.container}>
          <PosterInfo
            keyname="Remaining Time:"
            val={`${date.minutes} : ${date.seconds}`}
          />
          <Image
            style={style.image}
            source={{
              uri: auctionData.poster.image_url,
            }}
          />
          <PosterInfo
            keyname="Last Price:"
            val={auctionData.startingBid}
            price
          />
          <PosterInfo
            keyname="Product Name:"
            val={auctionData.poster.title}
          />
          <PosterInfo keyname="Product type:" val={auctionData.poster.product_type} />
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
          <Image source={sadBot} style={{ width: 100, height: 150 }} />
          <Text style={style.empty_text}>No auction set Yet</Text>
        </View>
      )}
    </View>
  );
};

export default AuctionScreen;
