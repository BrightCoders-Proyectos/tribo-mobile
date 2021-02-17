import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../src/Colors';

const Titles = (props) => {
  const {titleType, title, txtAlign} = props;
  if (titleType === 'screenTitle') {
    return <Text style={styles.screenTitle}>{title}</Text>;
  } else if (titleType === 'formTitle') {
    return <Text style={styles.formTitle}>{title}</Text>;
  } else {
    return <Text style={[styles.inputTitle,{textAlign:txtAlign}]}>{title}</Text>;
  }
};

const styles = StyleSheet.create({
  screenTitle: {
    color: Colors.BlueDark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  formTitle: {
    color: Colors.BlueDark,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputTitle: {
    color: Colors.BlueDark,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
});

export default Titles;
