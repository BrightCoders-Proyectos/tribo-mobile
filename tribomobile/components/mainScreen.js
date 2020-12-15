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
import MapStyle from './MapStyle'

const mainScreen = () => {

  function pressMenu() {
    console.log('Se presiono el menu');
  }

  return (
    <View sylte={{position: 'absolute', flexDirection: 'row'}}>
      <View style={{zIndex: 0,}}>
        <MapView
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: 19.256127,
            longitude: -103.713536,
            latitudeDelta: 0.08,
            longitudeDelta: 0.07,
          }}
          customMapStyle={MapStyle}>
          <Marker
            coordinate={{
              latitude: 19.256205,
              longitude: -103.715864,
            }}
            title={'Marcador agregado'}>
            <Image
              source={store}
              style={{width: 30, height: 30}}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.261146,
              longitude: -103.705776,
            }}
            title={'Marcador agregado'}>
            <Image
              source={food}
              style={{width: 30, height: 30}}
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.273768,
              longitude: -103.715017,
            }}
            title={'Marcador agregado'}>
            <Image
              source={user}
              style={{width: 30, height: 30}}
            />
          </Marker>
        </MapView>
      </View>
      <View style={[style.navDireccion, style.navBar]}>
        <TouchableOpacity style={{position: 'absolute'}} onPress={pressMenu}>
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: '#868686',
              marginTop: 20,
              marginLeft: 20,
            }}
            source={menuImage}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            position:'absolute',
            width: '80%',
            height: 60,
            marginLeft: 60,
            marginTop: 10,
            backgroundColor: '#F5F5F5',
            borderRadius: 7,
          }}
          placeholder="Escribe tu dirección"
        />
      </View>
      <View style={[style.navDown, style.iconsDown]}>
        <Image
          source={food}
          style={{width: 30, height: 30}}/>
        <Text style={style.textDown}>Comida</Text>
        <Image
          source={store}
          style={{width: 30, height: 30}}/>
        <Text style={style.textDown}>Productos</Text>
        <Image
          source={user}
          style={{width: 30, height: 30}}/>
        <Text style={style.textDown}>Servicios</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  navDireccion: {
    width: '100%',
    height: 90,
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
    alignItems:'center',
    justifyContent:'center',
  },
  navBar: {
    marginTop: 10,
  },
  iconsDown: {
    marginRight:100
  },
  textDown:{
    fontSize:10
  }
});

export default mainScreen;
