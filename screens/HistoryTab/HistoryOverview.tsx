import React from 'react';
import {Text, ScrollView, Image, StyleSheet} from 'react-native';
import PercentageOverview from '../../components/PercentageOverview';
import {COLOR_SECONDARY} from '../../constants';
import { capitalizeWords, formatDateLong } from '../../helpers';

/**
* This component shows the details of a specific historical analysis
* presenting the picture loaded up from local storage, data from
* AsyncStorage including the PercentageOverview component that shows
* the actual results.
 */
// @ts-ignore
function HistoryOverview({route, navigation}) {
  const { historyObj } = route.params;

  function handlePercentageClick(item: {name:string, percentage:number}) {
    navigation.navigate('HistoryDetail', {
            title:capitalizeWords(item.name),
            disease:item.name,
            plant:historyObj.selectedPlant})
  }
  return (
    <ScrollView>
      {(historyObj && historyObj.imageUri) 
      ? <Image source={{uri:historyObj.imageUri}} style={styles.image} />
      : <Text style={styles.emptyText}>No image data available </Text>}
      {historyObj && <Text style={styles.titleText}>{formatDateLong(historyObj.date)}</Text>}
      <Text style={styles.titleText}>Analysis history: </Text>
      {historyObj && historyObj.analysedDiseases
      ? <PercentageOverview data={historyObj.analysedDiseases} handlePercentageClick={handlePercentageClick}/>
      : <Text style={styles.emptyText}>No data available</Text>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  titleText: {
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    color: COLOR_SECONDARY,
  },
  emptyText: {
    color: COLOR_SECONDARY,
    padding: 20,
    textAlign: 'center'
  }
});

export default HistoryOverview;