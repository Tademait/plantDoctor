import {View, Button, ScrollView} from 'react-native';
import GenericHelp from '../../components/GenericHelp';

function HomescreenHelp({navigation}) {

  return (
  <ScrollView>
    <GenericHelp />
    <View style={{padding: 10}}>
      <Button color="#73ac44" title="Let's get started!" onPress={() => navigation.navigate('Analyze')}/>
    </View>
  </ScrollView>
  )
}

export default HomescreenHelp;