import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/titlesText';
import contentText from '../screensText/contentText';
import colors from '../src/colors';

const policyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titlesText.titleSideNavPolicy}</Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenPoliticaP1}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenPoliticaP2}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenPoliticaP3}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenPoliticaP4}
      </Text>
      <Text style={styles.paragraph}>
        {contentText.textReadmeScreenPoliticaP5}
      </Text>
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
    marginTop: 10,
    marginBottom: 20,
  },
  paragraph: {
    color: colors.GrayLight,
    fontSize: 16,
    marginTop: 25,
  },
});

export default policyScreen;
