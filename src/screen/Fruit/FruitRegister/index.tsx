import {Card} from 'react-native-paper'
import { styles } from './styled';
import {Ionicons} from '@expo/vector-icons'
import theme from '../../../global/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";



export default function FruitRegister() {
  const navigation:any = useNavigation
    return (
      <View>
        <View style ={styles.firstCard}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'nutrition-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Nome da fruta"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
      <View style ={styles.secondCard}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'cash-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Preço do Kilo"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
      <View style ={styles.secondCard}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'server-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Quantidade no estoque"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
      <View style ={styles.secondCard}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'people-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Fornecedor"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
      <TouchableOpacity style={styles.addSupplier}
      onPress={() => navigation.navigate('FruitRegister')}>
        <Text style = {styles.textSupply}>Cadastrar Fruta</Text>
      </TouchableOpacity>
      </View>
    );
  }