import React from 'react';
import {Alert, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  Button,
  Dimensions,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import Orders from './Orders';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
function ReviewManage() {
  const navigation = useNavigation();
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
          내가 쓴 총 리뷰 1개
        </Text>
      </View>
      <View
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
          <Text style={styles.location}>더 포스짐 </Text>
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
            5.0<Text style={styles.reviewdate}> 23/06/26</Text>
          </Text>
          <TouchableOpacity
            style={styles.deletebutton}
            onPress={() => {
              Alert.alert('삭제?');
            }}>
            <Text style={styles.deletetext}> 삭제</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.reviewText}>good!</Text>
      </View>
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
    marginLeft: 220,
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
