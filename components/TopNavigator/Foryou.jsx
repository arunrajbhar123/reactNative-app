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
} from "react-native";
import HeroSlider from "./../ImageSliders/HeroSlider";
import Axios from "axios";
import React, { useEffect, useState } from "react";
const Foryou = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => <HeroSlider {...item} />;
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          // horizontal={true}
          // data={[
          //   {
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
          //   {
          //     adult: false,
          //     backdrop_path: "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
          //     genre_ids: [27, 53, 10749],
          //     id: 616820,
          //     original_language: "en",
          //     original_title: "Halloween Ends",
          //     overview:
          //       "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
          //     popularity: 4516.927,
          //     poster_path: "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg",
          //     release_date: "2022-10-12",
          //     title: "Halloween Ends",
          //     video: false,
          //     vote_average: 6.7,
          //     vote_count: 557,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
          //     genre_ids: [27, 53, 9648],
          //     id: 717728,
          //     original_language: "en",
          //     original_title: "Jeepers Creepers: Reborn",
          //     overview:
          //       "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
          //     popularity: 4768.063,
          //     poster_path: "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
          //     release_date: "2022-09-15",
          //     title: "Jeepers Creepers: Reborn",
          //     video: false,
          //     vote_average: 5.8,
          //     vote_count: 310,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
          //     genre_ids: [27, 53],
          //     id: 760161,
          //     original_language: "en",
          //     original_title: "Orphan: First Kill",
          //     overview:
          //       "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
          //     popularity: 3226.858,
          //     poster_path: "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
          //     release_date: "2022-07-27",
          //     title: "Orphan: First Kill",
          //     video: false,
          //     vote_average: 6.8,
          //     vote_count: 1079,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
          //     genre_ids: [878],
          //     id: 575322,
          //     original_language: "en",
          //     original_title: "Звёздный разум",
          //     overview:
          //       "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
          //     popularity: 2801.382,
          //     poster_path: "/aVLV38txajXhEy2qNEClPIsDbAH.jpg",
          //     release_date: "2022-01-06",
          //     title: "Project Gemini",
          //     video: false,
          //     vote_average: 5.5,
          //     vote_count: 122,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
          //     genre_ids: [53],
          //     id: 985939,
          //     original_language: "en",
          //     original_title: "Fall",
          //     overview:
          //       "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
          //     popularity: 2707.6,
          //     poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
          //     release_date: "2022-08-11",
          //     title: "Fall",
          //     video: false,
          //     vote_average: 7.3,
          //     vote_count: 1505,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/83oeqwN64WtafGoITvsOzjKIQaM.jpg",
          //     genre_ids: [28, 35, 53],
          //     id: 718930,
          //     original_language: "en",
          //     original_title: "Bullet Train",
          //     overview:
          //       "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
          //     popularity: 2654.547,
          //     poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
          //     release_date: "2022-07-03",
          //     title: "Bullet Train",
          //     video: false,
          //     vote_average: 7.5,
          //     vote_count: 1920,
          //   },
          //   {
          //     adult: false,
          //     backdrop_path: "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
          //     genre_ids: [14, 35, 10751],
          //     id: 642885,
          //     original_language: "en",
          //     original_title: "Hocus Pocus 2",
          //     overview:
          //       "It's been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it's up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
          //     popularity: 2572.294,
          //     poster_path: "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
          //     release_date: "2022-09-27",
          //     title: "Hocus Pocus 2",
          //     video: false,
          //     vote_average: 7.7,
          //     vote_count: 824,
          //   },
          // ]}
          // data={data}
          // keyExtractor={({ id }, index) => id}
          // renderItem={({ item }) => <HeroSlider {...item} />}
          // data={data}
          // renderItem={({ item }) => <HeroSlider {...item} />}
          // keyExtractor={(item) => item.key}
          // getItemCount={getItemCount}
          // getItem={getItem}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          
        />
      )}
    </View>
  );
};

export default Foryou;

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
});
