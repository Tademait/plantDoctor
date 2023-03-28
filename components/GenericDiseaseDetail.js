import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons';
import GalleryView from './GalleryView';
import Separator from './Separator';


function GenericDiseaseDetail({data, isLoading}) {
  
  return (
    <View>
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
      {data && (
        <ScrollView>
          <GalleryView pictures={data.pictures} />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}> Disease overview: </Text>
            <Text>{data.info}</Text>
            <Separator/>
            <Text style={styles.titleText}> Treatment: </Text>
            <Text>{data.treatment}</Text>
          </View>
        </ScrollView>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 10
  },
  textContainer: {
    padding: 10,
    paddingTop: 20
  }
});

export default GenericDiseaseDetail;
