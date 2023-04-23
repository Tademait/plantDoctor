import React from 'react';
import {Text, View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import CustomButton from '../../components/CustomButton';
import textStyle from '../../assets/Style';

interface Props {
  photoUri: string;
  onRetake: () => void;
  onSubmit: () => void;
  isLoading: boolean;
}


/**
 * This component handles the state when user is previewing
 * the first image he has taken using camera roll or chosen
 * from the gallery.
 */
function PhotoFirstPreview({ photoUri, onRetake, onSubmit, isLoading }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.preview} />
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
      <View style={styles.textContainer}>
        <Text style={textStyle.infoText}>Are you happy with the picture? </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton buttonText="Retake Photo" iconName="return-down-back-outline" handlePress={onRetake} secondary={true} />
        <CustomButton buttonText="Confirm Photo" iconName="checkmark-outline" handlePress={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PhotoFirstPreview;