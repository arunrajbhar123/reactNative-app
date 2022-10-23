import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
const EXCTRA_IMG__LINK = "https://image.tmdb.org/t/p/w500";
const HeroSlider = ({ backdrop_path, title, overview }) => {
  const make = EXCTRA_IMG__LINK + backdrop_path;
  const image = { uri: make };

  // {
  //     adult: false,
  //     backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
  //     genre_ids: [28, 14, 12],
  //     id: 436270,
  //     original_language: "en",
  //     original_title: "Black Adam",
  //     overview:
  //       "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
  //     popularity: 5132.631,
  //     poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
  //     release_date: "2022-10-19",
  //     title: "Black Adam",
  //     video: false,
  //     vote_average: 7.3,
  //     vote_count: 285,
  //   },
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 18 }}
      >
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.overview} numberOfLines={1}>
          {overview}
        </Text>
      </ImageBackground>
    </View>
  );
};
export default HeroSlider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,

   
  },
  image: {
    padding: 10,
    height: 200,
    width: 360,
    margin: 2,

   
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
  
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
 
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    top: 98,
    left: 9,
  },
  overview: {
    top: 102,
    width: 300,
    left: 9,
    color: "#fff",
    fontSize: 14,
  },
});
