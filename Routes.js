import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/components/Home';
import DetailPage from './src/components/DetailPage';
import Login from './src/components/auth/Login';
import Register from './src/components/auth/Register';

const Stack = createStackNavigator();

function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          key="detail"
          component={DetailPage}
          name="DetailPage"
          options={{title: 'Detail Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
