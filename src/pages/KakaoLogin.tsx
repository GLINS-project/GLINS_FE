import React, {useEffect, useRef, useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import App from 'C:/Users/jeong/Glins/App';
import {useAuth} from '../contexts/AuthContext';
const Stack = createNativeStackNavigator();
const INJECTED_JAVASCRIPT = `   var preTag = document.querySelector('pre');
window.ReactNativeWebView.postMessage(preTag.innerText);`;
const TEST_JAVASCRIPT = ` var preTag = document.querySelector('pre');
window.ReactNativeWebView.postMessage(preTag.innerText);`;
function KakaoLogin() {
  const navigation = useNavigation();
  const webViewRef = useRef<WebView | null>(null);
  const [responseData, setResponseData] = useState(null);
  const [Token, setToken] = useState('');
  const {AccessToken, setAccessToken} = useAuth();
  const onMessageReceived = (event: any) => {
    setToken(event.nativeEvent.data);
  };
  //console.log(Token);
  useEffect(() => {
    if (Token) {
      const jsontoken = JSON.parse(Token);
      setAccessToken(jsontoken.accessToken);
      //위시리스트 post
      /* 
      axios
        .post(`http://43.202.26.221:8080/v1/wishlist/30`, null, {
          headers: {
            Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
          },
        })
        .then(response => {
          // 성공적으로 응답 받았을 때 처리
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          // 요청이 실패했을 때 처리
          console.error('에러 발생:', error);
        });
      */
      //팔로우 delete
      /*axios
        .delete(`http://43.202.26.221:8080/v1/follow/2`, {
          headers: {
            Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
          },
        })
        .then(response => {
          // 성공적으로 응답 받았을 때 처리
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          // 요청이 실패했을 때 처리
          console.error('에러 발생:', error);
        });
        */
      //팔로우 post
      /*
      axios
        .post(`http://43.202.26.221:8080/v1/follow/1`, null, {
          headers: {
            Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
          },
        })
        .then(response => {
          // 성공적으로 응답 받았을 때 처리
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          // 요청이 실패했을 때 처리
          console.error('에러 발생:', error);
        });
        */
      //위시리스트 post

      // axios
      //   .post(`http://43.202.26.221:8080/v1/follow/3`, null, {
      //     headers: {
      //       Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
      //     },
      //   })
      //   .then(response => {
      //     // 성공적으로 응답 받았을 때 처리
      //     console.log('응답 데이터:', response.data);
      //   })
      //   .catch(error => {
      //     // 요청이 실패했을 때 처리
      //     console.error('에러 발생:', error);
      //   });

      //리뷰 post

      // axios
      //   .post(
      //     `http://43.202.26.221:8080/v1/review/305`,
      //     {userId: 5, placeId: 305, content: 'good', rating: 3},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
      //       },
      //     },
      //   )
      //   .then(response => {
      //     // 성공적으로 응답 받았을 때 처리
      //     console.log('응답 데이터:', response.data);
      //   })
      //   .catch(error => {
      //     // 요청이 실패했을 때 처리
      //     console.error('에러 발생:', error);
      //   });

      //리뷰삭제
      /*axios
        .delete('http://43.202.26.221:8080/v1/review/1', {
          headers: {
            Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
          },
        })
        .then(response => {
          // 성공적으로 응답 받았을 때 처리
          console.log('응답 데이터:', response.data);
        })
        .catch(error => {
          // 요청이 실패했을 때 처리
          console.error('에러 발생:', error);
        });
*/
      //리뷰조회 id로
      // axios
      //   .get('http://43.202.26.221:8080/v1/wishlist/5', {
      //     headers: {
      //       Authorization: `Bearer ${jsontoken.accessToken}`,
      //     },
      //   })
      //   .then(response => {
      //     // 요청 성공 시 처리
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     // 요청 실패 시 처리
      //     console.error(error);
      //   });
      // const newData = {
      //   imageUrl: 'image', // 변경할 이미지 값
      // };

      // nickname,imagePATCH 요청 보내기
      // axios
      //   .patch('http://43.202.26.221:8080/v1/client/image', newData, {
      //     headers: {
      //       'Content-Type': 'application/json', // 데이터 형식 지정 (JSON)
      //       Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
      //     },
      //   })
      //   .then(response => {
      //     // 성공적으로 응답 받았을 때 처리
      //     console.log('응답 데이터:', response.data);
      //   })
      //   .catch(error => {
      //     // 요청이 실패했을 때 처리
      //     console.error('에러 발생:', error);
      //   });

      //회원탈퇴

      // axios
      //   .delete('http://43.202.26.221:8080/v1/client', {
      //     headers: {
      //       Authorization: `Bearer ${jsontoken.accessToken}`, // AccessToken을 헤더에 추가
      //     },
      //   })
      //   .then(response => {
      //     // 성공적으로 응답 받았을 때 처리
      //     console.log('응답 데이터:', response.data);
      //   })
      //   .catch(error => {
      //     // 요청이 실패했을 때 처리
      //     console.error('에러 발생:', error);
      //   });
    }
  }, [Token]);
  const handleNavigation = (newNavState: WebViewNavigation) => {
    if (newNavState.url.includes('kakao?')) {
      const accesstokenurl = newNavState.url;

      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get(accesstokenurl);
      //     setResponseData(response.data); // 응답 본문 저장
      //     console.log(responseData);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };

      // console.log(accesstokenurl);
      // axios
      //   .get(accesstokenurl)
      //   .then(function (response) {
      //     console.log(response.data); // 응답 본문 데이터 출력
      //   })
      //   .catch(function (error) {
      //     console.log(error.response.headers.connection);
      //   });
      // if (webViewRef.current) {
      //   webViewRef.current.injectJavaScript(INJECTED_JAVASCRIPT);
      // }
      if (webViewRef.current) {
        webViewRef.current.injectJavaScript(TEST_JAVASCRIPT);
      }

      const requestData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };
      const reviewdata = {};

      // Axios POST 요청 보내기

      navigation.navigate('StackHome' as never);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: 'http://43.202.26.221:8080/oauth2/authorization/kakao',
      }}
      style={{flex: 1}}
      onNavigationStateChange={handleNavigation}
      onMessage={onMessageReceived}
      // onMessage={event => {
      //   console.log(event.nativeEvent.data);
      // }}
    />
  );
}

export default KakaoLogin;
