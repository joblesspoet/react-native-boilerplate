import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailPage from './src/screens/DetailPage';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Welcome from './src/screens/Welcome';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

function Routes(props) {
  const authObj = useDispatch((state) => state.auth);

  return (
    <NavigationContainer>
      {!authObj.is_logged_in ? <PublicRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

const PublicRoutes = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      options={{
        headerShown: false,
      }}>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen key="detail" component={DetailPage} name="DetailPage" />
    </Stack.Navigator>
  );
};
const AuthRoutes = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      options={{
        headerShown: false,
      }}>
      <Stack.Screen component={Welcome} name="Welcome" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen key="detail" component={DetailPage} name="DetailPage" />
    </Stack.Navigator>
  );
};

export default Routes;
