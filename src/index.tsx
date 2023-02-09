import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeScreen, PortfolioScreen, SignInScreen, SignUpScreen, TradeScreen } from './screens';

export const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trade" component={TradeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="Login" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{
            title: '',
            headerLeft: () => (
              <Link to={{ screen: 'Login' }}>
                <Ionicons name="arrow-back" size={32} />
              </Link>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
