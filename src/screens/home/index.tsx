import * as React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from './components/chart';

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <LineChart />
    </View>
  );
};
