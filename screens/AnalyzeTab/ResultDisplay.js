import {Text, Button, View, FlatList, SafeAreaView} from 'react-native';
import PercentageOverview from '../../components/PercentageOverview';
import CustomButton from '../../components/CustomButton';
import {COLOR_SECONDARY} from '../../constants';

function ResultDisplay({onStartOver, apiResponse, navigation, plant}) {
  function handlePercentageClick(item) {
    navigation.navigate('AnalyzeDetail', {
            title:item.name,
            disease:item.name,
            plant:plant})
  }
  return (
  <View>
      {apiResponse 
      ? (<View>
        <Text style={{marginTop: 10, fontSize: 16, padding: 10, color: COLOR_SECONDARY, fontWeight: '500'}}>Top 5 likely {plant} diseases: </Text>
        <PercentageOverview data={apiResponse} handlePercentageClick={handlePercentageClick}/></View>)
      : <Text style={{textAlign: 'center', marginTop: 30, fontSize: 14, padding: 10, color: COLOR_SECONDARY}}>Something went wrong</Text>}
    <View style={{marginTop: 50}}>
      <CustomButton buttonText="Take a new picture" iconName="refresh-outline" handlePress={onStartOver} secondary={true} />
    </View>
  </View>
  )
}

export default ResultDisplay;