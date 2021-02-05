import React, {useState} from 'react';
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
import marker_food from '../assets/marker_food.png';
import food from '../assets/food.png';
import marker_store from '../assets/marker_store.png';
import store from '../assets/store.png';
import marker_service from '../assets/marker_service.png';
import service from '../assets/services.png';
import MapStyle from './MapStyle';
import string from '../screensText/ContentText';
import IconNav from './IconNav';

const MainScreen = () => {
  const [markerSelection, setMarkerSelection] = useState('');

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
            title={string.product}
            onPress={() => setMarkerSelection('store')}>
            <Image source={marker_store} style={style.imagenServices} />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.261146,
              longitude: -103.705776,
            }}
            title={string.food}
            onPress={() => setMarkerSelection('food')}>
            <Image source={marker_food} style={style.imagenServices} />
          </Marker>
          <Marker
            coordinate={{
              latitude: 19.273768,
              longitude: -103.715017,
            }}
            title={string.service}
            onPress={() => setMarkerSelection('service')}>
            <Image source={marker_service} style={style.imagenServices} />
          </Marker>
        </MapView>
      </View>
      <View elevation={7} style={[style.navDireccion, style.navBar]}>
        <TouchableOpacity>
          <Image style={style.menuimage} source={menuImage} />
        </TouchableOpacity>
        <TextInput style={style.textinput} placeholder="Escribe tu dirección" />
      </View>
      <View elevation={5} style={[style.navDown, style.iconsDown]}>
        <IconNav image={food} text={string.food} markerSelection={markerSelection} name={'food'}/>
        <IconNav image={store} text={string.product} markerSelection={markerSelection} name={'store'}/>
        <IconNav image={service} text={string.service} markerSelection={markerSelection} name={'service'}/>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  navDireccion: {
    width: '100%',
    height: 60,
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
    paddingLeft: 20,
    width: '80%',
    height: 40,
    marginLeft: 60,
    marginTop: 10,
    backgroundColor: '#E1F1F5',
    borderRadius: 15,
    textAlign: 'justify',
    fontSize:13,
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
    marginTop: 15,
    marginLeft: 15,
  },
  imagenServices: {
    width: 15,
    height: 20,
  },
});

export default MainScreen;
