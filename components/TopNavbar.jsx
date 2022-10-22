import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Films from "./TopNavigator/Films";
import Foryou from "./TopNavigator/Foryou";
import Tvshow from "./TopNavigator/Tvshow";
const SecondTab = createMaterialTopTabNavigator();
export const TopNabar = () => {
  return (
    <SecondTab.Navigator>
      <SecondTab.Screen name="Films" component={Films} />
      <SecondTab.Screen name="For you" component={Foryou} />
      <SecondTab.Screen name="Tv Show" component={Tvshow} />
    </SecondTab.Navigator>
  );
};
