import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Follower() {
  const {AccessToken} = useAuth();
  const [followerData, setFollowerData] = useState<any>([]);
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때만 axios 요청을 보내도록 useEffect 내부에 위치
    axios
      .get('http://43.202.26.221:8080/v1/follow', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 요청 성공 시 처리
        console.log(response.data.result);
        setFollowerData(response.data.result);
        console.log(response.data.result);
        // setReviewData(response.data.result);
        // if (reviewData) console.log(reviewData);
      })
      .catch(error => {
        // 요청 실패 시 처리
        console.error(error);
      });
  }, []);

  const handlePostFollow = (clientId: number) => {
    -axios
      .post(`http://43.202.26.221:8080/v1/follow/${clientId}`, null, {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 삭제 요청 성공 시 처리
        setFollowerData(followerData);
        console.log(followerData);
        // 삭제 후에 리뷰 목록을 다시 불러올 수 있도록 필요한 로직을 추가할 수 있습니다.
        // 예를 들어, setReviewData로 리뷰 목록을 갱신하는 등의 작업을 수행할 수 있습니다.
      })
      .catch(error => {
        // 삭제 요청 실패 시 처리
        console.error('리뷰 삭제 실패:', error);
      });
    axios
      .get('http://43.202.26.221:8080/v1/review', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 요청 성공 시 처리
        setFollowerData(response.data.result);
      })
      .catch(error => {
        // 요청 실패 시 처리
        console.error('리뷰 목록 가져오기 실패:', error);
      });
  };
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: '#b6b1b1ae',
          borderBottomWidth: 0.3,
        }}>
        <Text
          style={{
            marginLeft: 22,
            color: 'black',
            marginBottom: 30,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          나의 팔로워 {followerData.length}명
        </Text>
      </View>
      {followerData.map((follow: any, index: any) => (
        <View
          key={index}
          style={{
            flex: 1,
            borderRadius: 10,
            margin: 10,
            height: 30,
            borderBottomColor: '#b6b1b1ae',
            borderWidth: 0,
            borderBottomWidth: 0.8,
            marginBottom: 0,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
              }}>
              {follow.nickname}
            </Text>
            <TouchableOpacity
              style={styles.deletebutton}
              onPress={() => {
                Alert.alert(
                  '팔로우 추가',
                  '정말로 팔로우를 추가하시겠습니까?',
                  [
                    {
                      text: '취소',
                      style: 'cancel',
                    },
                    {
                      text: '추가',
                      onPress: () => handlePostFollow(follow.clientId), // 추가 함수 호출
                    },
                  ],
                );
              }}>
              <Text style={styles.deletetext}> 추가</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
export default Follower;
const styles = StyleSheet.create({
  reviewcontainer: {
    flex: 1,
    borderRadius: 10,
    marginTop: 5,

    height: 90,
    borderBottomColor: '#b6b1b1ae',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 0,
    margin: 10,
  },
  reviewername: {
    color: 'black',
    marginLeft: 10,
    fontSize: 11,
    fontWeight: 'bold',
  },
  reviewdate: {color: '#666363ad', fontSize: 11},
  reviewText: {
    color: 'black',
    marginLeft: 15,
    marginTop: 10,
    fontWeight: '400',
    fontSize: 15,
  },
  deletebutton: {
    width: 40,
    height: 25,
    margin: 300,
    backgroundColor: '#c6e8ef5f',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 3,
    position: 'absolute',
  },
  deletetext: {
    color: 'black',
    fontSize: 11,
    marginTop: 5,
    marginRight: 3,
    fontWeight: '400',
  },
  location: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 0,
    //   marginRight: 3,
    fontWeight: '900',
  },
});
