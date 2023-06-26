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
import SettingStack from './SettingStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
function UserInfo() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.usercontainer}
        onPress={() => {
          navigation.navigate('ManageUseinfo' as never);
        }}>
        <Image
          source={require('../assets/profileimg.jpg')}
          style={{width: 50, height: 50}}
        />

        <Text style={styles.usercontainertext}>박정준</Text>
        <View style={{marginLeft: 120, marginTop: 15, flexDirection: 'row'}}>
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
          navigation.navigate('SignIn' as never);
        }}>
        <Text style={styles.settingtext}>로그 아웃</Text>
        <View style={{marginLeft: 255}}>
          <FontAwesome name="angle-right" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingcontainer}>
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
