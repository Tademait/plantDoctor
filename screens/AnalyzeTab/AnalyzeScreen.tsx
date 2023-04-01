import React, {useState} from 'react';
import PhotoFirstSelection from './PhotoFirstSelection';
import PhotoFirstPreview from './PhotoFirstPreview';
import PhotoSecondSelection from './PhotoSecondSelection';
import PhotoSecondPreview from './PhotoSecondPreview';
import ResultDisplay from './ResultDisplay'
import {View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../../constants';
import * as FileSystem from 'expo-file-system';
import { historyObjectType } from '../../types/historyObjectType';


// @ts-ignore
function AnalyzeScreen({navigation}) {
  const [screenState, setScreenState] = useState('photoFirstSelection');
  const [firstPhotoUri, setFirstPhotoUri] = useState('');
  const [secondPhotoUri, setSecondPhotoUri] = useState('');
  const [apiResponse, setApiResponse] = useState<Array<{name: string, percentage: number}> | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState('tomato');

  function handleFirstPhotoSelection(uri: string) {
    setFirstPhotoUri(uri);
    setScreenState('photoFirstPreview');
  }
  function handleSecondPhotoSelection(uri: string) {
    setSecondPhotoUri(uri);
    setScreenState('photoSecondPreview');
  }

  function handleFirstPhotoRetake() {
    setScreenState('photoFirstSelection');
  }
  function handleSecondPhotoRetake() {
    setScreenState('photoSecondSelection');
  }
  function handleFirstPhotoConfirm() {
    setScreenState('photoSecondSelection');
  }

  async function handlePhotoSubmit() {
    
    try {
      console.log("fetching data from API");
      const res = await getDataFromApi();
      if (res) {
        const localUri = await saveImage();
        await saveMetadata(localUri, res);
      }
      setApiResponse(res);
      setScreenState('resultDisplay');
    }
    catch (error) {
      console.error(error);
    }
  }

  function handleStartOver() {
    setFirstPhotoUri('');
    setSecondPhotoUri('');
    setScreenState('photoFirstSelection');
  }

  async function saveImage() {
    //! TODO: maybe I will need to ask for permission to save the image into local storage
    // Save the image to local file system
    const fileName = firstPhotoUri.split('/').pop();
    if  (!fileName || FileSystem.documentDirectory === undefined) {
      Alert.alert('Error', 'Could not save the image, please try again.');
      return;
    }
    const fileUri = FileSystem.documentDirectory + fileName;
    console.log("file uri where it will actually be saved: ");
    console.log(fileUri);

    try {
      await FileSystem.copyAsync({
        from: firstPhotoUri,
        to: fileUri,
      });
      console.log('Image saved successfully!');
    } 
    catch (error) {
      console.error(error);
    }
    return fileUri;
  }

  async function saveMetadata(localUri: string | undefined, results: Array<{name: string, percentage: number}>) {
    // build the new identification object with disease details and image location
    let imageUri = undefined;
    if (localUri) {
      imageUri = localUri;
    }
    const date = new Date();
    const analysedDiseases = results;
    // fetch the old history array and replace it with the new history array with added new entry
    const history: string | null = await AsyncStorage.getItem('history');
    if (!history) {
      Alert.alert('Error', 'Could not save the analysis data.');
      return;
    }
    let history_array: historyObjectType[] = history ? JSON.parse(history) : [];
    const newHistoryObject: historyObjectType = { imageUri, date, selectedPlant, analysedDiseases };
    history_array.unshift(newHistoryObject); // use unshift to add at the start of array (sort from newest), otherwise use .push to sort from oldest
    await AsyncStorage.setItem('history', JSON.stringify(history_array));
  }

  const getDataFromApi = async () => {
    const formData = new FormData();
    formData.append('image1', {
      uri: firstPhotoUri,
      type: 'image/jpeg', 
      name: 'plant1.jpg',
    });
    formData.append('image2', {
      uri: secondPhotoUri,
      type: 'image/jpeg',
      name: 'plant2.jpg',
    });
    formData.append('plant', selectedPlant);

    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/v1/uploadfile`, {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
          'Content-Type': 'multipart/form-data',
          // add any additional headers if ever needed
        },
        body: formData,
      });
      if (response.status > 299) {
        Alert.alert(`Connection to server failed: err ${response.status}`);
        return undefined;
      }
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error(error);
      Alert.alert("Failed to fetch data from server")
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      {screenState === 'photoFirstSelection' && (
        <PhotoFirstSelection
          onPhotoSelected={handleFirstPhotoSelection}
        />
      )}
      {screenState === 'photoFirstPreview' && (
        <PhotoFirstPreview
          photoUri={firstPhotoUri}
          onRetake={handleFirstPhotoRetake}
          onSubmit={handleFirstPhotoConfirm}
          isLoading={isLoading}
        />
      )}
      {screenState === 'photoSecondSelection' && (
        <PhotoSecondSelection
          onPhotoSelected={handleSecondPhotoSelection}
        />
      )}
      {screenState === 'photoSecondPreview' && (
        <PhotoSecondPreview
          photoUri={secondPhotoUri}
          onRetake={handleSecondPhotoRetake}
          onStartOver={handleStartOver}
          onSubmit={handlePhotoSubmit}
          isLoading={isLoading}
          selectedPlant={selectedPlant}
          setSelectedPlant={setSelectedPlant}
        />
      )}
      {screenState === 'resultDisplay' && (
        <ResultDisplay
          onStartOver={handleStartOver}
          apiResponse={apiResponse}
          navigation={navigation}
          plant={selectedPlant}
         />
      )}
    </View>
  );
}
export default AnalyzeScreen;