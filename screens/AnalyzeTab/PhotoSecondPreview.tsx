import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import usePlantList from '../../hooks/usePlantList';
import CustomButton from '../../components/CustomButton';
import {COLOR_PRIMARY} from '../../constants';

interface Props {
  photoUri: string;
  onRetake: () => void;
  onStartOver: () => void;
  onSubmit: () => void;
  isLoading: boolean;
  selectedPlant: string;
  setSelectedPlant: (plant: string) => void;
}

function PhotoSecondPreview({ photoUri, onRetake, onStartOver, onSubmit, isLoading, selectedPlant, setSelectedPlant }: Props) {
  const {plantList} = usePlantList();
  return (
    <View style={styles.container}>
      {photoUri &&<Image source={{ uri: photoUri }} style={styles.preview} />}
      {isLoading && <ActivityIndicator size="large" color={COLOR_PRIMARY} />}
      <View>
      {plantList && <Picker
        selectedValue={selectedPlant}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedPlant(itemValue)
        }>
        {plantList.map(plant => (
          <Picker.Item key={plant} label={plant} value={plant} />))}
        </Picker>}
        <CustomButton buttonText="Analyze" iconName="eye-outline" handlePress={onSubmit} />
        <View style={styles.buttonContainer}>
          <CustomButton buttonText="Retake Last Photo" iconName="return-down-back-outline" handlePress={onRetake} secondary={true} />
          <CustomButton buttonText="Start Over" iconName="refresh-outline" handlePress={onStartOver} secondary={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});

export default PhotoSecondPreview;