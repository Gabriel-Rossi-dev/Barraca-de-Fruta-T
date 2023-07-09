import {View, TextInput} from 'react-native'
import {Card} from 'react-native-paper'
import { styles } from './styled';
import {Ionicons} from '@expo/vector-icons'
import theme from '../../../global/theme/theme';


export default function FruitList() {
    return (
      <View>
        <View style ={styles.textSupply}>
      <Card contentStyle = {styles.viewText}>
        <Ionicons 
        style = {styles.iconSearch}
        name= {'search-outline'}
        size={24}
        />
        <TextInput
          style={styles.InputText}
          placeholder="Pesquisar Fruta"
          placeholderTextColor={theme.colors.lightGray}
        />
      </Card>
      </View>
      </View>
    );
  }