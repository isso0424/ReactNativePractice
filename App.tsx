import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Main from "./src/main";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  main: {
    backgroundColor: "#aaa"
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}><ScrollView><Main/><Text>Aho</Text></ScrollView></View>
      
      <View style={styles.footer}><Text>Footer</Text></View>
    </View>
  );
}
