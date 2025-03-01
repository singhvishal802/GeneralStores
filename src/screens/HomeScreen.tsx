import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import SearchScreen from './SearchScreen';
import {data} from '../utils/data';
import Banner from '../component/Banner';
import Products from '../component/Products';
import {ItemProps} from '../types';

const HomeScreen = () => {
  // Render each item based on its type
  const renderItem = ({item}: ItemProps) => {
    switch (item.type) {
      case 'header':
        return <SearchScreen />; // Render the SearchScreen
      case 'banners':
        return <Banner item={item} />;
      case 'products':
        return <Products item={item} />;
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  banner: {width: 300, height: 150, marginRight: 10},
});

export default HomeScreen;
