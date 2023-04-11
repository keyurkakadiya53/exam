import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import React, {useState} from 'react';
import UserImage from './../rec/user1.png';
import Tab1Image from './../rec/tab1.png';
import Tab2Image from './../rec/tab2.png';
import Tab3Image from './../rec/tab3.png';
import Tab4Image from './../rec/tab4.png';
import Logo1 from './../rec/logo1.png';
import Logo2 from './../rec/logo2.png';
import Logo3 from './../rec/logo3.png';
import TimeLogo from './../rec/timeLogo.png';

const page1 = () => {
  const [isEnabled, setisEnabled] = useState(false);
  const [btnNo, setbtnNo] = useState(0);
  const [data, setdata] = useState([
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo1,
    },
    {
      name: 'Hellena John',
      email: 'hellena.john@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo2,
    },
    {
      name: 'Hellen Jummy',
      email: 'hellen.jummy@example.com',
      discription:
        'Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text ',
      datetime: '28/06/2022 10:00 AM',
      ischecked: false,
      image: Logo3,
    },
  ]);
  const MsgItem = (item, index) => (
    <View style={styles.msgView}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.image} style={{width: 30, height: 30}}></Image>
          <View style={{marginLeft: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
              {item.name}
            </Text>
            <Text style={{color: 'white', fontSize: 10}}>{item.email}</Text>
          </View>
        </View>
        <View>
          <CheckBox
            isChecked={item.isChecked}
            onClick={() => {
              setdata(prev => {
                console.log(
                  prev.map((val, i) =>
                    i == index ? {...val, isChecked: !val.isChecked} : val,
                  ),
                );
                return prev.map((val, i) =>
                  i == index ? {...val, isChecked: !val.isChecked} : val,
                );
              });
            }}
            checkBoxColor="white"
          />
        </View>
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
          {item.discription}
        </Text>
      </View>
      <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={TimeLogo} style={{width: 12, height: 12}}></Image>
        <Text style={{color: 'white', fontSize: 11, marginLeft: 5}}>
          {item.datetime}
        </Text>
      </View>
    </View>
  );

  const Tab1 = () => (
    <View>
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Explore
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => MsgItem(item, index)}
      />
    </View>
  );

  const Tab2 = () => (
    <View>
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Selected Explore
        </Text>
      </View>
      <View style={styles.msgView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={Logo2} style={{width: 30, height: 30}}></Image>
            <View style={{marginLeft: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
                Hellena John
              </Text>
              <Text style={{color: 'white', fontSize: 10}}>
                hellena.john@example.com
              </Text>
            </View>
          </View>
          {/* <View>
            <CheckBox
              isChecked={item.isChecked}
              onClick={() => {
                setdata(prev => {
                  console.log(
                    prev.map((val, i) =>
                      i == index ? {...val, isChecked: !val.isChecked} : val,
                    ),
                  );
                  return prev.map((val, i) =>
                    i == index ? {...val, isChecked: !val.isChecked} : val,
                  );
                });
              }}
              checkBoxColor="white"
            />
          </View> */}
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
            Lorem text Lorem text Lorem text Lorem text Lorem text Lorem text
            Lorem text Lorem text Lorem text
          </Text>
        </View>
        <View
          style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={TimeLogo} style={{width: 12, height: 12}}></Image>
          <Text style={{color: 'white', fontSize: 11, marginLeft: 5}}>
            28/06/2022 10:00 AM
          </Text>
        </View>
      </View>
    </View>
  );

  const Tab3 = () => (
    <View>
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Add Todo's
        </Text>
      </View>
    </View>
  );
  const Tab4 = () => (
    <View>
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Todo's
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{backgroundColor: '#0d2b3f', flex: 1}}>
      <View style={{marginTop: 25, paddingHorizontal: 20}}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
          Let's make today
        </Text>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
          count
        </Text>
      </View>
      <View
        style={{
          marginTop: 25,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'white', fontSize: 14}}>June 30th,2022</Text>
          <Text style={{color: 'white', fontSize: 12}}>Welcome Back!</Text>
        </View>
        <Image source={UserImage} style={{height: 40, width: 40}}></Image>
      </View>
      <View
        style={{
          backgroundColor: isEnabled ? '#184e46' : '#334b5f',
          borderRadius: 10,
          marginTop: 20,
          marginHorizontal: 20,
          padding: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Cameron Williamson
          </Text>
          <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>
            +91 9876543210
          </Text>
          <Text style={{color: '#50c833', fontSize: 12, marginTop: 5}}>
            Rs. 10,000.00
          </Text>
        </View>
        <View>
          <Switch
            value={isEnabled}
            onValueChange={() => {
              setisEnabled(previousState => !previousState);
            }}></Switch>
        </View>
      </View>
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabTouchable}
            onPress={() => {
              setbtnNo(0);
            }}>
            <Image source={Tab1Image} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabTouchable}
            onPress={() => {
              setbtnNo(1);
            }}>
            <Image source={Tab2Image} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabTouchable}
            onPress={() => {
              setbtnNo(2);
            }}>
            <Image source={Tab3Image} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={styles.tabTouchable}
            onPress={() => {
              setbtnNo(3);
            }}>
            <Image source={Tab4Image} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
      {btnNo == 0 ? (
        <Tab1 />
      ) : btnNo == 1 ? (
        <Tab2 />
      ) : btnNo == 2 ? (
        <Tab3 />
      ) : (
        <Tab4 />
      )}
    </View>
  );
};

export default page1;

const styles = StyleSheet.create({
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTouchable: {
    borderRadius: 7,
    backgroundColor: '#334b5f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  tabImage: {
    height: 20,
    width: 20,
    tintColor: '#8e9aad',
    zIndex: 2,
  },
  msgView: {
    backgroundColor: '#334b5f',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
