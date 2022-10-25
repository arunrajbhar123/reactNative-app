import {
  View,
  Text,
  SafeAreaView,
  VirtualizedList,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import HeroSlider from "./../ImageSliders/HeroSlider";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import NormalImage from "./../NormalImage/NormalImage";
import Icon from "react-native-vector-icons/AntDesign";
import SpecialImage from "./../SpecialImage/SpecialImage";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
const Foryou = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [top, setTop] = useState([]);

  const dataFetch = [
    { setItems: "setData", type: "movie/popular" },
    { setItems: "setTvShow", type: "tv/popular" },
    { setItems: "setUpComing", type: "movie/upcoming" },
    { setItems: "setTop", type: "movie/top_rated" },
  ];
  const api_key = "763aad1b51ae4ed320afd3680c31c2fe";
  const fda = [
    {
      adult: false,
      backdrop_path: "/qxeqKcVBWnQxUp1w6fwWcxZEA6m.jpg",
      genre_ids: [28, 12, 14],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 6041.545,
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 7.2,
      vote_count: 425,
    },
    {
      adult: false,
      backdrop_path: "/qxeqKcVBWnQxUp1w6fwWcxZEA6m.jpg",
      genre_ids: [28, 12, 14],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 6041.545,
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 7.2,
      vote_count: 425,
    },
    {
      adult: false,
      backdrop_path: "/qxeqKcVBWnQxUp1w6fwWcxZEA6m.jpg",
      genre_ids: [28, 12, 14],
      id: 436270,
      original_language: "en",
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      popularity: 6041.545,
      poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      video: false,
      vote_average: 7.2,
      vote_count: 425,
    },
  ];
  useEffect(() => {
    dataFetch.map((el) => {
      fetch(
        `https://api.themoviedb.org/3/${el.type}?api_key=${api_key}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((json) => {
          el.setItems(json.results);
        })
        .catch((error) => console.error(error));
    });
    setLoading(false);
  }, []);

  const allTypeFormate = [
    {
      data: "data",
      component: "HeroSlider",
      route: "Preview",
      special: true,
      color1: "",
      color2: "",
      title: "Top picks for you",
      icon: "right",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#111" }}>
      {isLoading ? (
        <ActivityIndicator style={{ height: 152 }} />
      ) : (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={fda}
            renderItem={({ item }) => <HeroSlider {...item} />}
            keyExtractor={(item, index) => index}
          />

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={allTypeFormate}
            renderItem={({ item }) => <DataSplit {...item} />}
            keyExtractor={(item, index) => index}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Foryou;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

const DataSplit = ({ special }) => {
  return (
    <View>
      {special ? (
        <LinearGradient colors={["red", "transparent"]}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Preview", { data: "props" })}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                }}
              >
                <View>
                  <Text style={{ fontSize: 25, color: "#fff" }}>
                    Lights, Diwali, Action!
                  </Text>
                  <Text style={{ fontSize: 17, color: "grey", width: 340 }}>
                    This festive season light up your screens with these
                    blockbusters
                  </Text>
                </View>
                <View>
                  <Icon name="right" color={"#fff"} size={20} />
                </View>
              </View>
            </TouchableWithoutFeedback>
            {/* <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              renderItem={({ item }) => (
                <SpecialImage {...item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            /> */}
          </View>
        </LinearGradient>
      ) : (
        <Text>gg</Text>
      )}
    </View>
  );
};
