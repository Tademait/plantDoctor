import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY } from '../constants';

function FlipSwitch({setIsOn, isOn}: any){

  const handleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSwitch}>
      <View style={[styles.switch, isOn && styles.switchOn]}>
        <View style={[styles.switchKnob, isOn && styles.switchKnobOn]} />
      </View>
      <Text style={styles.label}>{isOn ? 'ON' : 'OFF'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchOn: {
    backgroundColor: COLOR_PRIMARY,
  },
  switchKnob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  switchKnobOn: {
    transform: [{ translateX: 15 }],
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default FlipSwitch;