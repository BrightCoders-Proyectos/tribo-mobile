import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import TitlesText from '../../../src/TitlesText';
import GreetingWelcome from './GreetingWelcome';
import LaMarketLogo from './LaMarketLogo';
import HastTagStayAtHome from './HastTagStayAtHome';
import DescriptionText from './DescriptionText';
import {CustomButton, ConfigBtnCustom} from '../../CustomButton';
import WhatsappIcon from '../../../assets/whatsapp.png';

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
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.GREEN}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.SMALL_WITH_ICON}
        icon={ConfigBtnCustom.ICON.WHATSAPP}
        title={'Button'}
        disabled={false}
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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B9B9B9',
    width: 180,
    color: 'white',
    height: 50,
    marginHorizontal: '28%',
    borderRadius: 25,
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
