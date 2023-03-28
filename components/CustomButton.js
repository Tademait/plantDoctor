import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../constants';

function CustomButton({buttonText, iconName, handlePress, secondary}) {
  const styles = StyleSheet.create({
    buttonCustom: {
      backgroundColor: (secondary ? 'transparent' : COLOR_PRIMARY),
      borderWidth: (secondary ? 2 : 0),
      borderColor: COLOR_PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      margin: 5
    },
    buttonText: {
      color: (secondary ? COLOR_PRIMARY : '#fff'),
      fontSize: 16,
      fontWeight: '500'
    },
  });

  return (
    <TouchableOpacity style={styles.buttonCustom} onPress={handlePress}>
      <Ionicons name={iconName} size={24} color={secondary ? COLOR_PRIMARY : "#fff"} style={styles.iconLeft}/>
      <Text style={styles.buttonText}> {buttonText} </Text>
    </TouchableOpacity>
  )
}


export default CustomButton;