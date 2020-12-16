import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import titlesText from '../../src/titlesText';
import Montain from '../../assets/mountains.png';
function WelcomeScreen() {
  return (
    <View style={{backgroundColor: '#DFDFDF', height: '100%'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 45,
          textAlign: 'center',
          marginTop: 30,
        }}>
        {titlesText.titleSplashGreeting}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 23,
          textAlign: 'center',
          marginTop: 25,
        }}>
        {titlesText.titleSplashWelcome}
      </Text>
      <Image
        style={{
          height: 150,
          width: 150,
          tintColor: 'black',
          alignSelf: 'center',
        }}
        source={Montain}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 23,
          textAlign: 'center',
          marginTop: -20,
        }}>
        LAMARKET.APP
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          textAlign: 'center',
          marginTop: 25,
        }}>
        {titlesText.titleStayHome}
      </Text>
      <Text
        style={{
          color: '#828894',
          textAlign: 'center',
          marginTop: 20,
          fontSize: 16,
          fontWeight: 'normal',
          marginHorizontal: 60,
        }}>
        {titlesText.descriptionOfShopsNearYou}
      </Text>
      <Text
        style={{
          color: '#828894',
          textAlign: 'center',
          marginTop: 20,
          fontSize: 16,
          fontWeight: '400',
          marginHorizontal: 50,
        }}>
        {titlesText.descriptionOfSendMessage}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#828282',
          marginTop: 30,
          marginHorizontal: 30,
        }}>
        {titlesText.titleRegisterWithPhone}
      </Text>
      <TextInput
        style={{ height: 60, borderColor: '#828894',borderRadius:10, borderWidth: 1.5, marginTop:10,marginHorizontal:30,paddingHorizontal:10}}
        placeholder={titlesText.inputDescription}
      />
    </View>
  );
}
const styles = StyleSheet.create({});

export default WelcomeScreen;
