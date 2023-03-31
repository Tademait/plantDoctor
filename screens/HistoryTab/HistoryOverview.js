import {Text, ScrollView, Image, StyleSheet} from 'react-native';
import PercentageOverview from '../../components/PercentageOverview';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';
import { capitalizeWords } from '../../helpers';

function HistoryOverview({route, navigation}) {
  const { historyObj } = route.params;

  function handlePercentageClick(item) {
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