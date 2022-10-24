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
const NormalImage = (props) => {
  const make = EXCTRA_IMG__LINK + props.backdrop_path;
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
        >
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.overview} numberOfLines={1}>
            {props.overview}
          </Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default NormalImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    height: 90,
    width: 160,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    top: 100,
    left: 9,
  },
  overview: {
    top: 105,
    width: 300,
    left: 9,
    color: "#fff",
    fontSize: 15,
  },
});
