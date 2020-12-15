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

const mainScreen = () => {
  const MapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

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
