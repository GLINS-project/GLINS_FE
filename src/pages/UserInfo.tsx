import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Image,
  Alert,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SettingStack from './SettingStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';
const Stack = createNativeStackNavigator();

function UserInfo() {
  const isFocused = useIsFocused();
  const {AccessToken} = useAuth();
  const [clientInfo, setClientInfo] = useState({
    imageUrl: '',
    nickname: '',
  });
  const navigation = useNavigation();
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
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 호출되도록 설정
  const fetchClientInfo = () => {
    axios
      .get('http://43.202.26.221:8080/v1/client', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        console.log(response.data.result);
        setClientInfo(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isFocused) {
      fetchClientInfo();
    }
  }, [isFocused]); // isFocused가 변경될 때마다 데이터를 최신화
  const handleLogout = () => {
    axios
      .get('http://43.202.26.221:8080/v1/client/logout', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 요청 성공 시 처리
        console.log(response.data);
        // 로그아웃 처리 후에 원하는 작업을 수행할 수 있습니다.
      })
      .catch(error => {
        // 요청 실패 시 처리
        console.error('로그아웃 에러:', error);
      });
  };
  const handleSignOut = () => {
    axios
      .delete('http://43.202.26.221:8080/v1/client', {
        headers: {
          Authorization: `Bearer ${AccessToken}`, // AccessToken을 헤더에 추가
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
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.usercontainer}
        onPress={() => {
          navigation.navigate('ManageUseinfo' as never);
        }}>
        <Image
          source={{uri: clientInfo.imageUrl}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />

        <Text style={styles.usercontainertext}>{clientInfo.nickname}</Text>
        <View style={{marginLeft: 130, marginTop: 15, flexDirection: 'row'}}>
          <View style={{margin: 7}}>
            <Text style={{fontSize: 10}}>프로필 관리</Text>
          </View>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingcontainer}
        onPress={() => {
          navigation.navigate('ReviewManage' as never);
        }}>
        <Text style={styles.settingtext}>리뷰 관리</Text>
        <View style={{marginLeft: 255}}>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingcontainer}
        onPress={() => {
          navigation.navigate('Alarm' as never);
        }}>
        <Text style={styles.settingtext}>알림 설정</Text>
        <View style={{marginLeft: 255}}>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingcontainer}
        onPress={() => {
          Alert.alert('로그아웃');
          {
            handleLogout();
          }
          //navigation.navigate('SignIn' as never);
        }}>
        <Text style={styles.settingtext}>로그 아웃</Text>
        <View style={{marginLeft: 255}}>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingcontainer}
        onPress={() => {
          // 삭제 버튼을 눌렀을 때 확인 다이얼로그를 띄우고, 확인을 누르면 삭제 함수 호출
          Alert.alert('회원 탈퇴', '정말로 회원 탈퇴를 하시겠습니까?', [
            {
              text: '취소',
              style: 'cancel',
            },
            {
              text: '삭제',
              onPress: () => handleSignOut(), // 삭제 함수 호출
            },
          ]);
        }}>
        <Text style={styles.settingtext}>회원 탈퇴</Text>
        <View style={{marginLeft: 255}}>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default UserInfo;

const styles = StyleSheet.create({
  usercontainer: {
    borderRadius: 10,
    marginTop: 22,
    margin: 10,
    height: 60,
    borderBottomColor: '#474747af',
    borderWidth: 0,
    flexDirection: 'row',
    //borderBottomWidth: 1,
    //marginBottom: 0,
  },
  usercontainertext: {
    margin: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  settingcontainer: {
    //marginTop: 20,
    margin: 0,
    height: 45,
    borderColor: 'white',

    borderBottomColor: '#a4a3a3ae',
    borderWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
  },
  settingtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
