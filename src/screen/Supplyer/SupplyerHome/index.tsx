import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../routes/bottom.tab";
import SupplyerName from '../SupplyerName'

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

export default function SupplyerHome() {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.viewText}>
        <Text style={styles.textHome}>Cadastre seu primeiro fornecedor</Text>
      </View>
      <TouchableOpacity
        style={styles.addSupplier}
        onPress={() => navigation.navigate('SupplyerName')}
        
      >
        <Text style={styles.textAdd}>+</Text>
        <Text style={styles.textSupply}>Cadastrar Fornecedor</Text>
      </TouchableOpacity>
    </View>
  );
}
