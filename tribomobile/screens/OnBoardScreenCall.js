import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';

import colors from '../src/colors';

const callScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleOnBoardCall}</Text>
      <Text style={styles.paragraph}>
        {contentText.textoOnBoardingScreenCall}
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/girlPhone.png')}></Image>
      </View>
      <View style={styles.pageIndicatorContainer}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.onDot]} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText}>
          {contentText.textoOnBoardingScreenOmitir}
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
    padding: 15,
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
  pageIndicatorContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginBottom: 40,
    width: 200,
  },
  dot: {
    backgroundColor: colors.Yellow,
    borderRadius: 10,
    height: 10,
    margin: 5,
    width: 10,
  },
  onDot: {
    backgroundColor: colors.OrangeDark,
    borderRadius: 10,
    height: 10,
    margin: 5,
    width: 10,
  },
  skipButton: {
    textAlign: 'center',
  },
  skipButtonText: {
    color: colors.GrayLight,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default callScreen;
