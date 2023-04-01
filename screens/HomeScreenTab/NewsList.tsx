import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import {formatDate} from '../../helpers';
import {COLOR_SECONDARY} from '../../constants';
import Separator from '../../components/Separator';
import { newsEntryType } from '../../types/newsEntryType';


const renderItem = ({ item }: newsEntryProps) => (
  <View>
    <Text style={styles.dateText}>{formatDate(item.created_at)}</Text>
    <Text style={styles.titleText}>{item.title}</Text>
    <Text>{item.body}</Text>
    <Separator/>
  </View>
);

interface newsListProps {
  news: newsEntryType[];
}
interface newsEntryProps {
  item: newsEntryType;
}

function NewsList({news}: newsListProps) {
  return (
    <FlatList
      style={styles.container}
      data={news}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingRight: 20
  },
  titleText: {
    fontWeight: '500',
    fontSize: 14,
    color: COLOR_SECONDARY
  },
  dateText: {
    fontWeight: '100',
    fontSize: 12
  }
});
export default NewsList;