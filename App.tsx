import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/SettingStack';
import Orders from './src/pages/FriendStack';
import Map from './src/pages/Map';
import {useEffect, useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import SplashScreen from 'react-native-splash-screen';
import {Text, View} from 'react-native';
import Location from './src/pages/Location';
import WishList from './src/pages/WishList';
import Friend from './src/pages/FriendStack';
import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import StackContainer from './src/pages/StackContainer';
import Home from './src/pages/Home';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import UserInfo from './src/pages/UserInfo';
import SettingStack from './src/pages/SettingStack';
import KakaoLogin from './src/pages/KakaoLogin';
import GoogleLogin from './src/pages/GoogleLogin';
import {AuthProvider} from './src/contexts/AuthContext';
import FriendStack from './src/pages/FriendStack';
export type LoggedInParamList = {
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
  WishList: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};
const accesstoken = '';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  // 여기서 부터 앱 허용
  useEffect(() => {
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then(result => {
          console.log('check location', result);
          if (result === RESULTS.BLOCKED || result === RESULTS.DENIED) {
            Alert.alert(
              '이 앱은 위치 권한 허용이 필요합니다.',
              '앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.',
              [
                {
                  text: '네',
                  onPress: () => Linking.openSettings(),
                },
                {
                  text: '아니오',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel',
                },
              ],
            );
          }
        })
        .catch(console.error);
    } else if (Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.LOCATION_ALWAYS)
        .then(result => {
          if (result === RESULTS.BLOCKED || result === RESULTS.DENIED) {
            Alert.alert(
              '이 앱은 백그라운드 위치 권한 허용이 필요합니다.',
              '앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.',
              [
                {
                  text: '네',
                  onPress: () => Linking.openSettings(),
                },
                {
                  text: '아니오',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel',
                },
              ],
            );
          }
        })
        .catch(console.error);
    }
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.CAMERA)
        .then(result => {
          if (result === RESULTS.DENIED || result === RESULTS.GRANTED) {
            return request(PERMISSIONS.ANDROID.CAMERA);
          } else {
            console.log(result);
            throw new Error('카메라 지원 안 함');
          }
        })
        .catch(console.error);
    } else {
      check(PERMISSIONS.IOS.CAMERA)
        .then(result => {
          if (
            result === RESULTS.DENIED ||
            result === RESULTS.LIMITED ||
            result === RESULTS.GRANTED
          ) {
            return request(PERMISSIONS.IOS.CAMERA);
          } else {
            console.log(result);
            throw new Error('카메라 지원 안 함');
          }
        })
        .catch(console.error);
    }
  }, []);
  //여기까지 앱허용
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [acessToken, setAccessToken] = useState('');
  useEffect(() => {});
  useEffect(() => {
    //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        {/* //   {isLoggedIn ? ( */}
        <Tab.Navigator>
          <Tab.Screen
            name="StackContiner"
            component={StackContainer}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: () => <Feather name="home" size={20} color="black" />,
            }}
          />
          <Tab.Screen
            name="지도"
            component={Map}
            options={{
              headerShown: false,
              tabBarLabel: '지도',
              headerTitleAlign: 'center',
              tabBarIcon: () => (
                <Feather name="map-pin" size={20} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="friendStack"
            component={FriendStack}
            options={{
              headerShown: false,
              tabBarLabel: '친구',
              headerTitleAlign: 'center',
              tabBarIcon: () => (
                <FontAwesome5 name="user-friends" size={20} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="세팅"
            component={SettingStack}
            options={{
              headerShown: false,
              tabBarLabel: '설정',
              tabBarIcon: () => (
                <Feather name="settings" size={20} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
        {/* //   ) : (
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="SignIn"
    //         component={SignIn}
    //         options={{
    //           title: 'Glins',
    //           headerShown: false,
    //         }}
    //       />
    //       <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
    //       <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
    //     </Stack.Navigator>
    //   )} */}
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
