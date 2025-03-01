import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {paymentMethods} from '../utils/data';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';

const SelectPayMent = () => {
  const navigation = useNavigation();

  // store default payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0],
  );

  // Handle payment based on the selected payment method
  const handlePlaceOrder = () => {
    switch (selectedPaymentMethod.name) {
      case 'Credit Card':
        Alert.alert('Payment', 'Credit Card payment success.');
        break;
      case 'PayPal':
        Alert.alert('Payment', 'PayPal payment success.');
        break;
      case 'Razorpay':
        Alert.alert('Payment', 'Razorpay payment success.');
        break;
      default:
        Alert.alert('Error', 'Invalid payment method.');
        return;
    }

    // Navigate to the Confirmation Screen
    navigation.navigate(RouteNames.CONFIRMATION);
  };

  // For simplicity, cycle through payment methods
  const changePaymentMethod = () => {
    const currentIndex = paymentMethods.findIndex(
      method => method.id === selectedPaymentMethod.id,
    );
    const nextIndex = (currentIndex + 1) % paymentMethods.length;
    setSelectedPaymentMethod(paymentMethods[nextIndex]);
  };
  return (
    <View style={styles.paymentMethodContainer}>
      <Text style={styles.paymentMethodLabel}>Selected Payment Method:</Text>
      <Text style={styles.paymentMethodValue}>
        {selectedPaymentMethod.name}
      </Text>
      <Button title="Change Payment Method" onPress={changePaymentMethod} />
      {/* Place Order Button */}
      <View style={styles.placeOrderView}>
        <Button title="Place Order" onPress={handlePlaceOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentMethodContainer: {
    marginVertical: 20,
    marginTop: '30%',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentMethodLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodValue: {
    fontSize: 16,
    marginVertical: 10,
  },
  placeOrderView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default React.memo(SelectPayMent);
