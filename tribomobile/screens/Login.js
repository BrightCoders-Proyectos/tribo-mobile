import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import TitlesText from '../src/TitlesText';
import {CustomButton, ConfigBtnCustom} from '../components/CustomButton';
import TriboLogo from '../assets/tribologo.png';
import TextInputCustom from '../components/TextInputs';
import Colors from '../src/Colors';

//textInputNull
function WelcomeScreen() {
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.triboLogo} source={TriboLogo} />
      </View>
      <Text style={styles.textBold}>{TitlesText.titleLoginScreen}</Text>
      <TextInputCustom
        textInputType={'searchBar'}
        placeholderText={TitlesText.titleEmail}
      />
      <TextInputCustom
        textInputType={'searchBar'}
        placeholderText={TitlesText.titlePassword}
      />
      {error &&
        <Text style={styles.textError}>{TitlesText.titleLoginError}</Text> 
      }
      <CustomButton
        size={ConfigBtnCustom.SIZE.SMALL}
        titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
        bgBtn={ConfigBtnCustom.COLOR.GREEN}
        borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
        titleColor={ConfigBtnCustom.COLOR.WHITE}
        widthBtn={'70%'}
        title={'Inicia Sesión'}
        marginTop={20}
        disabled={false}
      />
      <View style={styles.containerRegisterHere}>
        <Text style={styles.textNotAccount}>{TitlesText.titleNotAccount}</Text>
        <TouchableOpacity>
          <Text style={styles.textRegisterHere}>
            {TitlesText.titleRegisteHere}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  triboLogo: {
    marginTop: 70,
    marginBottom: 35,
    alignSelf: 'center',
    width: 195,
    height: 65,
  },
  textBold: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 25,
    marginHorizontal: 15,
    marginBottom: 35,
  },
  containerRegisterHere: {
    flexDirection: 'row',
    height: 50,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#E5E5E5',
    marginTop: 30,
    marginHorizontal: 50,
  },
  textNotAccount: {
    fontSize: 16,
  },
  textRegisterHere: {
    fontSize: 16,
    color: '#037D94',
    fontWeight: 'bold',
  },
  containerLogo: {
    borderBottomWidth: 3,
    borderBottomColor: '#E5E5E5',
    width: '90%',
    marginHorizontal: 25,
  },
  textError: {
    color: Colors.Red,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default WelcomeScreen;
