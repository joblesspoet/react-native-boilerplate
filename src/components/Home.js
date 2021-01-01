import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {connect} from 'react-redux';
import allActions from '../actions/index';
import Background from './shared/Background';
import Header from './shared/Header';
import Button from './shared/Button';

function Home(props) {
  const {is_logged_in} = props.auth;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Background>
        <Header>Welcome</Header>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('Login')}>
          Login
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('Register')}>
          Register
        </Button>
      </Background>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {...allActions.authActions})(Home);
