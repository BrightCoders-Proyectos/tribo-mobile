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
    color: '#828894',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default DescriptionText;
