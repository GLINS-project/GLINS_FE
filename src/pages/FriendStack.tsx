import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Pressable, Text, View, Button} from 'react-native';
import Friend from './Friend';
import Follower from './Follower';
import Following from './Following';

const Stack = createNativeStackNavigator();
function FriendStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Friend">
      <Stack.Screen
        name="Friend"
        component={Friend}
        options={{
          title: '팔로우',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}
      />
      <Stack.Screen
        name="following"
        component={Following}
        options={{
          title: '팔로잉',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}
      />
      <Stack.Screen
        name="follower"
        component={Follower}
        options={{
          title: '팔로잉',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default FriendStack;
