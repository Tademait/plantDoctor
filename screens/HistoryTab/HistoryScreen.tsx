import React from 'react';
import {Text, Alert, View, Button, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usePlantList from '../../hooks/usePlantList';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';
import {formatDate} from '../../helpers';
import { historyObjectType } from '../../types/historyObjectType';
import * as FileSystem from 'expo-file-system';

/**
* This is the main screen of History tab. It shows filters on the top
* and a list of history entries. This component also wraps and handles
* the sorting and deletion of items. Uses a useEffect hook to retrieve
* data from local storage when the screen gets rendered.
 */
// @ts-ignore
function HistoryScreen({navigation}) {
  const [historyData, setHistoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState('all');
  const sortButtonText = ["sorted from newest ↓", "sorted from oldest ↑"]
  const [sortButtonTextIndex, setSortButtonTextIndex] = useState(0);
  const {plantList} = usePlantList();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      const loadHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem('history');
        if (storedHistory) {
          setHistoryData(JSON.parse(storedHistory));
          setFilteredData(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadHistory();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  
  async function showAsyncStorage() {
    const hist = await AsyncStorage.getItem('history');
    console.log(hist);
  }

  function checkArrayExists(arr: any[]) {
    if (Array.isArray(arr) && arr.length) {
      return true;
    }
    return false;
  }

  function handlePlantChange(plant: string){
    setSelectedPlant(plant);
    if (plant === "all") {
      setFilteredData(historyData);
    }
    else {
      setFilteredData(historyData.filter((data: historyObjectType) => data.selectedPlant === plant));
    }
  }

  function handleSort() {
    if (sortButtonTextIndex === 0) {
      setFilteredData([...filteredData].sort((a: historyObjectType, b: historyObjectType) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime()}
        ));
      setSortButtonTextIndex(1);
    }
    else {
      setFilteredData([...filteredData].sort((a: historyObjectType, b: historyObjectType) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime()}
        ));
      setSortButtonTextIndex(0);
    }
  }

  async function handleDeletion(itemDate: Date) {
    let deletedEntry: historyObjectType;
    const viableEntries = historyData.filter((item: historyObjectType) => item.date === itemDate);
    if (viableEntries.length > 0) {
      deletedEntry = viableEntries[0];
    }
    else {
      // item to be deleted was not found
      return;
    }
    if (deletedEntry && deletedEntry.imageUri && deletedEntry.imageUri.startsWith('file://')) {
      console.log("deleting the file from local storage");
      console.log(deletedEntry.imageUri);

      FileSystem.deleteAsync(deletedEntry.imageUri)
      .then(() => { console.log(`File ${deletedEntry.imageUri} was deleted`); Alert.alert("Image deleted successfully")})
      .catch((error) => error.log(`An error occurred while deleting ${deletedEntry.imageUri}: ${error}`));
    }
    const newHistory = historyData.filter((item: historyObjectType) => item.date != itemDate);
    setHistoryData(newHistory);
    setFilteredData(newHistory);
    await AsyncStorage.setItem('history', JSON.stringify(newHistory));
  }



  return (
    <View>
      <Button title={sortButtonText[sortButtonTextIndex]} onPress={handleSort} color={COLOR_SECONDARY}/>
      {plantList && 
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedPlant}
          onValueChange={(itemValue, itemIndex) => handlePlantChange(itemValue)}>
          <Picker.Item label="all plants" value="all" />
          {plantList.map(plant => (
          <Picker.Item key={plant} label={plant} value={plant} />))}
        </Picker>
      </View>}
      {checkArrayExists(filteredData)
        ? (
        <FlatList
          style={styles.container}
          data={filteredData}
          renderItem={({item, index}: {item: historyObjectType, index: number} ) => 
            <TouchableOpacity key={index} onPress={() => navigation.navigate('HistoryOverview', {historyObj: item})}>
              <View style={styles.entryContainer}>
                {item.imageUri
                ? <Image source={{uri:item.imageUri}} style={styles.entryImage} />
                : <Text style={styles.noImage}>No image</Text>}
                <Text style={styles.entryTextSecondary}> Tap to show details </Text>
                <View style={styles.detail}>
                  <Text style={styles.entryText}> {formatDate(item.date)} </Text>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletion(item.date)}>
                    <Feather name="trash-2" size={28} color="#ddd" />
                    <Text style={styles.deleteText}> Delete </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>}
          keyExtractor={(item) => item.date.toString()}
        />
      ) : <Text style={styles.nothing}> Nothing to show here </Text>}
    </View>
  )
}

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
    height: 100,
    paddingRight: 30
  },
  entryText: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 5
  },
  entryTextSecondary: {
    fontSize: 12,
    fontWeight: '100',
    textAlign: 'right',
    marginTop: 42,
    paddingLeft: 10
  },
  detail: {
    flex: 2,
    padding: 5,
    marginLeft: 5
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#b3101e',
    alignItems: 'center',
    padding: 5,
    marginTop: 46,
    width: 100,
    position: 'absolute',
    right: 0,
    borderRadius: 5
  },
  deleteText: {
    color: "#fff",
    fontSize: 16
  },
  picker: {
    margin: 10
  },
  nothing: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR_SECONDARY,
  },
  pickerContainer: {
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    backgroundColor: COLOR_PRIMARY+'20',
  },
  noImage: {
    flex: 1,
    width: 100,
    height: 100,
    textAlign: 'center',
    fontSize: 10,
    color: COLOR_SECONDARY
  }
});

export default HistoryScreen;