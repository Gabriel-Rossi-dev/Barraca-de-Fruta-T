import { View } from "react-native";
import { styles } from "./styled";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../global/theme/theme";
import React, {useState} from 'react'
import { TextInputProps } from "react-native";

interface CardElevationProps extends TextInputProps {
  nameIcon: any;
  placeholderText: string;
  onChange: any;
}

export default function CardElevationInput({nameIcon,placeholderText, onChange, ...props}: CardElevationProps) {
  const [teste, setTeste] = useState<string>("");
  return (
    <View>
      <View style={styles.cardView}>
        <Ionicons style={styles.iconSearch} name={nameIcon} size={24} />
        <TextInput
          style={styles.InputText}
          placeholder={placeholderText}
          placeholderTextColor={theme.colors.lightGray}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
