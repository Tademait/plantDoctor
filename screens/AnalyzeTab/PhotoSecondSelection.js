import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import textStyle from '../../assets/Style';
import CustomButton from '../../components/CustomButton';


const PhotoSecondSelection = ({ onPhotoSelected }) => {
  const [secondSelectedImage, setSecondSelectedImage] = useState(null);

  const handleCameraButtonPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setSecondSelectedImage(result.uri);
        onPhotoSelected(result.uri);
      }
    }
  };

  const handleGalleryButtonPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setSecondSelectedImage(result.uri);
        onPhotoSelected(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={textStyle.infoText}>Please, provide a second image of the other side of the leaf. Make sure to crop it properly again: </Text>
      </View>
      <Image source={require('./help2.png')} style={{width: 300, height: 300, resizeMode: 'center', marginTop: 5}} />
      <View style={styles.buttonContainer}>
        <CustomButton buttonText="Take a Photo" iconName="camera-outline" handlePress={handleCameraButtonPress} />
        <CustomButton buttonText="Select From Gallery" iconName="image-outline" handlePress={handleGalleryButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30
  },
  buttonContainer: {
    marginTop: 70,
    flexDirection: 'row',
    padding: 10
  }
});

export default PhotoSecondSelection;