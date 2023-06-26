import React from 'react';
import {useNavigation} from '@react-navigation/native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitchExample from '../components/ToggleSwitchExample';

function Alarm() {
  return (
    <View>
      <View style={styles.settingcontainer}>
        <Text style={styles.settingtext}>ON/OFF</Text>
        <View style={{marginLeft: 230}}>
          <ToggleSwitchExample />
        </View>
      </View>
      <View style={styles.settingcontainer}>
        <Text style={styles.settingtext}>소리/진동</Text>
        <View style={{marginLeft: 223}}>
          <ToggleSwitchExample />
        </View>
      </View>
      <View style={styles.settingcontainer}>
        <Text style={styles.settingtext}>거리 설정</Text>
        <View style={{marginLeft: 230}}>
          <Text>500m</Text>
        </View>
      </View>
    </View>
  );
}

export default Alarm;
const styles = StyleSheet.create({
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
