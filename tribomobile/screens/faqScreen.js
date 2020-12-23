import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import colors from '../src/Colors';

const FaqScreen = () => {
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
    color: colors.GrayDark,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    color: colors.GrayLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    color: colors.GrayLight,
    fontSize: 16,
    marginBottom: 15,
  },
});

export default FaqScreen;
