import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import theme from "../../global/theme/theme";
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  name: string;
  onPress: () => void;
  style?: object
  isSelected: boolean
}

export function CheckBoxSupplyerFruits({name, onPress, style, isSelected, ...rest  }: Props) {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.viewRow}>
        <TouchableOpacity
        onPress={onPress} 
        {...rest}
        style={isSelected ? styles.allFruitsRetangleSelected : styles.allFruitsRetangle}></TouchableOpacity>
        <Text style={styles.textFruitsList}>{name}</Text>
      </View>
    </View>
  );
}

//onPress={() => navigation.navigate("SupplyerCPF")}
