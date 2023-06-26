import Geolocation from '@react-native-community/geolocation';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function GeoLocationAPI() {
  const [latitude, setLatitude] = useState(' ');
  const [longitude, setLogitude] = useState(' ');

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        setLatitude(latitude);
        setLogitude(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View>
      <Text> latitude: {latitude} </Text>
      <Text> longitude: {longitude} </Text>
      <TouchableOpacity onPress={() => geoLocation()}>
        <Text> Get GeoLocation </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GeoLocationAPI;
