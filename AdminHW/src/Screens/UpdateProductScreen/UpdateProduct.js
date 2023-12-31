import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Input,
  List,
  Button,
  Text,
  Image,
  NativeBaseProvider,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { theme } from "C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/src/utils/theme.js";
import * as api from "C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/src/utils/api.js";
// import styles from "./styles";

const UpdateProduct = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [product, setProduct] = useState();

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);

    try {
      const response = await api.searchProducts(searchTerm);
      // console.log(response.data)
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const gotoProductDetails = async (title) => {
    console.log("gotoProductDetails");

    const response = await api.getProductByTitle(title);
    const productData = response.data;

    setProduct(productData);
    console.log(product);

    // const product = response.data;
    navigation.navigate("Update Product Form", { product: productData });
  };

  return (
    <View style={styles.container}>

        {/* AutoComplete Search Bar Component */}
      <View style={styles.searchBarContainer}>
        {/* Search Input */}
        <Input
          size="sm"
          placeholder="Search for the product"
          onChangeText={handleSearch}
          value={searchTerm}
          variant="rounded"
          InputLeftElement={
            <Image
              source={require("C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/assets/icons/search-icon.png")}
              style={styles.searchIcon}
            />
          }
        />

        {/* Autocomplete Suggestions */}
        {searchResults.length > 0 && (
          <List style={styles.searchList}>
            {searchResults.map((item, index) => (
              <>
                <TouchableOpacity
                  key={index}
                  onPress={() => gotoProductDetails(item.title)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#D3D3D3",
                  }}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              </>
            ))}
          </List>
        )}
      </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: 'white'
},
searchBarContainer: {
    margin: 10,
  },
  searchList: {
    backgroundColor: "#F5F5F5",
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <UpdateProduct />
    </NativeBaseProvider>
  );
};
