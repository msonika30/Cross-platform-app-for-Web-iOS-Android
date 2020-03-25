import { App } from "@adoribranded/common";
import React, { useState } from 'react';
// import { playPodcast } from './Utils/utils';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  const [showWebPlayer, setShowWebPlayer] = useState(false);

  return (
    <>
      <App />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>Play button connects to webplayer on browser and native components in iOS and android</Text>
        <Text style={styles.sectionDescription}>This play button is web specific and is in Web package</Text>
        <Button title={showWebPlayer ? "Close" : "Play"} onPress={() => setShowWebPlayer(!showWebPlayer)}></Button> 
        {
          showWebPlayer ? 
            <iframe 
              src='https://webplayer.dev.adorilabs.com/e/IP6wqXD7VxGRQocn' 
              width='100%' 
              height='304' 
              title='Adori web Player' 
              scrolling='no' 
              allow='autoplay'
            >
            </iframe> : null
        }
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
