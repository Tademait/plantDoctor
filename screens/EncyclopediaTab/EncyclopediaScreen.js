import {Text, View, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState, useEffect} from 'react';
import PlantDiseaseList from './PlantDiseaseList';
import useDiseaseList from '../../hooks/useDiseaseList';
import usePlantList from '../../hooks/usePlantList';
import { COLOR_PRIMARY } from '../../constants';




function EncyclopediaScreen({navigation}) {
  const [selectedPlant, setSelectedPlant] = useState("tomato");
  const {plantList} = usePlantList(selectedPlant);
  const {data, isLoading} = useDiseaseList(selectedPlant);

  const handlePressPlantDisease = (plantDisease) => {
    // Handle plant disease press
    navigation.push('EncyclopediaDetail', {
      title: plantDisease.name,
      disease: plantDisease.name,
      plant: selectedPlant
    })
  }

  return (
    <View>
      {plantList && <Picker
        style={{padding: 10}}
        selectedValue={selectedPlant}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedPlant(itemValue)
        }>
        {plantList.map(plant => (
        <Picker.Item key={plant} label={plant} value={plant} />))}
      </Picker>}
      {isLoading && <ActivityIndicator size="large" color={COLOR_PRIMARY} />}
      {data && 
        <PlantDiseaseList
        plantDiseases={data}
        onPressPlantDisease={handlePressPlantDisease}
        />
      }
    </View>
  )
}
export default EncyclopediaScreen;