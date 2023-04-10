import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import UserImage from './../rec/user1.png';
import Tab1 from './../rec/tab1.png';
import Tab2 from './../rec/tab2.png';
import Tab3 from './../rec/tab3.png';
import Tab4 from './../rec/tab4.png';

const page1 = () => {
  const [isEnabled, setisEnabled] = useState(false);
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
          <TouchableOpacity style={styles.tabTouchable}>
            <Image source={Tab1} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity style={styles.tabTouchable}>
            <Image source={Tab2} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity style={styles.tabTouchable}>
            <Image source={Tab3} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity style={styles.tabTouchable}>
            <Image source={Tab4} style={styles.tabImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
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
      <View
        style={{
          backgroundColor: '#334b5f',
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
        <View></View>
      </View>
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
  },
});
