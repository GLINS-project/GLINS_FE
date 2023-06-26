import React, {useCallback, useState} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function SignIn() {
  const navigation = useNavigation();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const onSubmit = useCallback(() => {
  //   Alert.alert('알림', '로그인 되었습니다.');
  // }, []);
  // const onChangeEmail = useCallback(text => {
  //   setEmail(text);
  // }, []);
  // const onChangePassword = useCallback(text => {
  //   setPassword(text);
  // }, []);
  // const canGoNext = email && password;
  return (
    // <View style={styles.inputWrapper}>
    //   <View>
    //     <Text style={styles.label}>이메일</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       placeholder="이메일을 입력하시오"
    //       onChangeText={onChangeEmail}
    //       value="{email}"
    //     />
    //   </View>
    //   <View>
    //     <Text style={styles.label}>비밀번호</Text>
    //     <TextInput
    //       style={styles.textInput}
    //       placeholder="비밀번호를 입력하시오"
    //       onChangeText={onChangePassword}
    //       secureTextEntry
    //       value="{password]}"
    //     />
    //   </View>
    //   <View style={styles.buttonZone}>
    //     <Pressable
    //       onPress={onSubmit}
    //       style={
    //         !canGoNext
    //           ? styles.loginButton
    //           : [styles.loginButton, styles.loginButtonActive]
    //       }
    //       disabled={!canGoNext}>
    //       <Text style={styles.loginButtonText}>로그인</Text>
    //     </Pressable>
    //     <Pressable>
    //       <Text style={styles.loginButtonText}>회원가입하기</Text>
    //     </Pressable>
    //   </View>
    // </View>

    <View style={{alignItems: 'center', backgroundColor: 'white', flex: 1}}>
      <View
        style={{margin: 110, alignItems: 'center', backgroundColor: 'white'}}>
        <Image
          source={require('../assets/Glins.jpg')}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        SNS 계정을 이용해 로그인 하시오.
      </Text>
      <Pressable
        style={{marginTop: 100}}
        onPress={() => {
          navigation.navigate('KakaoLogin' as never);
        }}>
        <Image
          source={require('../assets/kakaologin.png')}
          style={{width: 340, height: 50}}
        />
      </Pressable>
      <Pressable
        style={{
          marginTop: 10,
          borderBottomWidth: 0.5,
          borderRadius: 6,
          borderBottomColor: '#c3c7c3b6',
        }}
        onPress={() => {
          navigation.navigate('GoogleLogin' as never);
        }}>
        <Image
          source={require('../assets/googlelogin.jpg')}
          style={{width: 340, height: 50}}
        />
      </Pressable>
    </View>
  );
}
//disabled 하면 버튼 반응 x
//조건문에서 배열로하면 뒤에있는거 우선순위 높다

// const styles = StyleSheet.create({
//   inputWrapper: {
//     padding: 20,
//   },
//   textInput: {
//     padding: 10,
//     borderBottomWidth: 0.5,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 16,

//     marginTop: 20,
//   },
//   loginButton: {
//     backgroundColor: 'gray',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     marginTop: 30,
//   },
//   loginButtonText: {color: 'white', fontSize: 16},
//   buttonZone: {
//     alignItems: 'center',
//   },
//   loginButtonActive: {
//     backgroundColor: 'blue',
//   },
// });

export default SignIn;
