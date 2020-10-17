import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const style = StyleSheet.create({
  text: {
    fontSize: 80
  },
  style: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Main = ({ navigation }) => 
  (
    <View style={style.style}>
      <Text style={style.text}>Hello, SHINE</Text>
      <Button
        title="Go to next page"
        onPress={() => navigation.navigate("Second")}
      />
      <Text>This is practice app for ReactNative</Text>
    </View>
  );

export default Main;
