import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../src/Colors';

const TextInputs = (props) => {
  const {textInputType, placeholderText, value} = props;

  const textInputStyling = (textInputType) => {
    let styleProperties = [];
    switch (textInputType) {
      case 'searchBar':
        styleProperties = [styles.container, styles.searchBar];
        break;
      case 'textInputNull':
        styleProperties = [
          styles.container,
          styles.inputTextForm,
          styles.textInputError,
        ];
        break;
      case 'textInputDisabled':
        styleProperties = [
          styles.container,
          styles.inputTextForm,
          styles.textInputDisabled,
        ];
        break;
      default:
        styleProperties = [styles.container, styles.inputTextForm];
        break;
    }

    return styleProperties;
  };

  return (
    <TextInput
      style={textInputStyling(textInputType)}
      placeholder={placeholderText}
      placeholderTextColor={
        textInputType === 'textInputNull' ? Colors.Red : Colors.GrayDark
      }
      defaultValue={value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: Colors.BlueSky,
    color: Colors.BlueDark,
    margin: 10,
    width: '90%',
  },
  searchBar: {
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
    width: '80%',
  },
  inputTextForm: {
    justifyContent: 'center',
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInputError: {
    borderWidth: 1,
    borderColor: Colors.Red,
  },
  textInputDisabled: {
    backgroundColor: Colors.SpaceGray,
  },
  active: {
    borderColor: Colors.BlueDark,
    borderWidth: 1,
  },
});

export default TextInputs;
