import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Tribologo from '../assets/tribologo.png';
import colors from '../src/Colors'

const LogoTribo = (props) => {
  const {height, width, line} = props;
  return (
    <View style={styles.logoView}>
      <Image
        resizeMode="contain"
        style={[
          styles.icon,
          {
            width: width,
            height: height,
          },
        ]}
        source={Tribologo}
      />
      {line == true && (
        <View
          style={{
            marginTop: 30,
            borderBottomWidth: 1,
            borderColor: '#9CA3AF',
            width: '80%',
          }}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    tintColor:colors.BlueP
  },
});

export default LogoTribo;
