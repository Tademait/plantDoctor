import React from 'react';
import HistoryScreen from './HistoryScreen';
import HistoryOverview from './HistoryOverview';
import HistoryDetail from './HistoryDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';

const Stack = createNativeStackNavigator();

/**
* This component registers all the screens that are part of the History tab
 * and includes them in the nested StackNavigator.
 */
function HistoryStack() {
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
        name='HistoryMain'
        component={HistoryScreen}
        options={{headerTitle: 'History'}}/>
        <Stack.Screen
        name='HistoryOverview'
        component={HistoryOverview}
        options={{headerTitle: 'History Overview'}}/>
        <Stack.Screen
        name='HistoryDetail'
        component={HistoryDetail}
        // @ts-ignore
        options={({ route }) => ({ title: route.params!.title })}/> 
      </Stack.Navigator>
  )
}

export default HistoryStack;
