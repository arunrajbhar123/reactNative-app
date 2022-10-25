import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Shop from "./ButtomNavbarComponents/Shop";
import Library from "./ButtomNavbarComponents/Library";
import Watchlist from "./ButtomNavbarComponents/Watchlist";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopNabar } from "./TopNavbar";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import {
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from "react-native";
import Preview from "./../pages/Preview";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function ButtomNavbar({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#323131" />

      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 25,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "#323131",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Search")}
          >
            <Icon name="search" color={"#fff"} size={19} />
          </TouchableWithoutFeedback>
          <Text style={{ color: "#fff", fontSize: 19 }}>Google TV</Text>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialCommunityIcons
              name="account"
              color={"#fff"}
              size={26}
              style={{ backgroundColor: "red", borderRadius: 12, padding: 1.8 }}
            />
          </TouchableWithoutFeedback>
        </View>
      </>

      {/* Stack.Group */}
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: "#323131" }}
      >
        <Tab.Screen
          name="Home"
          component={TopNabar}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: ({ color }) => (
              <Entypo name="shop" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="video-library" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            tabBarLabel: "Watchlist",
            tabBarIcon: ({ color }) => (
              <Feather name="bookmark" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
