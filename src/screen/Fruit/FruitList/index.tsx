import { View, TextInput } from "react-native";
// import {Card} from 'react-native-paper'
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../global/theme/theme";
import CardElevation from "../../../constants/cardElevation/CardElevation";

export default function FruitList() {
  return (
    <View>
      <CardElevation nameIcon={'search-outline'} placeholderText="Pesquisar Fruta" />
    </View>
  );
}
