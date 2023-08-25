import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function Friend() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('following' as never);
        }}>
        <Text style={styles.containertext}>팔로잉 목록</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Text
          style={styles.containertext}
          onPress={() => {
            navigation.navigate('follower' as never);
          }}>
          팔로워 목록
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Friend;

const styles = StyleSheet.create({
  usercontainertext: {
    margin: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    //marginTop: 20,
    margin: 10,
    height: 45,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#a4a3a3ae',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  containertext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
