import React from 'react';
import EncyclopediaScreen from './EncyclopediaScreen';
import EncyclopediaDetail from './EncyclopediaDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';
import { capitalizeWords } from '../../helpers';

const Stack = createNativeStackNavigator();

/**
* This component registers all the screens that are part of the Encyclopedia tab
 * and includes them in its nested StackNavigator.
 */
function EncyclopediaStack() {
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
        name='EncyclopediaMain'
        component={EncyclopediaScreen}
        options={{ title: 'Encyclopedia' }}/>
        <Stack.Screen
        name='EncyclopediaDetail'
        component={EncyclopediaDetail}
        // @ts-ignore
        options={({ route }) => ({ title: capitalizeWords(route.params.title) })}/>
      </Stack.Navigator>
  )
}

export default EncyclopediaStack;
