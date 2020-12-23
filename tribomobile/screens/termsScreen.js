import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import titlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import colors from '../src/Colors';

const TermsScreen = () => {
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

export default TermsScreen;
