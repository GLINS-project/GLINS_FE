import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import WebView from 'react-native-webview';

function GoogleLogin() {
  return (
    <WebView
      source={{
        uri: 'http://43.202.26.221:8080/oauth2/authorization/google',
      }}
      userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
      style={{flex: 1}}
    />
  );
}

export default GoogleLogin;
