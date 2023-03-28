import React from 'react';
import { FlatList, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';

const PlantDiseaseList = ({ plantDiseases, onPressPlantDisease }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onPressPlantDisease(item)}>
      <View style={styles.entryContainer}>
        {item.pictures[0] && <Image source={{ uri: item.pictures[0].url }} style={styles.entryImage} />}
        <View style={styles.entryDetail}>
          <Text style={styles.entryText}>{item.name}</Text>
          <Text style={styles.entryTextSecondary}>Tap to show details</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      data={plantDiseases}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  entryContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  entryImage: {
    flex: 1,
    width: 100,
    height: 100
  },
  entryText: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'right',
    paddingRight: 28,
    paddingTop: 20
  },
  entryTextSecondary: {
    flex: 2,
    fontSize: 12,
    fontWeight: '100',
    textAlign: 'right',
    paddingRight: 28,
    paddingTop: 8
  },
  entryDetail: {
    flex: 2,
  }
});

export default PlantDiseaseList;