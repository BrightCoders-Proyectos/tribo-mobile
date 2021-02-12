import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Tribologo from '../assets/tribologo.png';
import colors from '../src/Colors';

const LogoTribo = (props) => {
  const {height, width, line, sideNav} = props;
  return (
    <View style={styles.logoView}>
      <Image
        resizeMode="contain"
        style={[
          styles.sideNavicon,
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
  regularicon: {
    tintColor: colors.BlueP,
  },
  sideNavicon: {
    tintColor: colors.White,
  },
});

export default LogoTribo;
