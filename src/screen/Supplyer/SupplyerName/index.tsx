import { View, Text } from "react-native";
import { styles } from "./styled";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../global/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SupplyerName() {
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
      <Text style={styles.titleText}>Nome</Text>
      <Text style={styles.titleSupplyer}>Digite o nome do colaborador</Text>
      <TextInput
        style={styles.InputText}
        placeholder="Nome"
        placeholderTextColor={theme.colors.lightGray}
      />
      <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => navigation.navigate('SupplyerCPF')}
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
