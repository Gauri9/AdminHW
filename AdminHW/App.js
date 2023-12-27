import React from 'react';

//Admin Screens
import AdminHome from'./src/Screens/AdminHomeScreen/AdminHome';
import ManageProducts from './src/Screens/ManageProductsScreen/ManageProducts';
import AddNewProduct from './src/Screens/AddNewProductScreen/AddNewProduct';
import UpdateProduct from './src/Screens/UpdateProductScreen/UpdateProduct';
import UpdateProductForm from './src/Screens/UpdateProductScreen/UpdateProductForm';
import AdminOrders from './src/Screens/AdminOrdersScreen/AdminOrders';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Icon, Image, NativeBaseProvider} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Stack.Navigator>
      <Stack.Screen name="Admin Home" component={AdminHome}/>
      <Stack.Screen name="Manage Products" component={ManageProducts}/>
      <Stack.Screen name="Add New Product" component={AddNewProduct}/>
      <Stack.Screen name="Update Product" component={UpdateProduct}/>
      <Stack.Screen name="Update Product Form" component={UpdateProductForm}/>
      <Stack.Screen name='Admin Orders' component={AdminOrders}/>  
      </Stack.Navigator>
    </NativeBaseProvider>
    
  );
}


export default () => {
  return (
    <NavigationContainer>

        <App />
      
    </NavigationContainer>
  )
}