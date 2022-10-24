import { View, Text, useColorScheme, TextInput } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ButtomNavbar } from "./../components/BottomNavbar";
import Preview from "./Preview";
import Profile from "./Profile";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import SearchPage from "./SearchPage";
const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};
const MainNavigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ButtomNavbar" component={ButtomNavbar} />
          <Stack.Screen name="Preview" component={Preview} />
          <Stack.Screen
            name="Search"
            barStyle="light-content"
            component={SearchPage}
          />
        </Stack.Group>
        {/* 
        <Stack.Group>
          
        </Stack.Group> */}

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
