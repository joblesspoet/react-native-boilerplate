import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import allActions from '../actions/';
import {useSelector} from "react-redux";
import { API_INTERCEPTOR } from '../config/connection';

function Home({navigation}) {
  const dispatch = useDispatch();
  const authObj = useSelector((state) => state.auth);
  useEffect(() => {
    const activate_headers = async () => {
      await API_INTERCEPTOR(authObj.access_token);
    };
    if (authObj.is_logged_in) {
      activate_headers();
    }
  }, []);

  useEffect(() => {
    alert(JSON.stringify(authObj))
  }, [authObj.access_token]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal !== null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
              {!authObj.is_logged_in && (
                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      allActions.authActions.loginRequestAction({
                        email: 'joble.sspoet@gmail.com',
                        password: 'secret1234',
                      }),
                    )
                  }
                  style={styles.Button}>
                  <Text>Login</Text>
                </TouchableOpacity>)
              }

              {authObj.is_logged_in && (
                <TouchableOpacity
                  onPress={() =>
                    dispatch(allActions.authActions.logOutAction())
                  }
                  style={styles.Button}>
                  <Text>Logout</Text>
                </TouchableOpacity>)
              }
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  Button: {
    color: 'red',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderColor: '#ff00',
  },
});

export default Home;
