import React, { useState } from "react";
import { View, Button, Text } from "react-native";

const SecondPage = () => {
  const [state, setState] = useState(0);
  return (
    <View>
      <Text>You button clicked {state} times.</Text>
      <Button title="aho" onPress={() => setState(state + 1)}><Text>Aho</Text></Button>
    </View>
  );
};

export default SecondPage;
