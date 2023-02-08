import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from '@react-navigation/native';

export const SignInScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link to={{ screen: 'Register' }}>
        <Ionicons name="arrow-back" color="black" size={32} />
      </Link>
    </View>
  );
}