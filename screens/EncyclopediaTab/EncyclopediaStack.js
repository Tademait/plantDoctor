import EncyclopediaScreen from './EncyclopediaScreen';
import EncyclopediaDetail from './EncyclopediaDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLOR_PRIMARY} from '../../constants';

const Stack = createNativeStackNavigator();

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
        options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
  )
}

export default EncyclopediaStack;
