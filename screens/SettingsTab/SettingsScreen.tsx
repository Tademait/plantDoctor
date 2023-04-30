import React, { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import { APP_VERSION, VERSION_YEAR } from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR_PRIMARY} from '../../constants';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Separator from '../../components/Separator';
import FlipSwitch from '../../components/FlipSwitch';


/**
 * The main screen for Settings tab, contains app info, About / Credits section,
 * tutorial and for future use, there is prepared place for custom app settings
 * and setting details.
 */
// @ts-ignore
function SettingsScreen({navigation}) {

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Check if app has been launched before
    AsyncStorage.getItem('darkMode').then((value) => {
      if (value == null) {
        setDarkMode(false);
      } else {
        setDarkMode(Boolean(value));
      }
    });
  }, []);


  async function deleteAllUserData(){
      Alert.alert(
        'Delete All User Data',
        'Are you sure about this?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              AsyncStorage.clear()
              .then(() => console.log('AsyncStorage cleared successfully!'))
              .catch((err) => console.log('Error clearing AsyncStorage:', err));
            },
          },
        ],
        { cancelable: false }
      )
  }

  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 10, paddingTop: 10}}>
      <Button title={"Delete all user data"} onPress={deleteAllUserData} color={"#b3101e"} />
      </View>
      <Separator/>
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
    paddingBottom: 15,
    borderRadius: 5
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