import { View, Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../global/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SupplyerName() {
  const navigation: any = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SupplyerHome")}>
      <Ionicons
        style={styles.exit}
        name={"ios-close"}
        size={36}
        color={theme.colors.lightGray}
      />
      </TouchableOpacity>
      <View style={styles.ViewHeaderText}>
        <Text style={styles.titleText}>Nome</Text>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <Text style={styles.titleTextSecond}>CPF</Text>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <Text style={styles.titleTextSecond}>Telefone</Text>
        <Ionicons
          style={styles.chevronForward}
          name={"ios-chevron-forward"}
          size={36}
          color={theme.colors.lightGray}
        />
        <Text style={styles.titleTextPrimary}>Frutas</Text>
        
      </View>
      <Text style={styles.titleSupplyer}>
        Escolha as frutas que esse fornecedor nos fornece
      </Text>
      
    </View>
  );
}
