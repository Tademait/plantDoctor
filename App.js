import HomeScreenStack from './screens/HomeScreenTab/HomescreenStack';
import HistoryStack from './screens/HistoryTab/HistoryStack';
import AnalyzeStack from './screens/AnalyzeTab/AnalyzeStack';
import EncyclopediaStack from './screens/EncyclopediaTab/EncyclopediaStack';
import SettingsStack from './screens/SettingsTab/SettingsStack';

import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLOR_PRIMARY} from './constants';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline'
          } 
          else if (route.name === 'History') {
            iconName = 'images-outline'
          }
          else if (route.name === 'Analyze') {
            iconName = 'aperture-outline'
          }
          else if (route.name === 'Encyclopedia') {
            iconName = 'book-outline'
          }
          else if (route.name === 'Settings') {
            iconName = 'options-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLOR_PRIMARY,
        tabBarInactiveTintColor: 'gray',
        
    })}>

      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen name="Analyze" component={AnalyzeStack} />
      <Tab.Screen name="Encyclopedia" component={EncyclopediaStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;