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
    if (markerSelection === 'Service' && name === 'Service') {
      return <Image source={image} style={{tintColor: '#FFCF87'}} />;
    } else if (markerSelection === 'Store' && name === 'Store') {
      return <Image source={image} style={{tintColor: '#29335C'}} />;
    } else if (markerSelection === 'Food' && name === 'Food') {
      return <Image source={image} style={{tintColor: '#EFD13B'}} />;
    }
    return <Image source={image} style={style.imagenServices} />;
  };

  return (
    <View style={style.iconContainer}>
      {changeIconNav()}
      <Text style={style.textDown}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    flexDirection: 'column',
    padding: 30,
    alignContent: 'center',
    alignItems:'center'
  },
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
