import React from 'react';
import {Text, View} from 'react-native';
import PercentageOverview from '../../components/PercentageOverview';
import CustomButton from '../../components/CustomButton';
import {COLOR_SECONDARY} from '../../constants';
import { capitalizeWords } from '../../helpers';

interface Props {
  onStartOver: () => void;
  apiResponse: Array<{name: string, percentage: number}> | undefined;
  navigation: any;
  plant: string;
}

/**
 * Part of the state when user sends both pictures for analysis and is
 * being presented with the results.
 * @param onStartOver
 * @param apiResponse
 * @param navigation
 * @param plant
 */
function ResultDisplay({onStartOver, apiResponse, navigation, plant}: Props) {
  function handlePercentageClick(item: {name: string, percentage: number}) {
    navigation.navigate('AnalyzeDetail', {
            title:capitalizeWords(item.name),
            disease:item.name,
            plant:plant})
  }
  return (
  <View>
      {apiResponse 
      ? (<View>
        <Text style={{marginTop: 10, fontSize: 16, padding: 10, color: COLOR_SECONDARY, fontWeight: '500'}}>Most likely {plant} diseases: </Text>
        <PercentageOverview data={apiResponse} handlePercentageClick={handlePercentageClick}/></View>)
      : <Text style={{textAlign: 'center', marginTop: 30, fontSize: 14, padding: 10, color: COLOR_SECONDARY}}>Something went wrong</Text>}
    <View style={{marginTop: 50}}>
      <CustomButton buttonText="Take a new picture" iconName="refresh-outline" handlePress={onStartOver} secondary={true} />
    </View>
  </View>
  )
}

export default ResultDisplay;