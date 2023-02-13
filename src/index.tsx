import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PortfolioScreen, SignInScreen, SignUpScreen, TradeScreen } from './screens';
import { Feather } from '@expo/vector-icons';
import { normalize } from './utils/normalize';
import { TouchableOpacity } from 'react-native';
import { Text } from './components/Text';

export const Main = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const tabBarActiveTintColor = '#770FDF';
  const tabBarInactiveTintColor = '#000000';

  const HomeTabs = () => (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Text color="#000000" fontSize={14} fontWeight={600}>
              Account: $1,457.23 <Feather name="chevron-down" size={normalize(16)} color="black" />
            </Text>
          ),
          headerShadowVisible: false,
          headerLeft: () => (
            <Feather name="user" size={normalize(24)} color="black" style={{ marginLeft: normalize(18) }} />
          ),
          headerRight: () => (
            <Feather name="bell" size={normalize(24)} color="black" style={{ marginRight: normalize(18) }} />
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarIcon: ({ color }) => <Feather name="home" size={normalize(20)} color={color} />
        }}
      />
      <Tab.Screen
        name="trade"
        component={TradeScreen}
        options={({ navigation }) => ({
          title: 'Wind Fund',
          headerTitle: () => (
            <>
              <Text color="#000000" fontSize={17} fontWeight={600}>
                Wind Fund
              </Text>
              <Text algin="center" fontSize={14}>
                WFND
              </Text>
            </>
          ),
          headerLeft: () => (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(24)} color="black" style={{ marginLeft: normalize(18) }} />
            </TouchableOpacity>
          ),
          tabBarLabel: 'Trade',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarIcon: ({ color }) => <Feather name="trending-up" size={normalize(20)} color={color} />
        })}
      />
      <Tab.Screen
        name="portfolio"
        component={PortfolioScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: 'Portfolio',
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: 'Sora-500'
          },
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarIcon: ({ color }) => <Feather name="pie-chart" size={normalize(20)} color={color} />
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="main"
          component={HomeTabs}
          options={{
            headerShown: false,
            headerShadowVisible: false
          }}
        />
        <Stack.Screen
          name="login"
          component={SignInScreen}
          options={{ headerShown: false, headerShadowVisible: false }}
        />
        <Stack.Screen
          name="register"
          component={SignUpScreen}
          options={({ navigation }) => ({
            title: '',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={normalize(24)} color="black" />
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
