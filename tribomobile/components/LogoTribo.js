import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Tribologo from '../assets/tribologo.png';
import colors from '../src/Colors';

const LogoTribo = (props) => {
  const {height, width, line, sideNav} = props;
  return (
    <View style={[styles.logoView,{
      width: width,
      height: height,
    }]}>
      <Image
        resizeMode="contain"
        style={[
          sideNav != true ? styles.regularicon : styles.sideNavicon,
          {
            height: '57%',
          },
        ]}
        source={Tribologo}
      />
      {line == true && (
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#9CA3AF',
            width: '80%',
            paddingTop:32
          }}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    //height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  regularicon: {
    tintColor: colors.BlueP,
  },
  sideNavicon: {
    tintColor: colors.White,
  },
});

export default LogoTribo;
