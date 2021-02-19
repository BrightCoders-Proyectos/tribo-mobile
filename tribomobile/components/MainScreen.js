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
import MapView, {Marker, Callout} from 'react-native-maps';
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
import BtnHideShowMenu from '../components/BtnHideShowMenu';
import LittlePinInfo from './modals/LittlePinInfo';

const MainScreen = () => {
  const [markerSelection, setMarkerSelection] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const regionMap = {
    latitude: 19.256127,
    longitude: -103.713536,
    latitudeDelta: 0.04,
    longitudeDelta: 0.03,
  };

  return (
    <View sylte={{position: 'absolute', flexDirection: 'row'}}>
      {/* <LittlePinInfo modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
      <View style={{zIndex: 0, flexDirection: 'column'}}>
        <MapView
          style={{width: '100%', height: '100%'}}
          region={regionMap}
          customMapStyle={MapStyle}>
          <Marker
            style={style.imagenServices}
            coordinate={{
              latitude: 19.256205,
              longitude: -103.715864,
            }}
            // title={string.product}
            description="Prueba desde ramos arizpe"
            image={marker_store}
            onPress={() => setModalVisible(true)}>
            <Callout tooltip>
              <LittlePinInfo serviceType={''} />
            </Callout>
            {/* <Image source={marker_store} style={style.imagenServices} /> */}
          </Marker>
          <Marker
            style={style.imagenServices}
            coordinate={{
              latitude: 19.261146,
              longitude: -103.705776,
            }}
            title={string.food}
            image={marker_food}
            // onPress={() => setMarkerSelection('food')}
            onPress={() => setModalVisible(true)}>
            <Callout tooltip>
              <LittlePinInfo serviceType={'Food'} />
            </Callout>
            {/* <Image source={marker_food} style={style.imagenServices} /> */}
          </Marker>
          <Marker
            style={style.imagenServices}
            coordinate={{
              latitude: 19.273768,
              longitude: -103.715017,
            }}
            title={string.service}
            image={marker_service}
            // onPress={() => setMarkerSelection('service')}
            onPress={() => setModalVisible(true)}>
            <Callout tooltip>
              <LittlePinInfo serviceType={'Service'} />
            </Callout>
            {/* <Image source={marker_service} style={style.imagenServices} /> */}
          </Marker>
        </MapView>
      </View>
      <View elevation={7} style={[style.navDireccion, style.navBar]}>
        <BtnHideShowMenu />
        <TextInput style={style.textinput} placeholder="Escribe tu dirección" />
      </View>
      <View elevation={5} style={[style.navDown, style.iconsDown]}>
        <IconNav
          image={food}
          text={string.food}
          markerSelection={markerSelection}
          name={'food'}
        />
        <IconNav
          image={store}
          text={string.product}
          markerSelection={markerSelection}
          name={'store'}
        />
        <IconNav
          image={service}
          text={string.service}
          markerSelection={markerSelection}
          name={'service'}
        />
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
    height: '10%',
    marginLeft: Dimensions.get('window').width / 10,
    marginTop: Dimensions.get('window').height / 1.14,
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
    paddingLeft: 20,
    width: '80%',
    height: 40,
    marginLeft: 60,
    marginTop: 10,
    backgroundColor: '#E1F1F5',
    borderRadius: 15,
    textAlign: 'justify',
    fontSize: 13,
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
    width: 30,
    height: 40,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default MainScreen;
