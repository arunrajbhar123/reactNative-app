import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
const EXCTRA_IMG__LINK = "https://image.tmdb.org/t/p/w500";
const SpecialImage = (props) => {
  const make = EXCTRA_IMG__LINK + props.poster_path;
  const image = { uri: make };
 
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate("Preview", { data: props })}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{
            borderRadius: 20,
          }}
        ></ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default SpecialImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    height: 80,
    width: 160,
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
  overview: {
    top: 105,
    width: 300,
    left: 9,
    color: "#fff",
    fontSize: 15,
  },
});
