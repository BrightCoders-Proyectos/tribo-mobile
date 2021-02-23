import React, {useState, useEffect} from 'react';
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
import ModalInfoStore from '../components/modals/ModalInfoStore';
import Colors from '../src/Colors';

const CustomCallot = (props) => {
  const {txtColor,textDescription} = props;
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          width: 150,
          height: 110,
          flexDirection: 'row',
          borderRadius: 10,
          padding: 6,
        }}>
        <Text>
          <Image source={props.image} style={{width: 45, height: 60}} />
        </Text>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 5,
            alignItems: 'center',
          }}>
          <Text>{textDescription}</Text>
          <Text
            style={{
              color: txtColor,
            }}>
            + info <Text style={[{fontSize: 20}]}>{`-->`}</Text>{' '}
          </Text>
        </View>
      </View>
      <View style={style.arrowBorder}></View>
      <View style={style.arrow}></View>
    </View>
  );
};

const MainScreen = () => {
  const [markerSelection, setMarkerSelection] = useState('');
  const [details,setDetails] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [storesData, setStoresData] = useState([]);
  const regionMap = {
    latitude: 19.256127,
    longitude: -103.713536,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  };

  useEffect(() => {
    fetch('https://bc-tribo-web-staging.herokuapp.com/api/v1/market_places')
      .then((response) => response.json())
      .then((response) => {
        setStoresData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  const dataHandler = (dl,data) => {
    setMarkerSelection(dl);
    setDetails(data);
  }

  return (
    <View sylte={{position: 'absolute', flexDirection: 'row'}}>
      <ModalInfoStore
        dataDetail={details}
        modalVisible={modalVisible}
        close={() => setModalVisible(!modalVisible)}
      />
      <View style={{zIndex: 0, flexDirection: 'column'}}>
        <MapView
          style={{width: '100%', height: '100%'}}
          region={regionMap}
          customMapStyle={MapStyle}>
          {storesData.map(data => (
            <Marker
              key={data.id}
              style={style.imagenServices}
              coordinate={{
                latitude: data.latitud,
                longitude: data.longitud,
              }}
              image={
                data.business_line === 'Services'
                  ? marker_service
                  : data.business_line === 'Food'
                  ? marker_food
                  : marker_store
              }
              onPress={() => dataHandler(data.business_line,data)}>
              <Callout tooltip onPress={() => setModalVisible(true)}>
                <CustomCallot
                  image={
                    data.business_line === 'Services'
                      ? marker_service
                      : data.business_line === 'Food'
                      ? marker_food
                      : marker_store
                  }
                  txtColor={
                    data.business_line === 'Services'
                  ? Colors.OrangeService
                  : data.business_line === 'Food'
                  ? Colors.YellowFood
                  : Colors.BlueStore
                  }
                  textDescription={data.business_name}
                />
              </Callout>
            </Marker>
          ))}
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
          name={'Food'}
        />
        <IconNav
          image={store}
          text={string.product}
          markerSelection={markerSelection}
          name={'Store'}
        />
        <IconNav
          image={service}
          text={string.service}
          markerSelection={markerSelection}
          name={'Service'}
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
    //marginTop: 10,
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
