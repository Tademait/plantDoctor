import React from 'react';
import HomescreenScreen from './HomescreenScreen';
import HomescreenHelp from './HomescreenHelp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';

const Stack = createNativeStackNavigator();


function HomescreenStack() {
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
        name='HomescreenMain'
        component={HomescreenScreen}
        options={{title: 'Home'}}/>
        <Stack.Screen
        name='HomescreenHelp'
        component={HomescreenHelp}
        options={{headerTitle: 'Help'}} /> 
      </Stack.Navigator>
  )
}

export default HomescreenStack;
