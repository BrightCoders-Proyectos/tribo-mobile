import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../components/screens/welcome/WelcomeScreen';
import LoadingScreen from '../components/screens/welcome/LoadingScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/Login';
import MainScreen from '../components/MainScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={() => <Text>SignUp</Text>}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Map"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
