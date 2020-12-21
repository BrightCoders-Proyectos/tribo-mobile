import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';

const recomendationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleStayHome}</Text>
      <Text style={styles.subtitle}>{titlesText.titleRecomendations}</Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenRecomendacionesP1}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenRecomendacionesP2}
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
    marginBottom: 20,
  },
  subtitle: {
    color: '#1F1F1F',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  paragraph: {
    color: '#939393',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default recomendationScreen;
