import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../routes/bottom.tab";
import SupplyerName from "../SupplyerName";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import theme from "../../../global/theme/theme";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function SupplyerHome() {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style ={styles.textSupply}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'search-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Pesquisar Fornecedor"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
    </View>
  );
}
