import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import * as StoreReview from "expo-store-review";

// We can use async and await when we will be waiting for some task to perform first then we will be showing our Review section.

const handleReview = () => {

  if(StoreReview.hasAction()){

    StoreReview.requestReview();
  }
}


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>


      <TouchableOpacity onPress={handleReview()} style={styles.button}>
        <Text style={styles.buttonText}>review</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

  button:{
   
    width:200,
    height:40,
    backgroundColor:'blue',
    display:'flex',
    alignItems:'center',
    borderRadius:25

  },

  buttonText:{
    color:'white',
    fontSize:22
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
