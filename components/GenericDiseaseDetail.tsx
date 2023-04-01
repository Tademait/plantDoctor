import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import GalleryView from './GalleryView';
import Separator from './Separator';
import {diseaseDetailType} from '../types/diseaseDetailType';
import {COLOR_PRIMARY} from '../constants';

interface Props {
  data: diseaseDetailType | null;
  isLoading: boolean;
}

const GenericDiseaseDetail = ({data, isLoading}: Props): JSX.Element => {
  
  return (
    <View style={{height: '100%'}}>
      {isLoading &&
        <View style={{height: '100%', alignItems: "center", justifyContent: "center"}} >
          <ActivityIndicator size="large" color={COLOR_PRIMARY} />
        </View>}
      {data && (
        <ScrollView>
          <GalleryView pictures={data.pictures} />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Disease overview: </Text>
            <Text>{data.info}</Text>
            <Separator/>
            <Text style={styles.titleText}>Treatment: </Text>
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
