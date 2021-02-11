import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from '../components/Titles';
import TitlesText from '../src/TitlesText';
import contentText from '../screensText/ContentText';
import Colors from '../src/Colors';

const ReadmeScreens = (props) => {
  const {state, type} = props;
  const [readmeScreenVisible, setReadmeScreenVisible] = useState(state);

  switch (type) {
    case 'recomendation':
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={readmeScreenVisible}
          onRequestClose={() => {
            setReadmeScreenVisible(!readmeScreenVisible);
          }}>
          <View style={styles.container}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setReadmeScreenVisible(!readmeScreenVisible)}>
              <Image
                style={styles.closeButton}
                source={require('../assets/close-strong.png')}
              />
            </Pressable>
            <Title titleType="screenTitle" title={TitlesText.titleStayHome} />
            <Title
              titleType="formTitle"
              title={TitlesText.titleRecomendations}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.paragraph}>
                {ContentText.textReadmeScreenRecomendacionesP1}
              </Text>
              <Text style={styles.paragraph}>
                {ContentText.textReadmeScreenRecomendacionesP2}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      );
      break;
    case 'terms':
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={state}
          onRequestClose={() => {
            setReadmeScreenVisible(!readmeScreenVisible);
          }}>
          <View style={styles.container}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setReadmeScreenVisible(!readmeScreenVisible)}>
              <Image
                style={styles.closeButton}
                source={require('../assets/close-strong.png')}
              />
            </Pressable>
            <Title
              titleType="screenTitle"
              title={TitlesText.titleSideNavTerms}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenTerminosP1}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenTerminosP2}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenTerminosP3}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      );
      break;
    case 'policy':
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={readmeScreenVisible}
          onRequestClose={() => {
            setReadmeScreenVisible(!readmeScreenVisible);
          }}>
          <View style={styles.container}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setReadmeScreenVisible(!readmeScreenVisible)}>
              <Image
                style={styles.closeButton}
                source={require('../assets/close-strong.png')}
              />
            </Pressable>
            <Title
              titleType="screenTitle"
              title={TitlesText.titleSideNavPolicy}
            />
            <ScrollView>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenPoliticaP1}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenPoliticaP2}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenPoliticaP3}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenPoliticaP4}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenPoliticaP5}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      );
      break;
    default:
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={readmeScreenVisible}
          onRequestClose={() => {
            setReadmeScreenVisible(!readmeScreenVisible);
          }}>
          <View style={styles.container}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => setReadmeScreenVisible(!readmeScreenVisible)}>
              <Image
                style={styles.closeButton}
                source={require('../assets/close-strong.png')}
              />
            </Pressable>
            <Title titleType="screenTitle" title={TitlesText.titleSideNavFAQ} />
            <ScrollView>
              <Title titleType="" title={TitlesText.titleFAQFunciona} />
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP1}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP2}
              </Text>
              <Title titleType="" title={TitlesText.titleFAQFunciona} />
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP2}
              </Text>
              <Title titleType="" title={TitlesText.titleFAQFunciona} />
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP1}
              </Text>
              <Title titleType="" title={TitlesText.titleFAQFunciona} />
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP1}
              </Text>
              <Text style={styles.paragraph}>
                {contentText.textReadmeScreenFAQP2}
              </Text>
            </ScrollView>
          </View>
        </Modal>
      );
      break;
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 20,
    height: '95%',
    margin: 20,
    paddingHorizontal: 15,
    paddingBottom: 1,
    width: '90%',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    height: 30,
    marginBottom: 10,
    top: 10,
    width: 30,
  },
  closeButton: {
    height: '100%',
    width: '100%',
  },
  paragraph: {
    color: Colors.BlueDark,
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ReadmeScreens;
