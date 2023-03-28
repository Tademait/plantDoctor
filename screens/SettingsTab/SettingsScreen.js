import {Text, View, Button, TouchableOpacity, ActivityIndicator, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState, useEffect} from 'react';
import { APP_VERSION, VERSION_YEAR } from '../../constants';
import {Feather} from 'react-native-vector-icons';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';

function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('SettingsHelp')}>
        <Feather name="help-circle" size={30} color={'white'} style={styles.iconLeft} />
        <Text style={styles.buttonText}> Get Help - Tutorial </Text>
        <Feather name="chevron-right" size={30} color={'white'} style={styles.iconRight} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('SettingsCredits')}>
        <Feather name="info" size={30} color={'white'} style={styles.iconLeft} />
        <Text style={styles.buttonText}> About - Credits </Text>
        <Feather name="chevron-right" size={30} color={'white'} style={styles.iconRight} />
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <Image source={require('./PlantDoctor_logo.png')} style={{width: 300, height: 100, resizeMode: 'center'}} />
        <Text>App version: {APP_VERSION} </Text>
        <Text>Copyright © {VERSION_YEAR} Tadeas Kozub </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginLeft: 14
  },
  customButton: {
    marginTop: 10,
    backgroundColor: COLOR_PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    flex: 1,
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  iconLeft: {
    marginLeft: 10
  },
  iconRight: {
    marginRight: 10
  }

});

export default SettingsScreen;