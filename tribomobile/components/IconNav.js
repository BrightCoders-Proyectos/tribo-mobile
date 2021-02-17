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

const IconNav = ({image, text, markerSelection, name}) => {

  const changeIconNav = () => {
    if (markerSelection === 'service' && name === 'service'){
      return (<Image source={image} style={{tintColor: '#FFCF87'}} />)
    }else if(markerSelection === 'store' && name === 'store'){
      return (<Image source={image} style={{tintColor: '#29335C'}} />)
    }else if(markerSelection === 'food' && name === 'food'){
      return (<Image source={image} style={{tintColor: '#EFD13B'}} />)
    }
    return(<Image source={image} style={style.imagenServices} />)
  }

  return (
    <View style={{flexDirection: 'column', padding: 30}}>
      {changeIconNav()}
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
    width: 25,
    height: 20,
    tintColor: 'grey',
  },
  imagenServicesFood: {
    width: 20,
    height: 22,
    tintColor: 'grey',
  },
});

export default IconNav;
