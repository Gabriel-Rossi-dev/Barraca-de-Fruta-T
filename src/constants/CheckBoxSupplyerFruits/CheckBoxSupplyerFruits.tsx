import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import theme from "../../global/theme/theme";
import { styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function CheckBoxSupplyerFruits({options = [], onChange})  {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.viewRow}>
        <TouchableOpacity
          style={styles.allFruitsRetangle}
        ></TouchableOpacity>
        <Text style={styles.textFruitsList}>Todas</Text>
      </View>
    </View>
  );
}

//onPress={() => navigation.navigate("SupplyerCPF")}
