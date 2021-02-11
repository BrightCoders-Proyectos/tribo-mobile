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
      <DescriptionText
        marginHorizontal={22}
        description={ContentText.textWelcomeScreenDescription}
      />
      <Text style={styles.textBold}>{TitlesText.titleBeginNow}</Text>
      <TextInputCustom textInputType={"searchBar"} placeholderText={TitlesText.titleWriteDirection} />
      <Text style={styles.textBold}>{TitlesText.titleAnounceBussiness}</Text>
      <CustomButton
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.YELLOW}
        borderColorBtn={ConfigBtnCustom.COLOR.YELLOW}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.SMALL_WITH_ICON}
        marginTop={30}
        title={'Inicia Sesión'}
        disabled={false}
      />
      <CustomButton
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.GREEN}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={ConfigBtnCustom.WIDTH.MEDIUM}
        title={'Registrate'}
        marginTop={20}
        disabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  triboLogo: {
    marginTop: 115,
    marginBottom: 25,
    alignSelf: 'center',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 25,
  },
 });

export default WelcomeScreen;
