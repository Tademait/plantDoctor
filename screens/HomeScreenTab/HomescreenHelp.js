import {View, Button} from 'react-native';
import GenericHelp from '../../components/GenericHelp';

function HomescreenHelp({navigation}) {

  return (
  <View>
    <GenericHelp />
    <View style={{padding: 10}}>
      <Button color="#73ac44" title="Let's get started!" onPress={() => navigation.navigate('Analyze')}/>
    </View>
  </View>
  )
}

export default HomescreenHelp;