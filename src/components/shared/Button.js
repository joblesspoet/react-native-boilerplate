import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {Theme} from '../../core/Theme';

const Button = ({mode, style, ...props}) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && {
        backgroundColor: Theme.colors.surface,
        borderColor: Theme.colors.text,
      },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;
