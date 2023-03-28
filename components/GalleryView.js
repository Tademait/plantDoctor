import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../constants';


function GalleryView({pictures}) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleGalleryClick(direction){
    console.log("index:");
    console.log(imageIndex);
    if (direction === "left"){
      if (imageIndex-1 <= 0) {
        setImageIndex(0);
        return;
      }
      setImageIndex(imageIndex-1);
    }
    else if (direction === "right") {
      if (imageIndex+1 >= pictures.length)
        return
      }
      setImageIndex(imageIndex+1);
  }
  if (pictures && pictures.length > 0){
    return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: pictures[imageIndex].url}} />
        <TouchableOpacity onPress={() => handleGalleryClick("left")} style={styles.touchableLeft}>
          <Feather name="chevron-left" size={40} color="#ddd" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGalleryClick("right")} style={styles.touchableRight}>
          <Feather name="chevron-right" size={40} color="#ddd" style={styles.chevron} />
        </TouchableOpacity>
    </View>
    )
  }
  else {
    return (
      <Text style={styles.emptyText}> No pictures available :( </Text>
      )
  }
}

const styles = StyleSheet.create({
 container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  touchableLeft: {
    position: 'absolute',
    height: '100%',
    left: 0,
    backgroundColor: "#33333340",
    width: '15%'
  },
  touchableRight: {
    position: 'absolute',
    right: 0,
    height: '100%',
    backgroundColor: "#33333340",
    width: '15%'
  },
  chevron: {
    position: 'absolute',
    top: '40%'
  },
  emptyText: {
    color: COLOR_SECONDARY,
    padding: 20,
    textAlign: 'center'
  }
});

export default GalleryView;