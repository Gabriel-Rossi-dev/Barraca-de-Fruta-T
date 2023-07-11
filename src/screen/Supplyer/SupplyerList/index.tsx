import { View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CardElevation from "../../../constants/cardElevation/CardElevation";
import { styles } from "./styled";


export default function SupplyerList() {
  const [teste, setTeste] = useState("");
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.marginTop}>
        <CardElevation
          nameIcon={"search-outline"}
          placeholderText="Fornecedor"
          onChange={(text: any) => {setTeste(text),
            console.log(teste)
          }}
        />
      </View>
    </View>
  );
}
