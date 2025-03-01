import {StyleSheet, Text} from 'react-native';
import {CartItems} from '../types';

const CartItem = ({item}: CartItems) => {
  return (
    <Text style={styles.productStyle}>
      {item.name} - ${item.price} x {item.quantity}
    </Text>
  );
};

const styles = StyleSheet.create({
  productStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CartItem;
