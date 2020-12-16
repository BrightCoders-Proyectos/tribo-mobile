import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import contentText from '../screensText/contentText';

function SplashScreen () {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 2,
        delay: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden = {true} />
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.logoSmall,{opacity: fadeAnim}]}
          source={require('../assets/mountain.png')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Animated.Text style={[styles.logoText]}>{contentText.textoSplashScreenL}</Animated.Text>
            <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
              {contentText.textoSplashScreenLaMarket}
            </Animated.Text>
        </Animated.View>
        <Animated.Image
          style={[styles.logoBig,{ opacity: fadeAnim}]}
          source={require('../assets/mountainbig.png')}
        />
      </View>
      <View style={{justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
        <Animated.Text style={[styles.titleEnd, {opacity: fadeAnim} ]}>{contentText.textoSplashScreenMade}</Animated.Text>
        <Animated.Text style={[styles.titleEnd, {opacity: fadeAnim} ]}>{contentText.textoSplashScreenWe}</Animated.Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1EFEF',
  },
  contentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSmall:{
    width: 70, 
    height: 35, 
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 20,
    marginTop: 5,
    color: '#4E4D4D',
    fontWeight: '700',
  },
  logoBig:{
    marginTop: 70,
    width: Dimensions.get('window').width / 1, 
    height: Dimensions.get('window').height/3.5, 
  },
  titleEnd:{
    marginTop: 10,
    color: '#928D8D',
    fontSize: 15,
  }
});

export default SplashScreen;

