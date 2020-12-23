import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import titlesText from '../../../src/TitlesText';
import contentText from '../../../screensText/ContentText';
import GreetingWelcome from './GreetingWelcome';
import LaMarketLogo from './LaMarketLogo';
import HastTagStayAtHome from './HastTagStayAtHome';
import DescriptionText from './DescriptionText';

function InputAddress() {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={contentText.textoWelcomeScreenGuestInputEscribe}
      />
    </View>
  );
}

function WelcomeGuestScreen() {
  return (
    <View style={styles.container}>
      <GreetingWelcome />
      <LaMarketLogo />
      <HastTagStayAtHome />
      <DescriptionText
        marginHorizontal={33}
        description={contentText.textoWelcomeScreenGuestLaMArket}
      />
      <DescriptionText
        marginHorizontal={22}
        description={contentText.textoWelcomeScreenGuestSolo}
      />
      <InputAddress />
      <DescriptionText
        marginHorizontal={40}
        description={contentText.textoWelcomeScreenGuestEscribe}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    height: '100%',
  },
  textInput: {
    height: 60,
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 30,
    paddingHorizontal: 15,
    backgroundColor: '#c9c7c7',
  },
});

export default WelcomeGuestScreen;
