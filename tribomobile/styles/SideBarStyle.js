import {StyleSheet} from 'react-native';

const SideBarStyle = StyleSheet.create({
  textContainer: {
    marginLeft: 24, 
    height: 40,
    justifyContent: 'center'
  },  
    textContainer2: {
    marginLeft: 24, 
    height: 69
  },
  textBold: {
    marginLeft: 24,
    fontFamily: 'Rubik',
    fontSize:18, 
    color:'white',
    textAlignVertical: 'center'
    },
  textNormal: {
    marginLeft: 24,
    fontSize: 12,
    letterSpacing: .6,
    color:'white',
    textAlignVertical: 'center',
  }
});

export default SideBarStyle;
