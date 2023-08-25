import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Pressable, Text, View, Button} from 'react-native';
import WishList from './WishList';
import Friend from './FriendStack';
import Home from './Home';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UserInfo from './UserInfo';

import LocationDetail from './LocationDetail';
import ProfileChange from './ProfileChange';
import SignIn from './SignIn';
import KakaoLogin from './KakaoLogin';
import GoogleLogin from './GoogleLogin';

const Stack = createNativeStackNavigator();
function StackContainer() {
  const navigation = useNavigation();
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    /*<View>
      <Pressable
        style={{
          backgroundColor: 'white',
          marginTop: 0,
          marginRight: 5,
          marginLeft: 5,

          borderColor: '#29b6f6',
          borderWidth: 3,
          borderTopWidth: 0,
          paddingTop: 10,
          paddingLeft: 20,
          paddingBottom: 10,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('Location' as never);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>위시리스트</Text>
        <Text style={{fontSize: 10}}>위시1</Text>
        <Text style={{fontSize: 10}}>위시2</Text>
        <Text style={{fontSize: 10}}>위시3</Text>
      </Pressable>
    </View>*/

    <Stack.Navigator initialRouteName="SignIn">
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

      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
      <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
      <Stack.Screen
        name="StackHome"
        component={Home}
        options={{
          title: 'Glins',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#29b6f6',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          title: '위시리스트',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
        }}
      />

      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '설정',
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
      />
    </Stack.Navigator>
  );
}

export default StackContainer;
