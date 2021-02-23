import React, {useState, useEffect} from 'react';
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




function LoadingScreen(props) {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(function(){ navigation.navigate('Welcome') }, 2000);
  });

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

export default LoadingScreen;
