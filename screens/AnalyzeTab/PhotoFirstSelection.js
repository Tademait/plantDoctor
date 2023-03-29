import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {COLOR_PRIMARY} from '../../constants';
import CustomButton from '../../components/CustomButton';
import textStyle from '../../assets/Style';


const PhotoFirstSelection = ({ onPhotoSelected }) => {

  const handleCameraButtonPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        onPhotoSelected(result.assets[0].uri);
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
      if (!result.canceled && result.assets && result.assets.length > 0) {
        onPhotoSelected(result.assets[0].uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={textStyle.infoText}>Please, provide an image of the leaf. Make sure it is properly cropped: </Text>
      </View>
      <Image source={require('./help1.png')} style={{width: 300, height: 300, resizeMode: 'center'}} />
      <View style={styles.buttonContainer}>
        <CustomButton buttonText="Take a Picture" iconName="camera-outline" handlePress={handleCameraButtonPress} />
        <CustomButton buttonText="Choose From Gallery" iconName="image-outline" handlePress={handleGalleryButtonPress} />
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
  },
});

export default PhotoFirstSelection;