import {StyleSheet} from 'react-native';

const SideBarStyle = StyleSheet.create({
  textContainer: {
    marginLeft: 24, 
    marginBottom: 18,
    marginTop: 18
  },
  textBold: {
    marginBottom: 0,
    marginLeft: 24,
    fontFamily: 'Rubik',
    fontSize:18, 
    color:'white',   
    textAlignVertical: 'center'
    },
  textNormal: {
    marginBottom: 0,
    marginLeft: 24,
    fontSize: 12,
    letterSpacing: .6,
    color:'white',
    textAlignVertical: 'center'
  }
});

export default SideBarStyle;
