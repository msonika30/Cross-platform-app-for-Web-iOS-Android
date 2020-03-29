import { App } from "@adoribranded/common";
import React from 'react';
import { openAlert } from './Utils/utils';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <>
      <App />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          Click button calls function to open alert on browser and calls native
          SDK function in iOS and android apps
        </Text>
        <Text style={styles.sectionDescription}>
          This Click button is web specific and is in Web package</Text>
        <Button title="Click" onPress={openAlert}></Button>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 32,
    textAlign: "center"
  },
  sectionDescription: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "gray",
  },
  button: {
    width: "50%"
  }
});

export default Home;
