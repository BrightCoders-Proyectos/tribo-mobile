import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import WhatsappIcon from '../assets/whatsapp.png';

const ConfigBtnCustom = {
  COLOR: {
    YELLOW: '#FFCF87',
    GREEN: '#037D94',
    WHITE: '#FFFFFF',
    DISABLED: '#9CA3AF',
  },
  SIZE: {
    SMALL: 50,
    MEDIUM: 55,
    LARGE: 60,
  },
  TITLE_SIZE: {
    SMALL: 20,
    MEDIUM: 25,
    LARGE: 30,
  },
  WIDTH: {
    SMALL: '30%',
    SMALL_WITH_ICON: '40%',
    MEDIUM: '40%',
    MEDIUM_WITH_ICON: '45%',
    LARGE: '45%',
    LARGE_WITH_ICON: '48%',
  },
  ICON: {
    WHATSAPP: WhatsappIcon,
  },
};

function CustomButton(props) {
  const {
    icon,
    size,
    titleSize,
    bgBtn,
    borderColorBtn,
    titleColor,
    title,
    widthBtn,
    disabled,
    action,
    marginTop,
  } = props;
  const iconSize = titleSize;

  let colorDisabled = ConfigBtnCustom.COLOR.DISABLED;
  let changeTitleColor = titleColor;
  let colorIcon = titleColor;
  if (disabled && bgBtn == ConfigBtnCustom.COLOR.WHITE) {
    colorDisabled = ConfigBtnCustom.COLOR.WHITE;
    changeTitleColor = ConfigBtnCustom.COLOR.DISABLED;
    colorIcon = ConfigBtnCustom.COLOR.DISABLED;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: disabled ? colorDisabled : bgBtn,
            borderColor: disabled
              ? ConfigBtnCustom.COLOR.DISABLED
              : borderColorBtn,
            width: widthBtn,
            height: size,
            marginTop: marginTop,
          },
        ]}
        disabled={disabled}
        onPress={() => action && action()}>
        {icon && (
          <Image
            style={{width: iconSize, height: iconSize, tintColor: colorIcon}}
            source={icon}
          />
        )}
        <Text
          style={[
            styles.titleBtn,
            {
              fontSize: titleSize,
              color: changeTitleColor,
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 40,
    borderWidth: 2,
  },
  titleBtn: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export {CustomButton, ConfigBtnCustom};
