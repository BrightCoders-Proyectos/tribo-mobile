import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import TitlesText from '../../src/TitlesText';
import {CustomButton, ConfigBtnCustom} from '../../components/CustomButton';
import TriboLogo from '../../assets/tribologo.png';
import TextInputCustom from '../../components/TextInputs';
import Colors from '../../src/Colors';
import Logo from '../../components/LogoTribo';

//textInputNull
function EditAccountScreen(props) {
  const {userAccount} = props;
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.triboLogo} source={TriboLogo} />
      </View>
      <Text style={styles.textBold}>{TitlesText.titleProfileEditAccount}</Text>
      <Text style={styles.textInput}>{TitlesText.titleProfileName}</Text>
      <TextInputCustom
        textInputType={'searchBar'}
        placeholderText={TitlesText.titleProfileName}
        value={userAccount?.name}
      />
      <Text style={styles.textInput}>{TitlesText.titleProfileEmail}</Text>
      <TextInputCustom
        textInputType={'searchBar'}
        placeholderText={TitlesText.titleProfileEmail}
        value={userAccount?.email}
      />
      {error && (
        <Text style={styles.textError}>
          {TitlesText.titleProfileEmaildIncorrect}
        </Text>
      )}
      <Text style={styles.textChangePassword}>
        {TitlesText.titleProfileChangePassword}
      </Text>
      <View style={styles.containerButtons}>
        <CustomButton
          size={ConfigBtnCustom.SIZE.SMALL}
          titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
          bgBtn={ConfigBtnCustom.COLOR.DISABLED}
          borderColorBtn={ConfigBtnCustom.COLOR.DISABLED}
          titleColor={ConfigBtnCustom.COLOR.WHITE}
          widthBtn={'90%'}
          title={'Cancelar'}
          marginTop={20}
          disabled={false}
        />
        <CustomButton
          size={ConfigBtnCustom.SIZE.SMALL}
          titleSize={ConfigBtnCustom.TITLE_SIZE.SMALL}
          bgBtn={ConfigBtnCustom.COLOR.GREEN}
          borderColorBtn={ConfigBtnCustom.COLOR.GREEN}
          titleColor={ConfigBtnCustom.COLOR.WHITE}
          widthBtn={'90%'}
          title={'Guardar'}
          marginTop={20}
          disabled={false}
        />
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
    fontSize: 30,
    marginTop: 25,
    marginHorizontal: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 24,
    marginHorizontal: 40,
    fontWeight: 'bold',
  },
  textChangePassword: {
    color: '#037D94',
    fontSize: 23,
    marginHorizontal: 40,
    fontWeight: 'bold',
  },
  containerButtons: {
    flexDirection: 'row',
    height: 50,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
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

export default EditAccountScreen;
