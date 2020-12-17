import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';

const faqScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleSideNavFAQ}</Text>
      <Text style={styles.subtitle}>{titlesText.titleFAQFunciona}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP1}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP2}</Text>
      <Text style={styles.subtitle}>{titlesText.titleFAQFunciona}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP2}</Text>
      <Text style={styles.subtitle}>{titlesText.titleFAQFunciona}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP1}</Text>
      <Text style={styles.subtitle}>{titlesText.titleFAQFunciona}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP1}</Text>
      <Text style={styles.paragraph}>{contentText.textReadmeScreenFAQP2}</Text>
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
    marginBottom: 40,
  },
  subtitle: {
    color: '#939393',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#939393',
    fontSize: 16,
    marginBottom: 15,
  },
});

export default faqScreen;
