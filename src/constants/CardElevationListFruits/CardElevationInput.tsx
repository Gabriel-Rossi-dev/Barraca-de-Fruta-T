import { View, Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../global/theme/theme";
import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CardElevationProps extends TextInputProps {
  onPress: any;
  nameFruit: string;
  priceWeight: string;
  amount: string;
  nameSupply: string;
}

export default function CardElevationListFruits({
  onPress,
  nameFruit,
  priceWeight,
  amount,
  nameSupply,
}: CardElevationProps) {
  return (
    <View>
      <TouchableOpacity style={styles.cardView} onPress={onPress}>
        <Text style={styles.textName}>${nameFruit}</Text>
        <View style={styles.rowCard}>
          <Ionicons style={styles.iconPerson} name={"cash-outline"} size={24} />
          <Text style={styles.InputText}>${priceWeight}</Text>
          <Text style={styles.InputText}>${amount}</Text>
        </View>
        <View style={styles.rowCard}>
          <Ionicons style={styles.iconCall} name={"people-outline"} size={24} />
          <Text style={styles.InputText}>${nameSupply}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
