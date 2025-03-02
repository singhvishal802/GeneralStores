import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {useCart} from '../context/CartContext';
import CartItem from '../component/CartItem';
import SelectPayMent from '../component/SelectPayMent';

const CartReviewScreen = () => {
  const {cart} = useCart();

  // Calculate total by adding subtotal and tax
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <View style={styles.container}>
      {/* Display Cart Items */}
      {cart?.map(item => (
        <View style={{marginBottom: 10}} key={item.id}>
          <CartItem item={item} key={item.id} />
        </View>
      ))}

      {/* Display Order Summary */}
      <View style={styles.subTotalView}>
        <Text style={styles.title}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.title}>Tax: ${tax.toFixed(2)}</Text>
        <Text style={styles.title}>Total: ${total.toFixed(2)}</Text>
      </View>

      {/* Display Selected Payment Method */}
      <SelectPayMent total={total} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTotalView: {
    marginTop: '20%',
  },
  paymentMethodContainer: {
    marginVertical: 20,
    marginTop: '30%',
  },
  paymentMethodLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodValue: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default CartReviewScreen;
