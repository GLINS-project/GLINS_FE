import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import WishList from './WishList';
import Friend from './FriendStack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
function Home() {
  const navigation = useNavigation();
  const [Iconcolor1, setIconcolor1] = useState('#ffffff');
  const [Iconcolor2, setIconcolor2] = useState('#ffffff');
  const [Iconcolor3, setIconcolor3] = useState('#ffffff');
  const [Iconcolor4, setIconcolor4] = useState('#ffffff');

  return (
    <ScrollView>
      <View>
        <Pressable
          style={{
            backgroundColor: 'white',
            marginTop: 5,
            marginRight: 5,
            marginLeft: 5,

            borderColor: '#93cfe6',
            borderWidth: 3,
            paddingTop: 10,
            paddingLeft: 20,
            paddingBottom: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('WishList' as never);
          }}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
            <Ionicons name="heart" size={20} color="#fbcdf4" /> 위시리스트
          </Text>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 12, color: 'black'}}>
              - (0.5km)리또리또 이대
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              - (2.3km)소코아 홍대점
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              - (1.7km)써브웨이 홍대아트점
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              - (2.5km)KT&G 상상마당
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              - (2.7km)카타코토 카페
            </Text>

            <Text style={{fontSize: 12, color: 'black'}}>
              - (0.2km)더 포스짐
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>- (거리)위시8</Text>
          </View>
        </Pressable>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 10,
              marginBottom: 10,
              color: 'black',

              fontSize: 20,
              fontWeight: '900',
            }}>
            오늘의 추천 장소
          </Text>
          {/* <Pressable
            style={{
              marginTop: 15,
              marginLeft: 120,
              backgroundColor: 'white',
              height: 60,
              borderRadius: 10,
              width: 70,
              borderColor: '#29b6f6',
              borderWidth: 1,
            }}
            onPress={() => {
              navigation.navigate('Friend' as never);
            }}>
            <View style={{alignItems: 'center'}}>
              <Ionicons name="people-outline" size={40} color="black" />
              <Text style={{fontSize: 10, fontWeight: '300', color: 'black'}}>
                친구목록
              </Text>
            </View>
          </Pressable> */}
        </View>
        <View>
          <View style={{flexDirection: 'row', height: 160}}>
            <Pressable
              style={{
                backgroundColor: '#c6e8ef5f',
                flex: 1,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text style={styles.recommendlocation}>리또리또 이대</Text>
              <Text style={styles.recommenddistanse}>0.5km</Text>
              <Text>#혼밥,#존맛,#테이크아웃</Text>
              <TouchableOpacity
                onPress={() => {
                  Iconcolor1 === '#ffffff'
                    ? setIconcolor1('#fbcdf4')
                    : setIconcolor1('#ffffff');
                }}>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  <Ionicons name="heart" size={30} color={Iconcolor1} />
                </Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#c6e8ef5f',
                flex: 1,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text style={styles.recommendlocation}>무라 1호점</Text>
              <Text style={styles.recommenddistanse}>2.3km</Text>
              <Text>#혼밥,#포장,#서민적인</Text>
              <TouchableOpacity
                onPress={() => {
                  Iconcolor2 === '#ffffff'
                    ? setIconcolor2('#fbcdf4')
                    : setIconcolor2('#ffffff');
                }}>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  <Ionicons name="heart" size={30} color={Iconcolor2} />
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>

          <View style={{flexDirection: 'row', height: 160}}>
            <Pressable
              style={{
                backgroundColor: '#c6e8ef5f',
                flex: 1,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text style={styles.recommendlocation}>매거진스탠딩 신촌</Text>
              <Text style={styles.recommenddistanse}>1.0km</Text>
              <Text>#데이트,#모츠나베,#깔끔한</Text>
              <TouchableOpacity
                onPress={() => {
                  Iconcolor3 === '#ffffff'
                    ? setIconcolor3('#fbcdf4')
                    : setIconcolor3('#ffffff');
                }}>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  <Ionicons name="heart" size={30} color={Iconcolor3} />
                </Text>
              </TouchableOpacity>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#c6e8ef5f',
                flex: 1,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text style={styles.recommendlocation}>고삼이 신촌</Text>
              <Text style={styles.recommenddistanse}>1.1km</Text>
              <Text>#혼밥,#서민적,#테이크아웃</Text>
              <TouchableOpacity
                onPress={() => {
                  Iconcolor4 === '#ffffff'
                    ? setIconcolor4('#fbcdf4')
                    : setIconcolor4('#ffffff');
                }}>
                <Text style={{textAlign: 'center', marginTop: 15}}>
                  <Ionicons name="heart" size={30} color={Iconcolor4} />
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  recommendlocation: {
    fontSize: 18,
    padding: 10,
    paddingBottom: 0,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  recommenddistanse: {textAlign: 'center', fontSize: 10},
});
