import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Shop from "./ButtomNavbarComponents/Shop";
import Library from "./ButtomNavbarComponents/Library";
import Watchlist from "./ButtomNavbarComponents/Watchlist";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopNabar } from "./TopNavbar";
import { Text, View, StatusBar } from "react-native";
const Tab = createMaterialBottomTabNavigator();

export function ButtomNavbar() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 25,
          backgroundColor: "#111",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff" }}>arun</Text>
        <Text style={{ color: "#fff" }}>arun</Text>
        <Text style={{ color: "#fff" }}>arun</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: "black" }}
      >
        <Tab.Screen
          name="Home"
          component={TopNabar}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="library" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            tabBarLabel: "Watchlist",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
