import { View,Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../global/theme/theme";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CardElevationProps extends TextInputProps {
  nameIcon: any;
  placeholderText: string;
  onChange: any;
  onPress: any;
}

export default function CardElevationListSupply({
  onChange,
}: CardElevationProps) {
  const [teste, setTeste] = useState<string>("");
  const navigation: any = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.cardView}
      onPress={() => navigation.navigate("SupplyerInfo")}
      >
        <Text style = {styles.textName}>Lorem ipsum</Text>
        <View style = {styles.rowCard}>
          <Ionicons style={styles.iconPerson} name={'person-outline'} size={24} />
          <Text style = {styles.InputText}>000.000.000-00</Text>
        </View>
        <View style = {styles.rowCard}>
          <Ionicons style={styles.iconCall} name={'call-outline'} size={24} />
          <Text style = {styles.InputText}>(00)00000-0000</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
