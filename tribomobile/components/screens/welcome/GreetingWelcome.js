import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TitlesText from '../../../src/TitlesText';

function GreetingWelcome() {
  return (
    <View>
      <Text style={styles.textHello}>{TitlesText.titleSplashGreeting}</Text>
      <Text style={styles.textWelcome}>{TitlesText.titleSplashWelcome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    height: '100%',
  },
  textHello: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 30,
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 25,
  },
});

export default GreetingWelcome;
