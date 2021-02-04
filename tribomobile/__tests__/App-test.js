/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';
import colors from '../src/Colors';
import renderer from 'react-test-renderer';
import {
  ModalDeleteStore,
  ModalDeleteStoreTexts,
} from '../components/modals/ModalDeleteStore';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{width: 50, height: 50, backgroundColor: colors.GreenContent}}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors.mediumvioletred,
        }}
      />
      <View style={{width: 150, height: 150, backgroundColor: colors.blueP}} />
    </View>
  );
};

it('renders correctly modal to delete a store', () => {
  const fields = {
    title: ModalDeleteStoreTexts.title.business,
    description: 'Estas seguro de eliminar la "fonda de doña luisa?"',
  };
  const tree = renderer.create(<ModalDeleteStore {...fields} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly modal to delete an account', () => {
  const fields = {
    title: ModalDeleteStoreTexts.title.account,
    description: ModalDeleteStoreTexts.description.account,
  };
  const tree = renderer.create(<ModalDeleteStore {...fields} />).toJSON();
  expect(tree).toMatchSnapshot();
});
