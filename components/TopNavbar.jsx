import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Films from "./TopNavigator/Films";
import Foryou from "./TopNavigator/Foryou";
import Tvshow from "./TopNavigator/Tvshow";
const SecondTab = createMaterialTopTabNavigator();
export const TopNabar = () => {
  return (
    <SecondTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#111", color: "#fff" },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <SecondTab.Screen name="For you" component={Foryou} />
      <SecondTab.Screen name="Films" component={Films} />
      <SecondTab.Screen name="Tv Shows" component={Tvshow} />
    </SecondTab.Navigator>
  );
};
