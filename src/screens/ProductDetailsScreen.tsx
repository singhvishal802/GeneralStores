import React, {useState} from 'react';
import {View, Text, Image, FlatList, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';
import {useCart} from '../context/CartContext';
import {ProductItem} from '../types';

const ProductDetailsScreen = ({route}: any) => {
  const {item}: ProductItem = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const {dispatch} = useCart();

  // Handle add to cart functionality
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity,
      },
    });
    navigation.navigate(RouteNames.CART);
  };

  return (
    <View style={styles.container}>
      {/* Display Product Details*/}
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      {/* Update Product Quantity */}
      <View style={styles.quantityContainer}>
        <Button
          title="-"
          onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(prev => prev + 1)} />
      </View>
      {/* Display Add To cart button*/}
      <View style={styles.addToCartButton}>
        <Button title="Add to Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  productName: {fontSize: 24, fontWeight: 'bold', marginVertical: 10},
  productPrice: {fontSize: 20, color: 'green'},
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {fontSize: 18, marginHorizontal: 10},
  addToCartButton: {flex: 1, justifyContent: 'flex-end'},
});

export default ProductDetailsScreen;
