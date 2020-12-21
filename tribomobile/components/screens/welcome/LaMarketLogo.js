import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import titlesText from '../../../src/titlesText';
import Montain from '../../../assets/mountains.png';

function LaMarketLogo() {
  return (
    <View>
      <Image style={styles.montainIcon} source={Montain} />
      <Text style={styles.textMarket}>{titlesText.titleLogo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  montainIcon: {
    height: 150,
    width: 150,
    tintColor: 'black',
    alignSelf: 'center',
  },
  textMarket: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: -20,
  },
});

export default LaMarketLogo;
