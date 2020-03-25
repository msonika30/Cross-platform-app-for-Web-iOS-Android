import {App} from '@adoribranded/common';
import React from 'react';
import {NativeModules, Button, View, Text, StyleSheet} from 'react-native';

const Home = () => (
  <>
    <App />
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>
        Play button connects to webplayer on browser and native components in
        iOS and android
      </Text>
      <Text style={styles.sectionDescription}>
        This play button is app specific and is in App package
      </Text>
      <Button
        title="Play"
        onPress={() => NativeModules.PlayerSDK.openPlayer()}
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 32,
    textAlign: 'center',
  },
  sectionDescription: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  button: {
    width: '50%',
  },
});

export default Home;
