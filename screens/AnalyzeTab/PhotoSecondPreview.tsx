import React from 'react';
import {View, Image, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import usePlantList from '../../hooks/usePlantList';
import CustomButton from '../../components/CustomButton';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';
import textStyle from '../../assets/Style';


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
  const {plantList, loading, error} = usePlantList();
  return (
    <View style={styles.container}>
      {photoUri &&<Image source={{ uri: photoUri }} style={styles.preview} />}
      {isLoading && <ActivityIndicator size="large" color={COLOR_PRIMARY} />}
      <View style={styles.textContainer}>
      <Text style={textStyle.infoText}>Select the species
       of your plant and start analyzing:</Text>
      </View>
      <View>
        <View style={styles.pickerContainer}>
        {plantList && !loading ?
         <Picker
          selectedValue={selectedPlant}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPlant(itemValue)
            }>
          {plantList.map(plant => (
            <Picker.Item key={plant} label={plant} value={plant} />))}
          </Picker>
          : <ActivityIndicator size="large" color={COLOR_PRIMARY} />}
          {error && <Text>An error occured, please try again</Text>}
        </View>
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
  },
  textContainer: {
    padding: 10,
  },
  pickerContainer: {
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    backgroundColor: COLOR_PRIMARY+'20',
  }
});

export default PhotoSecondPreview;