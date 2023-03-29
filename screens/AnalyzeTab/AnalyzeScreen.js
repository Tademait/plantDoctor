import PhotoFirstSelection from './PhotoFirstSelection';
import PhotoFirstPreview from './PhotoFirstPreview';
import PhotoSecondSelection from './PhotoSecondSelection';
import PhotoSecondPreview from './PhotoSecondPreview';
import ResultDisplay from './ResultDisplay'
import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MediaLibrary from 'expo-media-library';
import { API_BASE_URL } from '../../constants';


function AnalyzeScreen({navigation}) {
  const [screenState, setScreenState] = useState('photoFirstSelection');
  const [firstPhotoUri, setFirstPhotoUri] = useState('');
  const [secondPhotoUri, setSecondPhotoUri] = useState('');
  const [apiResponse, setApiResponse] = useState('no-response');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState('tomato');

  function handleFirstPhotoSelection(uri) {
    setFirstPhotoUri(uri);
    setScreenState('photoFirstPreview');
  }
  function handleSecondPhotoSelection(uri) {
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
        const asset = await saveImage();
        await saveMetadata(asset, res);
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
    // save the image into local storage
    const {status} = await MediaLibrary.getPermissionsAsync();
    if (status !== 'granted') {
      await MediaLibrary.requestPermissionsAsync();
    }
    if (status !== 'granted') {
      return undefined;
    }
    const asset = await MediaLibrary.createAssetAsync(firstPhotoUri);
    //const album = await MediaLibrary.getAlbumAsync("plantApp");
    //if (!album){
    //  console.log("creating album");
    //  const album = await MediaLibrary.createAlbumAsync("plantApp", asset);
    //  console.log(album);
    //}
    //else {
    //  console.log("album already created");
    //  await MediaLibrary.addAssetsToAlbumAsync([asset], album);
    //}
    return asset;
  }

  async function saveMetadata(asset, results) {
    // build the new identification object with disease details and image location
    let imageUri = undefined;
    if (asset) {
      imageUri = asset.uri;
    }
    const date = new Date();
    const analysedDiseases = results;
    const newHistoryObject = { imageUri, date, selectedPlant, analysedDiseases, asset };
    // fetch the old history array and replace it with the new history array with added new entry
    let history = await AsyncStorage.getItem('history');
    history = history ? JSON.parse(history) : [];
    history.unshift(newHistoryObject); // use unshift to add at the start of array (sort from newest), otherwise use .push to sort from oldest
    await AsyncStorage.setItem('history', JSON.stringify(history));
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
      alert("Failed to fetch data from server")
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