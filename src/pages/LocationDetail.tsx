import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
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
import axios, {AxiosError} from 'axios';
// function SerchBar() {
//   return (
//     <View
//       style={{
//         margin: 10,
//         //position: 'relative',
//         backgroundColor: '#c6e8ef5f',
//         padding: 0,
//         height: 40,
//         borderRadius: 23,
//         flexDirection: 'row',
//       }}>
//       <View style={{position: 'absolute'}}>
//         <TextInput
//           style={{marginLeft: 10, fontSize: 15}}
//           placeholder="장소,가게 이름을 입력하시오"
//           placeholderTextColor={'#4c565a'}></TextInput>
//       </View>
//       <Pressable
//         style={{
//           marginLeft: 300,
//           marginTop: 8,
//         }}
//         onPress={() => {
//           Alert.alert('검색', '등록');
//         }}>
//         <Feather name="search" size={25} />
//       </Pressable>
//     </View>
//   );
// }

// function LocationDetail() {
//   return (
//     <ScrollView>
//       <View>
//         <View
//           style={{
//             width: Dimensions.get('window').width - 20,
//             borderColor: '#29b6f6',
//             borderWidth: 1,

//             borderRadius: 10,
//             height: 200,
//             marginTop: 0,
//             alignSelf: 'center',
//             padding: 5,
//           }}>
//           <NaverMapView
//             style={{width: '100%', height: '100%'}}
//             zoomControl={false}
//             center={{
//               zoom: 15,
//               tilt: 0,
//               latitude: 37.557511,
//               longitude: 126.943255,
//             }}>
//             <Marker
//               coordinate={{
//                 latitude: 37.557511,
//                 longitude: 126.943255,
//               }}
//               pinColor="green"
//               caption={{text: '더 포스짐'}}
//             />
//             {/* <Marker
//               coordinate={{
//                 latitude: 37.559437,
//                 longitude: 126.944854,
//               }}
//               pinColor="#c4c45412"
//             /> */}
//             {/* <Marker
//               coordinate={{
//                 latitude: 37.557501,
//                 longitude: 126.943184,
//               }}
//               pinColor="#c4c45412"
//             /> */}

//             {/* <Path
//             coordinates={[
//               {
//                 latitude: 37.557556,
//                 longitude: 126.94411,
//               },
//               {latitude: 37.552631, longitude: 126.92492},
//             ]}
//           /> */}
//             <Marker coordinate={{latitude: 37.552631, longitude: 126.92492}} />
//           </NaverMapView>
//         </View>
//       </View>
//       <View
//         style={{
//           flex: 1,
//           borderRadius: 10,
//           margin: 10,
//           height: 90,
//           borderBottomColor: '#b6b1b1ae',
//           borderWidth: 0,
//           borderBottomWidth: 1,
//           marginBottom: 0,
//           marginTop: 15,
//         }}>
//         <Text style={styles.reviewername}>
//           박정준님 <Text style={styles.reviewdate}> 23/06/26</Text>
//         </Text>
//         <Text
//           style={{
//             marginLeft: 8,
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: 'black',
//           }}>
//           <AntDesign name="star" size={20} color="#ede436f8" />
//           5.0
//         </Text>
//         <Text style={styles.reviewText}>good!</Text>
//       </View>
//       {/* <View style={styles.reviewcontainer}>
//         <Text style={styles.reviewername}>
//           회원 <Text style={styles.reviewdate}> 23/05/12</Text>
//         </Text>
//         <Text
//           style={{
//             marginLeft: 8,
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: 'black',
//           }}>
//           <AntDesign name="star" size={20} color="#ede436f8" />
//           5.0
//         </Text>
//         <Text style={styles.reviewText}>맛있다.</Text>
//       </View>
//       <View style={styles.reviewcontainer}>
//         <Text style={styles.reviewername}>
//           회원 <Text style={styles.reviewdate}> 23/05/12</Text>
//         </Text>
//         <Text
//           style={{
//             marginLeft: 8,
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: 'black',
//           }}>
//           <AntDesign name="star" size={20} color="#ede436f8" />
//           5.0
//         </Text>
//         <Text style={styles.reviewText}>맛있다.</Text>
//       </View> */}
//     </ScrollView>
//   );
// }

// export default LocationDetail;

// const styles = StyleSheet.create({
//   reviewcontainer: {
//     flex: 1,
//     borderRadius: 10,
//     marginTop: 5,

//     height: 90,
//     borderBottomColor: '#b6b1b1ae',
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     marginBottom: 0,
//     margin: 10,
//   },
//   reviewername: {
//     color: 'black',
//     marginLeft: 10,
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   reviewdate: {color: '#666363ad', fontSize: 11},
//   reviewText: {
//     color: 'black',
//     marginLeft: 15,
//     marginTop: 10,
//     fontWeight: '500',
//     fontSize: 11,
//   },
// });
interface ReviewData {
  email: string;
  name: string;
  password: string;
}

const LocationDetail = () => {
  const [email, setRating] = useState('1');
  const [name, setReview] = useState('1');
  const [password, setuserID] = useState('1');

  const handleRatingChange = (value: string) => {
    setRating(value);
  };

  const handleReviewChange = (value: string) => {
    setReview(value);
  };
  const handleuserIDChange = (value: string) => {
    setuserID(value);
  };

  const handleSubmit = async () => {
    const reviewData: ReviewData = {
      email: email,
      name: name,
      password: password,
    };

    // try {
    //   const response = await axios.post<ReviewData>(
    //     'http://43.202.26.221:8080/v1/review/2135',
    //     reviewData,
    //   );

    //   console.log(response.data); // 성공적인 응답 데이터

    //   // 추가적인 처리 작업...

    //   // 입력 필드 초기화
    //   setRating(undefined);
    //   setReview('');
    // } catch (error) {
    //   console.error(error.response);
    // }
    axios
      .post(`http://localhost:3105/user`, {email, name, password})
      .then(function (response) {
        console.log(response.data); // 성공적인 응답 데이터

        // 추가적인 처리 작업...

        // 입력 필드 초기화
        setRating('');
        setReview('');
      })
      .catch(function (error) {
        console.error((error as AxiosError).response);
      });
  };

  return (
    <ScrollView>
      <View>
        <Button title="제출" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default LocationDetail;
