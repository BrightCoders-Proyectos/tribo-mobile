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
import DescriptionText from './DescriptionText';
import {CustomButton, ConfigBtnCustom} from '../../CustomButton';
import TriboLogo from '../../../assets/tribologo.png';
import ContentText from '../../../screensText/ContentText';
import TextInputCustom from '../../TextInputs';




function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.triboLogo} source={TriboLogo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent:'center'
  },
  triboLogo: {
    alignSelf: 'center',
  }
 });

export default WelcomeScreen;
