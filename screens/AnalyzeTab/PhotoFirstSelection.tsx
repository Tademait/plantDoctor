import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../../components/CustomButton';
import textStyle from '../../assets/Style';

interface Props {
  onPhotoSelected: (photoUri: string) => void;
}

/**
 * This component handles the state when user is prompted
 * to select the first image from gallery or take a picture
 * using camera roll
 */
const PhotoFirstSelection = ({ onPhotoSelected }: Props) => {

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
      <Image source={require('./help1.png')} style={{width: 300, height: 300, resizeMode: 'center', marginTop: 5}} />
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
    padding: 10,
  },
});

export default PhotoFirstSelection;