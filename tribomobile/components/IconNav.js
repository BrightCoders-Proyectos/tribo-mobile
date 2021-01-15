import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const IconNav = (props) => {
  const {image, text} = props;
  return (
    <View style={{flexDirection: 'row', padding: 15}}>
      <Image source={image} style={style.imagenServices} />
      <Text style={style.textDown}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textDown: {
    fontSize: 10,
    marginTop: 6,
  },
  imagenServices: {
    width: 30,
    height: 30,
  },
});


export default IconNav;
