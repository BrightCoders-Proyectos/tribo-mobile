import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DescriptionText(props) {
  const {marginHorizontal, description} = props;
  return (
    <View>
      <Text style={{...styles.textDescription, marginHorizontal}}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textDescription: {
    color: '#262728',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
  },
});

export default DescriptionText;
