import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sum } from 'react-native-sum';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Nitro Modules Template</Text>
      <Text>Sum: {Sum.add(1, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
