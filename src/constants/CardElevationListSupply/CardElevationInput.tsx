import { View,Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../global/theme/theme";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CardElevationProps extends TextInputProps {
  onPress: any;
  name: string;
  cpf: string;
  phone: string;
}

export default function CardElevationListSupply({
  onPress,name, cpf, phone
}: CardElevationProps) {
  const [teste, setTeste] = useState<string>("");
  const navigation: any = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.cardView}
      onPress={onPress}
      >
        <Text style = {styles.textName}>${name}</Text>
        <View style = {styles.rowCard}>
          <Ionicons style={styles.iconPerson} name={'person-outline'} size={24} />
          <Text style = {styles.InputText}>${cpf}</Text>
        </View>
        <View style = {styles.rowCard}>
          <Ionicons style={styles.iconCall} name={'call-outline'} size={24} />
          <Text style = {styles.InputText}>${phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
