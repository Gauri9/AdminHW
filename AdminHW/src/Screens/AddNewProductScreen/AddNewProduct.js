import React, { useEffect, useState, useRef } from 'react';
import {Picker} from '@react-native-picker/picker';
import { ScrollView, View, TextInput, Alert, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NativeBaseProvider, Button, Text, Radio } from "native-base";
import { theme } from "C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/src/utils/theme.js";
import styles from "./styles";
import * as api from 'C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/src/utils/api.js'
// import CameraComponent from '../../components/CameraComponent/CameraComponent.js';

const AddNewProduct = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productCompany, setProductCompany] = useState('');
  const [productStockQuantity, setProductStockQuantity] = useState();
  const [productMRP, setProductMRP] = useState('');
  const [productDiscountedPrice, setProductDiscountedPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAvailabilityStatus, setProductAvailabilityStatus] = useState(''); //radio buttons ['available(yes)', 'out of stock(no)']
  // const [productImages, setProductImages] = useState([]); // urls for images on gcp

  /* States for Validations */
  const [isMrpText, setIsMrpText] = useState(false)

  const handleAddProduct = async () => {

    if (isMrpText){
      Alert.alert('Error', 'MRP and Discounted Price should be a number');
      return;
    }
    if (!productTitle || !productStockQuantity || !productMRP || !productCategory){
      Alert.alert('Error', 'Please fill all the mandatory fields');
      return;
    }
    
    //create object of productData
    const productData = {
      title: productTitle,
      company: productCompany,
      quantity: productStockQuantity,
      price: parseFloat(productMRP),
      discountedPrice: productDiscountedPrice,
      description: productDescription,
      category: productCategory,
      availabilityStatus: productAvailabilityStatus
    };
    // let productData = { 
    //   "title": "trailMedicine105", 
    //   "company": "Torrento Pharmaceuticals", 
    //   "quantity":"10pc", 
    //   "price": 19.39, 
    //   "discountedPrice": 20,
    //   "description": "In the PRINCE2 project management method" ,
    //   "category": "homeopathic",
    //   "availabilityStatus": "yes"
    // }

    console.log(productData);

    // Make a network request to your backend to add the product
    try{
      const res = await api.addNewProduct(productData)
      Alert.alert('Success', 'Submitted Succefully!!');
    }
    catch(error){
      console.log('error while inserting the product data')
    }
    

    // Reset the form
    setProductTitle('');
    setProductCompany('');
    setProductStockQuantity();
    setProductMRP();
    setProductDiscountedPrice();
    setProductDescription('');
    setProductCategory('');
    setProductAvailabilityStatus('')
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Text style={styles.label}>Title*</Text>
      <TextInput
        value={productTitle}
        onChangeText={setProductTitle}
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="grey"
      />

      <Text style={styles.label}>Company*</Text>
      <TextInput
        value={productCompany}
        onChangeText={setProductCompany}
        style={styles.input}
        placeholder="Enter Company"
        placeholderTextColor="grey"
      />

    <Text style={styles.label}>Category*</Text>
      <TextInput
        value={productCategory}
        onChangeText={setProductCategory}
        style={styles.input}
        placeholder="Enter Category"
        placeholderTextColor="grey"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={productDescription}
        onChangeText={setProductDescription}
        style={[styles.input, styles.multilineInput]}
        placeholder="Enter description"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="grey"
      />

      <Text style={styles.label}>Stock Quantity*</Text>
      <TextInput
        value={productStockQuantity}
        onChangeText={setProductStockQuantity}
        style={styles.input}
        placeholder="Enter stock quantity"
        placeholderTextColor="grey"
      />

      <Text style={styles.label}>MRP*</Text>
      <TextInput
        value={productMRP}
        onChangeText={(text) =>{
          if(!isNaN(text)){setProductMRP(text); setIsMrpText(false);}
          else{setIsMrpText(true)}
        }  }
        style={styles.input}
        placeholder="Enter MRP"
        placeholderTextColor="grey"
      />
      {isMrpText &&  <Text style={{color:'red'}}>Warning !! MRP should be number</Text>}
     
      <Text style={styles.label}>Discounted Price</Text>
      <TextInput
        value={productDiscountedPrice}
        onChangeText={setProductDiscountedPrice}
        style={styles.input}
        placeholder="Enter discounted price"
        placeholderTextColor="grey"
      />

    <Radio.Group
      name="myRadioGroup"
      value={productAvailabilityStatus}
      onChange={(status) => {
        setProductAvailabilityStatus(status);
      }}
    >
          <Text style={styles.label}>Availability Status</Text>

      <Radio value="Available" my="1">
        Available
      </Radio>
      <Radio value="Out of Stock" my="1">
        Out of Stock
      </Radio>
    </Radio.Group>   
      

    {/* <Text style={styles.label}>Add Images of the Medicines</Text> */}
    {/* <CameraComponent/> */}

      <Button style={styles.submit} onPress={handleAddProduct}>Add Product</Button>
    </ScrollView>
  );
};

export default () => {
    return (
      <NativeBaseProvider>
        <AddNewProduct />
      </NativeBaseProvider>
    );
  };



