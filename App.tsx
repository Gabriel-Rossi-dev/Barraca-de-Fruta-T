import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/Supplyer/SupplyerHome";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme/theme";
import { Routes } from "./src/routes/bottom.tab";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
