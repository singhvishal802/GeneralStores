import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import CartReviewScreen from './src/screens/CartReviewScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import RouteNames from './src/navigation/routeName';
import {CartProvider} from './src/context/CartContext';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerBackButtonDisplayMode: 'minimal'}}
            initialRouteName={RouteNames.HOME}>
            <Stack.Screen name={RouteNames.HOME} component={HomeScreen} />
            <Stack.Screen name={RouteNames.SEARCH} component={SearchScreen} />
            <Stack.Screen
              name={RouteNames.PRODUCT_DETAILS}
              component={ProductDetailsScreen}
            />
            <Stack.Screen name={RouteNames.CART} component={CartScreen} />
            <Stack.Screen
              name={RouteNames.CART_REVIEW}
              component={CartReviewScreen}
            />
            <Stack.Screen
              name={RouteNames.CONFIRMATION}
              component={ConfirmationScreen}
              options={{headerBackVisible: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </SafeAreaView>
  );
};

export default App;
