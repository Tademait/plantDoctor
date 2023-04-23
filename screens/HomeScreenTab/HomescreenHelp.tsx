import React from 'react';
import {View, Button, ScrollView} from 'react-native';
import GenericHelp from '../../components/GenericHelp';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * User tutorial component with GenericHelp functionality which also
 * contains a button that takes user to the Analyze tab.
 */
// @ts-ignore
function HomescreenHelp({navigation}): JSX.Element {

  return (
  <ScrollView>
    <GenericHelp />
    <View style={{padding: 10}}>
      <Button color="#73ac44" title="Let's get started!" onPress={() => navigation.navigate('Analyze')}/>
    </View>
  </ScrollView>
  )
}

export default HomescreenHelp;