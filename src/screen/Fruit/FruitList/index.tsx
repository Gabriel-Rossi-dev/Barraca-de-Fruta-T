import { View, TextInput, Text } from "react-native";
// import {Card} from 'react-native-paper'
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../global/theme/theme";
import CardElevationInput from "../../../constants/CardElevationInput/CardElevationInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styled } from "styled-components";

export default function FruitList() {
  const navigation: any= useNavigation();
  return (
    <View>
      <CardElevationInput nameIcon={'search-outline'} placeholderText="Pesquisar Fruta" />
      <TouchableOpacity onPress={() => navigation.navigate('FruitEdit')}>
        <Text style= {styles.InputText}>OLÁ</Text>
      </TouchableOpacity>
    </View>
  );
}
