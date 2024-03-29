import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {useAuth} from '../contexts/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {
  Button,
  Dimensions,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import NaverMapView, {Marker, Path} from 'react-native-nmap';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
function ReviewManage() {
  const {AccessToken} = useAuth();
  const [reviewData, setReviewData] = useState<any>([
    {
      result: {
        clientNickname: '',
        content: '',
        rating: 0,
        reviewId: 0,
      },
      resultCode: '',
    },
  ]);
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때만 axios 요청을 보내도록 useEffect 내부에 위치
    axios
      .get('http://43.202.26.221:8080/v1/review', {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 요청 성공 시 처리
        console.log(response.data.result);
        setReviewData(response.data.result);
        if (reviewData) console.log(reviewData);
      })
      .catch(error => {
        // 요청 실패 시 처리
        console.error(error);
      });
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 호출되도록 설정
  useEffect(() => {
    //console.log(reviewData.result.clientNickname);
  }, [reviewData]);
  const navigation = useNavigation();

  const handleDeleteReview = (reviewId: number) => {
    // 삭제를 원하는 리뷰의 ID를 파라미터로 받아와서 처리
    axios
      .delete(`http://43.202.26.221:8080/v1/review/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      .then(response => {
        // 삭제 요청 성공 시 처리
        setReviewData(reviewData);
        console.log('리뷰 삭제 성공:', response.data);
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
        setReviewData(response.data.result);
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
          내가 쓴 총 리뷰 {reviewData.length}개
        </Text>
      </View>
      {reviewData.map((review: any, index: any) => (
        <View
          key={index}
          style={{
            flex: 1,
            borderRadius: 10,
            margin: 10,
            height: 110,
            borderBottomColor: '#b6b1b1ae',
            borderWidth: 0,
            borderBottomWidth: 0.5,
            marginBottom: 0,
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', marginBottom: 5}}
            onPress={() => {
              navigation.navigate('LocationDetail' as never);
            }}>
            <Text style={styles.location}>장소이름 </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              {'  >'}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
              }}>
              <AntDesign name="star" size={20} color="#ede436f8" />
              {review.rating}
              <Text style={styles.reviewdate}> 23/99/99</Text>
            </Text>
            <TouchableOpacity
              style={styles.deletebutton}
              onPress={() => {
                // 삭제 버튼을 눌렀을 때 확인 다이얼로그를 띄우고, 확인을 누르면 삭제 함수 호출
                Alert.alert('리뷰 삭제', '정말로 리뷰를 삭제하시겠습니까?', [
                  {
                    text: '취소',
                    style: 'cancel',
                  },
                  {
                    text: '삭제',
                    onPress: () => handleDeleteReview(review.reviewId), // 삭제 함수 호출
                  },
                ]);
              }}>
              <Text style={styles.deletetext}> 삭제</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.reviewText}>{review.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
export default ReviewManage;

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
    marginRight: 220,
    backgroundColor: '#c6e8ef5f',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 3,
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
