import { View, Text, SafeAreaView, VirtualizedList } from "react-native";
import HeroSlider from "./../ImageSliders/HeroSlider";
import Axios from "axios";
import { useEffect, useState } from "react";
const Foryou = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=763aad1b51ae4ed320afd3680c31c2fe&language=en-US&page=1"
    )
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <SafeAreaView>
      {/* // data={data}
        // // initialNumToRender={4}
        // renderItem={({ item }) => <HeroSlider {...item} />}
        // keyExtractor={(item) => item.key} */}

      {data?.length && data.map((el,index) => <HeroSlider keyExtractor={index} />)}
    </SafeAreaView>
  );


};
export default Foryou;
