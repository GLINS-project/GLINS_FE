import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Pressable, Text, View, Button} from 'react-native';
import WishList from './WishList';
import Friend from './FriendStack';
import Home from './Home';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UserInfo from './UserInfo';
import Alarm from './Alarm';
import LocationDetail from './LocationDetail';
import ProfileChange from './ProfileChange';
import ReviewManage from './ReviewManage';
import SignIn from './SignIn';
import ManageUseinfo from './ManageUseinfo';
const Stack = createNativeStackNavigator();
function SettingStack() {
  const navigation = useNavigation();
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Stack.Navigator initialRouteName="UserInfo">
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '설정',
          headerTitleAlign: 'center',

          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerBackVisible: true,

          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('UserInfo' as never);
              }}>
              <EvilIcons name="user" color="white" size={50} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Glins',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LocationDetail"
        component={LocationDetail}
        options={{
          title: '더 포스짐 ',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ProfileChange"
        component={ProfileChange}
        options={{
          title: '프로필 변경',
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
        name="ReviewManage"
        component={ReviewManage}
        options={{
          title: '리뷰 관리',
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
        name="ManageUseinfo"
        component={ManageUseinfo}
        options={{
          title: '프로필 관리',
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
        name="Alarm"
        component={Alarm}
        options={{
          title: '알림 설정',
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
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('LocationDetail' as never);
              }}>
              <EvilIcons name="user" color="white" size={50} />
            </Pressable>
          ),
        }}
      />
      {/* <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          title: '위시리스트',
          headerShown: true,

          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('UserInfo' as never);
              }}>
              <EvilIcons name="user" color="black" size={50} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Friend"
        component={LocationDetail}
        options={{
          title: '카타코토 카페',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('LocationDetail' as never);
              }}>
              <EvilIcons name="user" color="white" size={50} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '내 정보',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('UserInfo' as never);
              }}>
              <EvilIcons name="user" color="white" size={50} />
            </Pressable>
          ),
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default SettingStack;
