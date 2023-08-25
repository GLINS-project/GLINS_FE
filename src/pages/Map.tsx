import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';

import Complete from './Complete';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Map() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen
        name="Ing"
        component={Ing}
        options={{
          title: '지도',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Map;
