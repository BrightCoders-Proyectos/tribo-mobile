import {StyleSheet} from 'react-native';

const SideBarStyle = StyleSheet.create({
  textContainer: {
    marginLeft: 24, 
    marginBottom: 24,
    flexDirection: 'row',   
    backgroundColor: 'red',
    height: 40,  
    alignItems: 'center'
  },
  textBold: {
    marginBottom: 0,
    marginLeft: 24,
    fontFamily: 'Rubik',
    fontSize:18, 
    color:'white',
    },
  textNormal: {
    marginBottom: 0,
    marginLeft: 24,
    fontSize: 12,
    letterSpacing: .6,
    color:'white',
  }
});

export default SideBarStyle;
