import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../../../src/titlesText';

function HastTagStayAtHome() {
  return (
    <View>
      <Text style={styles.textHashTag}>{titlesText.titleStayHome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHashTag: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25,
  },
});

export default HastTagStayAtHome;
