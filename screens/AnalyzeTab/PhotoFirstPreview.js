import {TouchableOpacity, Text, View, Button, Image, StyleSheet, ActivityIndicator} from 'react-native';
import CustomButton from '../../components/CustomButton';
import textStyle from '../../assets/Style';
import {COLOR_TERTIARY} from '../../constants';

function PhotoFirstPreview({ photoUri, onRetake, onSubmit, isLoading }) {
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