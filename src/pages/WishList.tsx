import React, {useState} from 'react';
import {
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

import ReviewModal from '../components/ReviewModal';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-simple-modal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
function WishList() {
  const navigation = useNavigation();
  //review 모달
  const [Open, setOpen] = useState(false);
  //
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [isdelete1, setisdelete1] = useState(true);
  const [isdelete2, setisdelete2] = useState(true);
  const [isdelete3, setisdelete3] = useState(true);
  const [isdelete4, setisdelete4] = useState(true);
  const handleIconPress = (iconNumber: number) => {
    setSelectedIcon(iconNumber);
  };
  return (
    <ScrollView>
      <View style={{marginBottom: 0, marginTop: 0, backgroundColor: 'white'}}>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>더 포스짐</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              4.35<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>0.2km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate('LocationDetail' as never)}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>리또리또 이대</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              4.57<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>0.5km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>써브웨이 홍대아트점</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              4.36<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>1.3km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>소코아 홍대점</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              4.59<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>1.8km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>카타코토카페</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              4.5<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>2.4km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {isdelete1 ? (
          <View style={styles.WishListContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.WishListTile}>위시리스트1</Text>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => setisdelete1(false)}>
                <FontAwesome name="minus-square-o" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={styles.WishListInfo}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
                <AntDesign name="star" size={20} color="#e8ec24fa" />
                0.00<Text style={{color: 'white'}}>칸</Text>
                <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
              </Text>
              <View style={styles.ButtonView}>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => Alert.alert('dd')}>
                  <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {isdelete2 ? (
          <View style={styles.WishListContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.WishListTile}>위시리스트2</Text>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => setisdelete2(false)}>
                <FontAwesome name="minus-square-o" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={styles.WishListInfo}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
                <AntDesign name="star" size={20} color="#e8ec24fa" />
                0.00<Text style={{color: 'white'}}>칸</Text>
                <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
              </Text>
              <View style={styles.ButtonView}>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => Alert.alert('dd')}>
                  <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {isdelete3 ? (
          <View style={styles.WishListContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.WishListTile}>위시리스트3</Text>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => setisdelete3(false)}>
                <FontAwesome name="minus-square-o" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={styles.WishListInfo}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
                <AntDesign name="star" size={20} color="#e8ec24fa" />
                0.00<Text style={{color: 'white'}}>칸</Text>
                <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
              </Text>
              <View style={styles.ButtonView}>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => Alert.alert('dd')}>
                  <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {isdelete4 ? (
          <View style={styles.WishListContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.WishListTile}>위시리스트4</Text>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => setisdelete4(false)}>
                <FontAwesome name="minus-square-o" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={styles.WishListInfo}>
              <Text
                style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
                <AntDesign name="star" size={20} color="#e8ec24fa" />
                0.00<Text style={{color: 'white'}}>칸</Text>
                <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
              </Text>
              <View style={styles.ButtonView}>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => Alert.alert('dd')}>
                  <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ButtonStyle}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>위시리스트5</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              0.00<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.WishListContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.WishListTile}>위시리스트6</Text>
            <TouchableOpacity style={{marginRight: 20}}>
              <FontAwesome name="minus-square-o" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.WishListInfo}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
              <AntDesign name="star" size={20} color="#e8ec24fa" />
              0.00<Text style={{color: 'white'}}>칸</Text>
              <Text style={{fontWeight: 'normal', fontSize: 11}}>9.9km</Text>
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => Alert.alert('dd')}>
                <Text style={styles.ButtonTextStyle}>위치 및 리뷰목록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => setOpen(true)}>
                <Text style={styles.ButtonTextStyle}>리뷰 작성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal
        animationTension={0}
        animationDuration={0}
        open={Open}
        offset={-100}
        modalDidOpen={() => undefined}
        modalDidClose={() => undefined}
        closeOnTouchOutside={true}
        containerStyle={{
          justifyContent: 'center',
        }}
        modalStyle={{
          borderRadius: 12,
          margin: 10,
          padding: 10,
          backgroundColor: '#f5efef',
          borderColor: 'black',
          borderWidth: 2,
        }}
        disableOnBackPress={false}>
        <View>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              리뷰 작성
            </Text>
            <View style={{flexDirection: 'row', margin: 5}}>
              <TouchableOpacity onPress={() => handleIconPress(1)}>
                <AntDesign
                  name="star"
                  size={20}
                  color={selectedIcon >= 1 ? '#e8ec24fa' : '#b3b0b0f8'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress(2)}>
                <AntDesign
                  name="star"
                  size={20}
                  color={selectedIcon >= 2 ? '#e8ec24fa' : '#b3b0b0f8'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress(3)}>
                <AntDesign
                  name="star"
                  size={20}
                  color={selectedIcon >= 3 ? '#e8ec24fa' : '#b3b0b0f8'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress(4)}>
                <AntDesign
                  name="star"
                  size={20}
                  color={selectedIcon >= 4 ? '#e8ec24fa' : '#b3b0b0f8'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress(5)}>
                <AntDesign
                  name="star"
                  size={20}
                  color={selectedIcon >= 5 ? '#e8ec24fa' : '#b3b0b0f8'}
                />
              </TouchableOpacity>

              {/* <AntDesign name="star" size={20} />
              <AntDesign name="star" size={20} />
              <AntDesign name="star" size={20} />
              <AntDesign name="star" size={20} />
              <AntDesign name="star" size={20} /> */}
            </View>
            <View
              style={{
                borderRadius: 10,
                borderColor: 'black',
                height: 100,
                borderWidth: 2,
              }}>
              <TextInput placeholder="리뷰를 작성해 주시오"></TextInput>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#c6e8ef5f',
                marginTop: 10,
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 0,
                width: 100,
                alignItems: 'center',
              }}
              onPress={() => setOpen(false)}>
              <Text>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#c6e8ef5f',
                marginTop: 10,
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 0,
                width: 100,
                alignItems: 'center',
              }}
              onPress={() => setOpen(false)}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
export default WishList;

const styles = StyleSheet.create({
  WishListContainer: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    height: 80,
    borderBottomColor: '#474747af',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 0,
  },

  WishListTile: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 3,
    color: 'black',
  },
  WishListInfo: {
    margin: 5,

    borderRadius: 5,
  },
  ButtonView: {
    flexDirection: 'row',
    //flex: 1,
    //bordercolor: 'black',
    //borderRadius: 10,
    //width: 1,
  },
  ButtonTextStyle: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
  ButtonStyle: {
    backgroundColor: '#c6e8ef5f',
    borderColor: 'black',
    borderRadius: 11,
    borderWidth: 0,
    marginHorizontal: 9,
    //width: 90,
    height: 25,
    flex: 1,
  },
});
