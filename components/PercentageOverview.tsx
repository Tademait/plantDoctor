import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../constants';
import {capitalizeWords} from '../helpers';

interface Props {
  data: Array<{name: string, percentage: number}>;
  handlePercentageClick: (item: {name: string, percentage: number}) => void;
}

const PercentageOverview = ({data, handlePercentageClick}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.name} style={styles.touchable} 
          onPress={() => handlePercentageClick(item)}>
          <View style={[styles.bar, { width: `${item.percentage*100}%` }]} />
          <Text style={styles.text}>{`${capitalizeWords(item.name)} - ${(item.percentage*100).toFixed(2)}%`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: 10,
  },
  touchable: {
    height: 50,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLOR_SECONDARY
  },
  bar: {
    height: '100%',
    backgroundColor: COLOR_PRIMARY,
  },
  text: {
    position: 'absolute',
    top: 15,
    left: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PercentageOverview;