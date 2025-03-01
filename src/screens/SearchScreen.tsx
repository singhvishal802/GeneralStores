import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {products} from '../utils/data';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';
import {ProductItem} from '../types';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  // filter product according to query parameter
  const filteredProducts = products.filter(product => {
    if (query === '') return;
    return product.name?.toLowerCase().includes(query?.toLowerCase());
  });

  // Memoize the callback function
  const handleSearch = useCallback((text: string) => {
    setQuery(text);
  }, []);

  const handlePress = (item: ProductItem) => {
    navigation.navigate(RouteNames.PRODUCT_DETAILS, {
      item: item,
    });
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products"
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.resultItem}>
              {item.name} - ${item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
  },
  resultItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
});

export default React.memo(SearchScreen);
