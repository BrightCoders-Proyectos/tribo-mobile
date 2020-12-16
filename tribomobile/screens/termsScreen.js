import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';

const termsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleSideNavTerms}</Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenTerminosP1}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenTerminosP2}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenTerminosP3}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  title: {
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  paragraph: {
    color: '#939393',
    fontSize: 16,
    marginTop: 25,
  },
});

export default termsScreen;
