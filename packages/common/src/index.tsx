import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export const App = () => {
    const [count, setCount] = useState(0);
  
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cross Platform Apps</Text>
        <Text style={styles.sectionDescription}>A demo app to combine React Native components with native SDKs</Text>
        <Text style={styles.sectionDescription}>A simple counter to test React Native common package</Text>
        <Text style={styles.sectionDescription}>{count}</Text>
        <Button title="increment" onPress={() => setCount(count + 1)}></Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    body: {
      backgroundColor: "white",
    },
    sectionContainer: {
      margin: 32,
      textAlign: "center"
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: "black",
    },
    sectionDescription: {
      marginTop: 8,
      marginBottom: 8,
      fontSize: 18,
      fontWeight: '400',
      color: "gray",
    }
  });
  