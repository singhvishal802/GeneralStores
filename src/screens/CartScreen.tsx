import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';
import {useCart} from '../context/CartContext';
import CartItem from '../component/CartItem';
import {CartItems} from '../types';

const CartScreen = () => {
  const navigation = useNavigation();
  const {cart, dispatch} = useCart();

  // update product quantity
  const updateQuantity = (
    id: string,
    quantity: number,
    itemQuantity: number,
  ) => {
    // return if itemQuantity is already 0 and we want to decrease the quantity
    if (itemQuantity === 0 && quantity === -1) return;
    dispatch({type: 'UPDATE_QUANTITY', payload: {id, quantity}});
  };

  // remove product from cart
  const removeItem = (id: string) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: id});
  };

  // Calculate total cost
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // {/* Display Each Product with Pricing and quantity*/}
  const renderItem = ({item}: CartItems) => {
    return (
      <View style={styles.cartItem}>
        <CartItem item={item} key={item.id} />
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            onPress={() => updateQuantity(item.id, -1, item.quantity)}
          />
          <View style={{marginHorizontal: 10}}>
            <Button
              title="+"
              onPress={() => updateQuantity(item.id, 1, item.quantity)}
            />
          </View>

          <Button title="Remove" onPress={() => removeItem(item.id)} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Display All Product with Pricing and quantity*/}
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Text style={styles.total}>Total: ${total}</Text>

      {/* Display Checkout button*/}
      <Button
        title="Checkout"
        onPress={() => navigation.navigate(RouteNames.CART_REVIEW)}
        disabled={cart.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  total: {fontSize: 18, fontWeight: 'bold', marginVertical: 10},
});

export default CartScreen;
