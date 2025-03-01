import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RouteNames from '../navigation/routeName';
import {CommonActions} from '@react-navigation/native';
import {useCart} from '../context/CartContext';
import LottieView from 'lottie-react-native';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const {dispatch} = useCart();
  const goBackHome = () => {
    dispatch({
      type: 'RESET_CART',
      payload: [],
    });
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // Index of the new state (0 means it's the first screen)
        routes: [
          {name: RouteNames.HOME}, // The new screen to navigate to
        ],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/orderConfirm.json')}
        autoPlay
        loop
        style={{width: '40%', height: '40%'}}
      />
      <Text style={styles.title}>Order Confirmed!</Text>
      <Text>Your order has been placed successfully.</Text>
      <View style={{marginTop: 10}}>
        <Button title="Back to Home" onPress={goBackHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
});

export default ConfirmationScreen;
