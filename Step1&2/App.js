import React from 'react';
import { Text, View } from 'react-native';

function HelloWorldApp() {
  return (
    <View
      style={{
        flex: 10,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello World!</Text>
    </View>
  )
}
export default HelloWorldApp;