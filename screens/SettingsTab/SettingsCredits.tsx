import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';
import Separator from '../../components/Separator';

function handleContactPress() {
  Linking.openURL('mailto:tadeas.kozub@gmail.com');
}
function handlePlantvillagePress() {
  Linking.openURL('https://plantvillage.psu.edu/plants');
}
function handleColorPress() {
  Linking.openURL('https://www.canva.com/colors/color-palettes/green-blaze/');
}


/**
 * This component is the About / Credits section of the app containing  author info, contacts,
 *  sources and credits
 */
function SettingsCredits() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTitle}>Credits</Text>
      <Text>Author: Tadeas Kozub | 2022/2023 </Text>
      <TouchableOpacity onPress={handleContactPress}>
      <Text style={styles.linkText}>Contact me!</Text>
      </TouchableOpacity>
      <Separator />
      <Text>Plant images and disease information are sourced from
        <TouchableOpacity onPress={handlePlantvillagePress}>
          <Text style={styles.linkText}> https://plantvillage.psu.edu/plants </Text>
        </TouchableOpacity>
      </Text>
      <Separator />
      <Text>Color scheme of the app inspired by:
      </Text>
        <TouchableOpacity onPress={handleColorPress}>
          <Text style={styles.linkText}> https://www.canva.com/colors/color-palettes/green-blaze </Text>
        </TouchableOpacity>
      <Separator />
      <Text>Icons used are FeatherIcons, Ionicons and CoreUI Icons by IconDuck. </Text>
      <Text style={styles.bottomText}>Created with ❤ and React Native </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  firstTitle: {
    fontWeight: 'bold',
    paddingBottom: 15
  },
  linkText: {
    color: "#2F5233"
  },
  bottomText: {
    position: 'absolute',
    bottom: 0,
    padding: 20
  }
});

export default SettingsCredits;