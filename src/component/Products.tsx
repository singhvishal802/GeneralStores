import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';
import {ItemProps, ProductItem} from '../types';

const Products = ({item}: ItemProps) => {
  const navigation = useNavigation();
  // render each product
  const renderItem = ({item}: ProductItem) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RouteNames.PRODUCT_DETAILS, {
            item: item,
          })
        }
        style={styles.product}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productTags}>{item.tags.join(', ')}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        horizontal
        data={item.data}
        keyExtractor={product => product.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  product: {
    margin: 5,
    padding: 15,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {width: 100, height: 100, borderRadius: 10},
  productName: {fontSize: 16, fontWeight: 'bold'},
  productPrice: {fontSize: 14, color: 'green'},
  productTags: {fontSize: 12, color: 'gray'},
});

export default Products;
