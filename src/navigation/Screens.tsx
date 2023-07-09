import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useData, useTheme} from '../hooks/';
import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Login from '../screens/Login';
import Assistant from '../screens/Assistant';
import ChatScreen from '../screens/ChatScreen';
import Weather from '../screens/Weather';

const Stack = createStackNavigator();

export default () => {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {handleUser, isDark} = useData();
  const themeColor = isDark ? colors.dark : colors.background;
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: t('navigation.home'),
          headerStyle: {
            backgroundColor: themeColor,
          },
          headerTintColor: isDark ? colors.text : colors.textInverse,
        }}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          title: t('navigation.articles'),
          headerStyle: {
            backgroundColor: themeColor,
          },
          headerTitleStyle: {
            alignItems: 'flex-end',
            color: '#fff',
          },
          headerTintColor: isDark ? colors.text : colors.textInverse,
        }}
      />

      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Assistant"
        component={Assistant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
