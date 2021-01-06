import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Theme} from '../../core/Theme';

const Header = (props) => <Text style={styles.header} {...props} />;

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: Theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});

export default Header;
