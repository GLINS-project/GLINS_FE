import React, {useState} from 'react';
import {Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PushNotification from 'react-native-push-notification';
import {
  Button,
  Dimensions,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import NaverMapView, {Marker, Path} from 'react-native-nmap';

import Geolocation from '@react-native-community/geolocation';
import WebView from 'react-native-webview';
function SerchBar() {
  return (
    <View
      style={{
        margin: 10,
        //position: 'relative',
        backgroundColor: '#c6e8ef5f',
        padding: 0,
        height: 40,
        borderRadius: 23,
        flexDirection: 'row',
      }}>
      <View style={{position: 'absolute'}}>
        <TextInput
          style={{marginLeft: 10, fontSize: 15}}
          placeholder="장소,가게 이름을 입력하시오"
          placeholderTextColor={'#4c565a'}></TextInput>
      </View>
      <Pressable
        style={{
          marginLeft: 335,
          marginTop: 8,
          backgroundColor: '#c6e8ef5f',
        }}
        onPress={() => {
          Alert.alert('검색', '등록');
        }}>
        <Feather name="search" size={25} />
      </Pressable>
    </View>
  );
}

function Ing() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  var reallat = 0;
  var reallongt = 0;
  const handleClick = () => {
    console.log(latitude);
    setLatitude(latitude + 0.00000000000001);
    setLongitude(longitude + 0.00000000000001); // 상태 변경
    console.log('변경후');
    console.log(latitude);
  };
  //pushnotification 채널 만들기

  PushNotification.createChannel(
    {
      channelId: 'glins_notification_id', // 고유한 채널 ID
      channelName: 'glins_notification_name', // 채널 이름
      channelDescription: 'Channel Description', // 채널 설명 (선택적)
      importance: 4, // 알림의 중요도 (범위: 1-5)
      vibrate: true, // 진동 여부 (선택적)
      playSound: true, // 사운드 재생 여부 (선택적)
      soundName: 'default', // 사용할 사운드 파일 이름 (선택적)
    },
    created => {
      console.log(`알림 채널 생성: ${created}`);
    },
  );

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    // 두 지점 사이의 거리를 계산하는 함수
    const R = 6371; // 지구의 반경 (km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance * 1000; // km를 m로 변환
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  // function getLocation() {
  Geolocation.watchPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLatitude(latitude);
      setLongitude(longitude);
      console.log(latitude);
    },
    error => {
      console.log(error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      distanceFilter: 10,
      interval: 5000,
      fastestInterval: 2000,
    },
  );
  const distance = calculateDistance(
    latitude,
    longitude,
    37.557511,
    126.943255,
  );
  if (distance < 500) {
    PushNotification.localNotification({
      channelId: 'glins_notification_id',
      title: '위시리스트 알림',
      message: "지정된 위시리스트 '더 포스짐'가(이) 근방 500m에 있습니다 .",
    });
  } else {
    PushNotification.removeAllDeliveredNotifications();
  }

  // return (
  //   <View>
  //     <View style={{marginLeft: 331, marginTop: 3, position: 'absolute'}}>
  //       <FontAwesome name="circle" size={40} color={'#55a7b85f'} />
  //     </View>
  //     <Pressable
  //       style={{marginLeft: 335, marginTop: 10, position: 'absolute'}}
  //       onPress={() => {
  //         Geolocation.getCurrentPosition(
  //           position => {
  //             const latitude1 = JSON.stringify(position.coords.latitude);
  //             const longitude1 = JSON.stringify(position.coords.longitude);

  //             setLatitude('123');
  //             setLongitude(longitude1);
  //             console.log('123');
  //           },
  //           error => {
  //             console.log('error.code, error.message');
  //           },
  //           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //         );
  //       }}>
  //       <MaterialIcons name="my-location" size={25} />
  //     </Pressable>
  //   </View>
  // );
  //}
  return (
    // <View>
    //   <SerchBar />

    //   <View
    //     style={{
    //       width: Dimensions.get('window').width - 20,
    //       borderColor: '#29b6f6',
    //       borderWidth: 1,

    //       borderRadius: 10,
    //       height: 400,
    //       marginTop: 0,
    //       alignSelf: 'center',
    //       padding: 5,
    //     }}>
    //     <NaverMapView
    //       useTextureView={true}
    //       style={{width: '100%', height: '100%'}}
    //       zoomControl={false}
    //       showsMyLocationButton={true}
    //       scaleBar={true}
    //       center={{
    //         zoom: 16,
    //         tilt: 0,
    //         latitude: latitude,
    //         longitude: longitude,
    //       }}>
    //       <Marker
    //         coordinate={{
    //           latitude: latitude,
    //           longitude: longitude,
    //         }}
    //         pinColor="blue"
    //         width={30}
    //         height={30}
    //       />

    //       <Marker
    //         coordinate={{latitude: 37.557511, longitude: 126.943255}}
    //         caption={{text: '더 포스짐'}}
    //       />
    //     </NaverMapView>
    //     <View style={{position: 'absolute'}}>
    //       <View>
    //         <Pressable
    //           style={{
    //             borderWidth: 0,
    //             width: 30,
    //             height: 30,
    //             marginLeft: 28.5,
    //             marginTop: 311.5,
    //             position: 'absolute',
    //           }}
    //           onPress={() => {
    //             // PushNotification.localNotification({
    //             //   channelId: 'glins_notification_id',
    //             //   title: '위시리스트 알림',
    //             //   message:
    //             //     "지정된 위시리스트 '무라 홍대점'가(이) 근방 500m에 있습니다 .",
    //             // });

    //             handleClick();
    //             console.log(latitude);
    //             Geolocation.getCurrentPosition(
    //               position => {
    //                 const latitude1 = position.coords.latitude;
    //                 const longitude1 = position.coords.longitude;
    //                 //setLatitude(latitude1);
    //                 //setLongitude(longitude1);
    //                 reallat = Number(latitude);
    //                 reallongt = Number(longitude);

    //                 console.log(reallat);
    //                 console.log(typeof reallat);
    //               },
    //               error => {
    //                 console.log('error.code, error.message');
    //               },
    //               {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    //             );
    //           }}></Pressable>
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <WebView
      source={{
        //uri: 'http://tablog.neocities.org/keywordposition_m',
        uri: 'http://192.168.0.25:8080', //python -m SimpleHTTPServer 8000
      }}
      style={{flex: 1}}
    />
  );
}

export default Ing;
