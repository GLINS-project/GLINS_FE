import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';

function ManageUseinfo() {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [clientInfo, setClientInfo] = useState({
    imageUrl: '',
    nickname: '',
  });
  const {AccessToken, setAccessToken} = useAuth();
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때만 axios 요청을 보내도록 useEffect 내부에 위치
    axios
      .get('http://43.202.26.221:8080/v1/client', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 요청 성공 시 처리
        console.log(response.data.result);
        setClientInfo(response.data.result);
      })
      .catch(error => {
        // 요청 실패 시 처리
        console.error(error);
      });
  }, []);
  const auditNickname = () => {
    console.log(inputValue);
    setStoredValue(inputValue);

    axios
      .patch(
        `http://43.202.26.221:8080/v1/client/nickname`,
        {nickname: inputValue},
        {
          headers: {
            Authorization: `Bearer ${AccessToken}`, // AccessToken을 헤더에 추가
          },
        },
      )
      .then(response => {
        // 성공적으로 응답 받았을 때 처리
        console.log('응답 데이터:', response.data);
      })
      .catch(error => {
        // 요청이 실패했을 때 처리
        console.error('에러 발생:', error);
      });

    // axios
    //   .get('http://43.202.26.221:8080/v1/client', {
    //     headers: {
    //       Authorization: `Bearer ${AccessToken}`,
    //     },
    //   })
    //   .then(response => {
    //     // 요청 성공 시 처리
    //     console.log(response.data.result);
    //     setClientInfo(response.data.result);
    //   })
    //   .catch(error => {
    //     // 요청 실패 시 처리
    //     console.error(error);
    //   });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>이름</Text>
      <TextInput
        style={{
          width: 100,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: 'center',
        }}
        placeholder={clientInfo.nickname}
        value={inputValue}
        onChangeText={text => setInputValue(text)} // 입력 값이 변경될 때 변수 업데이트
      />
      <Button title="수정하기" onPress={auditNickname} />
      <Text>입력한 값: {inputValue}</Text>
      <Text>저장된 값: {storedValue}</Text>
    </View>
  );
}

export default ManageUseinfo;
