import { StyleSheet } from "react-native";
import { theme } from "C:/Users/Gauri/FULL_STACK/AdminHW/AdminHW/AdminHW/src/utils/theme.js";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight:'bold'
    },
    // input: {
    //   fontSize: 12,
    //   backgroundColor: '#f0f0f0',
    //   padding: 8,
    //   marginBottom: 30,
    //   borderRadius: 4,
    // },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
      color: 'black'
    },
    multilineInput: {
      height: 100,
      textAlignVertical: 'top',
    },
    submit:{
      backgroundColor: theme.primaryColor,
      marginBottom: 50,
      marginTop: 25
    },
    buttonStyle: {
      backgroundColor: '#307ecc',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#307ecc',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 15,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
  
    
  });