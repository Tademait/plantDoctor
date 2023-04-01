import React from 'react';
import AnalyzeScreen from './AnalyzeScreen';
import AnalyzeDetail from './AnalyzeDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';

const Stack = createNativeStackNavigator();

function AnalyzeStack() {
  // using options props to pass the name of the disease into screen header title
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
        name='AnalyzeMain'
        component={AnalyzeScreen}
        options={{headerTitle: 'Analyze'}}/>
        <Stack.Screen
        name='AnalyzeDetail'
        component={AnalyzeDetail}
        // @ts-ignore
        options={({ route }) => ({ title: route.params.title })}/> 
      </Stack.Navigator>
  )
}

export default AnalyzeStack;
