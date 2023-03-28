import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import useNewsList from '../../hooks/useNewsList';
import NewsList from './NewsList';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../../constants';
import {Ionicons} from 'react-native-vector-icons';

function HomeScreen({navigation}) {
  const {newsList} = useNewsList();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('HomescreenHelp')}>
        <Ionicons name="leaf" size={50} color="#8cd253" style={styles.iconLeft}/>
        <Text style={styles.buttonText}> New? Get started! </Text>
        <Ionicons name="chevron-forward" size={50} color="#8cd253" style={styles.iconRight} />
      </TouchableOpacity>
      <Text style={styles.titleText}>News: </Text> 
      <NewsList news={newsList} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  actionButton: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginTop: 20,
    backgroundColor: COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
  },
  iconLeft: {
    marginRight: 48
  },
  iconRight: {
    marginLeft: 40
  },
  titleText: {
    color: COLOR_SECONDARY,
    fontWeight: '500',
    fontSize: 18,
    marginTop: 32
  }
});

export default HomeScreen;