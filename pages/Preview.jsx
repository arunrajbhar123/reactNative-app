import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState, useCallback } from "react";
const EXCTRA_IMG__LINK = "https://image.tmdb.org/t/p/w500";
const Preview = ({
  route: {
    params: {
      data: { title, backdrop_path, overview },
    },
  },
}) => {
  const make = EXCTRA_IMG__LINK + backdrop_path;
  const image = { uri: make };

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#111" }}>
      <ImageBackground
        style={{ width: "100%", height: 250 }}
        resizeMode="cover"
        source={image}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
      </ImageBackground>
      <SafeAreaView>
        <View style={styles.about}>
          <Text style={styles.title}>{title}</Text>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 2}
            style={styles.overview}
          >
            {overview}
          </Text>

          {lengthMore ? (
            <Text onPress={toggleNumberOfLines} style={styles.more}>
              {textShown ? "Read less..." : "Read more..."}
            </Text>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Preview;

const styles = StyleSheet.create({
  about: {
    color: "#fff",
    top: -55,
    marginLeft: 12,
  },
  title: {
    color: "#fff",
    fontSize: 45,
    marginLeft: 12,
  },
  overview: {
    lineHeight: 21,
    color: "#fff",
    marginLeft: 12,
    marginRight: 12,
  },
  more: { 
    lineHeight: 21,
    color: "blue",
    marginLeft: 12,
  },
});
