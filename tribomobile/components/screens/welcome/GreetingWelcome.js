import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../../../src/titlesText';

function GreetingWelcome() {
  return (
    <View>
      <Text style={styles.textHello}>{titlesText.titleSplashGreeting}</Text>
      <Text style={styles.textWelcome}>{titlesText.titleSplashWelcome}</Text>
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
