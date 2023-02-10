import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomeScreen, PortfolioScreen, SignInScreen, SignUpScreen, TradeScreen } from './screens';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { normalize } from './utils/normalize';

export const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeTabs = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({ color }) => <Feather name="home" size={normalize(20)} color={color} />
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarLabel: 'Trade',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({ color }) => <Feather name="trending-up" size={normalize(20)} color={color} />
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000000',
          tabBarIcon: ({ color }) => <Feather name="pie-chart" size={normalize(20)} color={color} />
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{
            title: '',
            headerShadowVisible: false,
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
