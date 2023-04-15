import React from 'react';
import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// @ts-ignore
import { Feather } from 'react-native-vector-icons';
import {COLOR_SECONDARY} from '../constants';

interface Props {
  pictures: Array<{url: string}>;
}

const GalleryView = ({pictures}: Props): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  function handleGalleryClick(direction: "left" | "right"){
    if (direction === "left"){
      let newIndex = imageIndex - 1;
      if (newIndex < 0){
        newIndex = 0;
      }
      if (newIndex > pictures.length){
        newIndex = pictures.length - 1;
      }
      setImageIndex(newIndex);
      return;
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
        {(pictures && pictures[imageIndex] && pictures[imageIndex].url)
        ? <Image style={styles.image} source={{uri: pictures[imageIndex].url}} />
        : <Text style={styles.image}>No img</Text>
        }
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