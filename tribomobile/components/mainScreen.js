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
import MapView, {Marker} from 'react-native-maps';
import menuImage from '../assets/menuImage.png';
import food from '../assets/food.png';
import store from '../assets/store.png';
import user from '../assets/user1.png';
import MapStyle from './MapStyle';
import string from './constant';

const MainScreen = () => {
  function pressMenu() {
    console.log('Se presiono el menu');
  }

  const regionMap = {
    latitude: 19.256127,
    longitude: -103.713536,
    latitudeDelta: 0.08,
    longitudeDelta: 0.07,
  };

  return (
    <View sylte={{position: 'absolute', flexDirection: 'row'}}>
      <View style={{zIndex: 0}}>
        <MapView
          style={{width: '100%', height: '100%'}}
          region={regionMap}
          customMapStyle={MapStyle}>
          <Marker
            coordinate={{
              latitude: 19.256205,
              longitude: -103.715864,
            }}
            title={string.product}>
            <Image source={store} style={style.imagenServices} />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.261146,
              longitude: -103.705776,
            }}
            title={string.food}>
            <Image source={food} style={style.imagenServices} />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.273768,
              longitude: -103.715017,
            }}
            title={string.service}>
            <Image source={user} style={style.imagenServices} />
          </Marker>
        </MapView>
      </View>
      <View elevation={7} style={[style.navDireccion, style.navBar]}>
        <TouchableOpacity onPress={pressMenu}>
          <Image style={style.menuimage} source={menuImage} />
        </TouchableOpacity>
        <TextInput style={style.textinput} placeholder="Escribe tu dirección" />
      </View>
      <View elevation={5} style={[style.navDown, style.iconsDown]}>
        <Image source={food} style={style.imagenServices} />
        <Text style={style.textDown}>{string.food}</Text>
        <Image source={store} style={style.imagenServices} />
        <Text style={style.textDown}>{string.product}</Text>
        <Image source={user} style={style.imagenServices} />
        <Text style={style.textDown}>{string.service}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  navDireccion: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    zIndex: 2,
    position: 'absolute',
  },
  navDown: {
    width: '80%',
    height: '8%',
    marginLeft: Dimensions.get('window').width / 10,
    marginTop: Dimensions.get('window').height / 1.099,
    backgroundColor: 'white',
    zIndex: 2,
    position: 'absolute',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    marginTop: 10,
  },
  iconsDown: {
    padding: 10,
  },
  textDown: {
    fontSize: 10,
  },
  textinput: {
    position: 'absolute',
    padding: 4,
    width: '80%',
    height: 60,
    marginLeft: 60,
    marginTop: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 7,
    textAlign: 'justify',
    padding: 20,
  },
  borderShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  menuimage: {
    width: 30,
    height: 30,
    tintColor: '#868686',
    marginTop: 25,
    marginLeft: 20,
  },
  imagenServices: {
    width: 30,
    height: 30,
  },
});

export default MainScreen;
