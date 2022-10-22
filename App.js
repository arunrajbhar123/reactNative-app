import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ButtomNavbar } from "./components/BottomNavbar";

export default function App() {
  return <ButtomNavbar />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
