import React, {useEffect, useRef, useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from 'C:/Users/jeong/Glins/App';
const Stack = createNativeStackNavigator();

function KakaoLogin() {
  const navigation = useNavigation();
  const handleNavigation = (newNavState: WebViewNavigation) => {
    if (newNavState.url.includes('kakao?code'))
      navigation.navigate('StackHome' as never);
  };
  return (
    <WebView
      source={{
        uri: 'http://43.202.26.221:8080/oauth2/authorization/kakao',
      }}
      style={{flex: 1}}
      onNavigationStateChange={handleNavigation}
    />
  );
}

export default KakaoLogin;
