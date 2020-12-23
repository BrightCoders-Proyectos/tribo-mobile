import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import TitlesText from '../../../src/TitlesText';
import GreetingWelcome from './GreetingWelcome';
import LaMarketLogo from './LaMarketLogo';
import HastTagStayAtHome from './HastTagStayAtHome';
import DescriptionText from './DescriptionText';

function InputRegister() {
  return (
    <View>
      <Text style={styles.labelInput}>{TitlesText.titleRegisterWithPhone}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={TitlesText.inputDescription}
      />
    </View>
  );
}

function CustomButton(props) {
  const {styleTouchable, styleText, title} = props;
  return (
    <View>
      <TouchableOpacity style={styleTouchable} onPress={() => {}}>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <GreetingWelcome />
      <LaMarketLogo />
      <HastTagStayAtHome />
      <DescriptionText
        marginHorizontal={60}
        description={TitlesText.descriptionOfShopsNearYou}
      />
      <DescriptionText
        marginHorizontal={50}
        description={TitlesText.descriptionOfSendMessage}
      />
      <InputRegister />
      <CustomButton
        styleTouchable={styles.buttonRegister}
        styleText={styles.textButtonRegister}
        title={TitlesText.titleButtonRegister}
      />
      <CustomButton
        styleTouchable={styles.linkSkip}
        styleText={styles.textLinkSkip}
        title={TitlesText.titleLinkSkip}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    height: '100%',
  },
  labelInput: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#828282',
    marginTop: 30,
    marginHorizontal: 30,
  },
  textInput: {
    height: 60,
    borderColor: '#828894',
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 10,
    marginHorizontal: 30,
    paddingHorizontal: 15,
  },
  textButtonRegister: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9B9B9',
    width: 180,
    color: 'white',
    height: 50,
    marginHorizontal: '28%',
    borderRadius: 10,
    marginTop: 40,
  },
  linkSkip: {
    alignItems: 'center',
    marginTop: 20,
  },
  textLinkSkip: {
    color: '#828282',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
