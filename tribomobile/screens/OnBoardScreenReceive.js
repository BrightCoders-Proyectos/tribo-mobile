import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';
import colors from '../src/colors';

const receiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleOnBoardReceive}</Text>
      <Text style={styles.paragraph}>
        {contentText.textoOnBoardingScreenReceive}
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/delivery.png')}></Image>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>
          {contentText.textoOnBoardingScreenStart}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    height: '100%',
    padding: 40,
    width: '100%',
  },
  title: {
    color: colors.OrangeFonts,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    color: colors.BlueDark,
    fontSize: 16,
    padding: 25,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignContent: 'center',
    height: 350,
    width: 350,
  },
  startButton: {
    backgroundColor: colors.OrangeDark,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  startButtonText: {
    color: colors.White,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default receiveScreen;
