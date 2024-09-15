// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../pages/MainPage';
// import ProductListScreen from '../pages/ProductListScreen';
// import AddProductScreen from '../pages/AddProductScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={MainPage}
          options={{ title: 'Product List' }}
        />
        {/* <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{ title: 'Add Product' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
