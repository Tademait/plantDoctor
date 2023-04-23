import React from 'react';
import SettingsScreen from './SettingsScreen';
import SettingsDetail from './SettingsDetail';
import SettingsCredits from './SettingsCredits';
import SettingsHelp from './SettingsHelp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';

const Stack = createNativeStackNavigator();


/**
 * This component registers all the screens that are part of the Settings tab
 * and includes them in the nested StackNavigator.
 */
function SettingsStack() {
  // pass the name of the disease into screen header title
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${COLOR_PRIMARY}`,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
        name='SettingsMain'
        component={SettingsScreen}
        options={{headerTitle: 'Settings'}}/>
        <Stack.Screen
        name='SettingsDetail'
        component={SettingsDetail}
        options={{headerTitle: 'Details'}} /> 
        <Stack.Screen
        name='SettingsCredits'
        component={SettingsCredits}
        options={{headerTitle: 'Credits'}} />
        <Stack.Screen
        name='SettingsHelp'
        component={SettingsHelp}
        options={{headerTitle: 'Help'}} /> 
      </Stack.Navigator>
  )
}

export default SettingsStack;
