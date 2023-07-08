import { View, Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../global/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SupplyerCPF() {
  const navigation: any = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SupplyerHome")}>
      <Ionicons
        style={styles.exit}
        name={"ios-close"}
        size={36}
        color={theme.colors.lightGray}
      />
      </TouchableOpacity>
      <View style={styles.ViewHeaderText}> 
      <Text style={styles.titleText}>Nome</Text>
      <Ionicons style={styles.chevronForward}
                  name={"ios-chevron-forward"}
                  size={36}
                  color={theme.colors.lightGray}
                />
      <Text style={styles.titleTextSecond}>CPF</Text>
      </View>
      <Text style={styles.titleSupplyer}>Digite o CPF do colaborador</Text>
      <TextInput
        style={styles.InputText}
        placeholder="000.000.000-00"
        placeholderTextColor={theme.colors.lightGray}
        keyboardType="numeric"
      />
      <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => navigation.navigate('SupplyerPhone')}
        >
          <Text style={styles.buttonText}>
            Próximo 
          </Text>
          <Ionicons style={styles.chevronForwardPrimary}
                  name={"ios-chevron-forward"}
                  size={36}
                  color={theme.colors.lightGray}
                />
          
        </TouchableOpacity>
    </View>
  );
}
