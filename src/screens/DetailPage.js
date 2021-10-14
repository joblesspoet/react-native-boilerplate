/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function DetailPage() {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: '#ff00ff',
        }}>
        <Text>Detail Page</Text>
      </View>
    </SafeAreaView>
  );
}

export default DetailPage;
