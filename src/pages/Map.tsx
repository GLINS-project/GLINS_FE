import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Orders from './Orders';
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
      <Stack.Screen
        name="Complete" ////complete 가 stack인 이유는 지도 위에 완료된것을 쌓아가면서 처리하기 위해-> wishlist 표시하면될듯
        component={Orders}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Map;
