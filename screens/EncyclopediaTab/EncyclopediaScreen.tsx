import React from 'react';
import {View, ActivityIndicator, StyleSheet, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import PlantDiseaseList from './PlantDiseaseList';
import useDiseaseList from '../../hooks/useDiseaseList';
import usePlantList from '../../hooks/usePlantList';
import { COLOR_PRIMARY } from '../../constants';
import { diseaseListEntryType } from '../../types/diseaseListEntryType';

/** 
 * This is the main screen of the Encyclopedia tab.
 * It shows the picker element for user to select a specific plant
 * and a PlantDiseaseList component to let user scroll through.
 * Uses custom hook usePlantList to populate the picker.
 */
// @ts-ignore
function EncyclopediaScreen({navigation}) {
  const [selectedPlant, setSelectedPlant] = useState("tomato");
  const {plantList} = usePlantList();
  const {data, isLoading} = useDiseaseList(selectedPlant);

  const handlePressPlantDisease = (plantDisease: diseaseListEntryType) => {
    navigation.push('EncyclopediaDetail', {
      title: plantDisease.name,
      disease: plantDisease.name,
      plant: selectedPlant
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {plantList && 
      <View style={styles.pickerContainer}>
        <Picker
          style={{padding: 10}}
          selectedValue={selectedPlant}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPlant(itemValue)
          }>
          {plantList.map(plant => (
          <Picker.Item key={plant} label={plant} value={plant} />))}
        </Picker> 
      </View>}
      {isLoading && <ActivityIndicator size="large" color={COLOR_PRIMARY} />}
      {data && 
        <PlantDiseaseList
        plantDiseases={data}
        onPressPlantDisease={handlePressPlantDisease}
        />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    backgroundColor: COLOR_PRIMARY+'20',
  }
});


export default EncyclopediaScreen;