import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Facebook from './../rec/facebook.png';
import Background from './../rec/bg.png';
import UserNameImage from './../rec/user.png';
import PasswordImage from './../rec/password.png';

const WelcomeScreen = () => {
  const [first, setfirst] = useState(true);
  const [text, setText] = useState('');
  const [pass, setPassword] = useState('');
  const str = 'kdsfjnaklsf';

  return first ? (
    <>
      <View></View>
      <View style={styles.bgYellow}>
        <View style={styles.view1}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome</Text>
          <Text allowFontScaling={false} style={{marginTop: 10, fontSize: 12}}>
            {`Dummy text: { platform:iOS, ${str}id:dvtdevice-DVTiPhonePlaceholder-iphoneos:placeholder, name:Any iOS Device }`}
          </Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            onPress={() => {
              console.log('signin press');
              setfirst(false);
            }}
            style={[styles.btnLogIn, {backgroundColor: '#373737'}]}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnLogIn, {backgroundColor: 'white'}]}>
            <Text style={{color: 'black'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <Text style={{marginEnd: 5}}>Sign in with</Text>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Facebook} style={styles.btnFacebookStyle}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  ) : (
    <>
      <ImageBackground
        source={Background}
        resizeMode="stretch"
        style={{height: '100%', width: '100%'}}>
        <View style={styles2.loginContainer}>
          <View style={styles2.userInputStyle}>
            <View style={{flex: 1}}>
              <Image
                source={UserNameImage}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'grey',
                }}
              />
            </View>
            <TextInput
              textContentType="name"
              value={text}
              onChangeText={text => {
                console.log(text);
                setText(text);
              }}
              placeholder="Enter Username"
              style={{height: 40, flex: 8}}
            />
          </View>
          <View style={styles2.userInputStyle}>
            <View style={{flex: 1}}>
              <Image
                source={PasswordImage}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'grey',
                }}
              />
            </View>
            <TextInput
              secureTextEntry={true}
              value={pass}
              onChangeText={pass => {
                console.log(pass);
                setPassword(pass);
              }}
              placeholder="Enter Password"
              style={{height: 40, flex: 8}}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#47c153',
              borderRadius: 20,
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                paddingVertical: 12,
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1,
                elevation: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
            }}
            onPress={() => {
              setfirst(true);
            }}>
            <Text style={{}}>Go back to first page</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bgYellow: {
    backgroundColor: '#ffd11e',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '50%',
    bottom: 0,
    position: 'absolute',
  },
  btnLogIn: {
    borderRadius: 25,
    marginHorizontal: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    elevation: 10,
    shadowOffset: {width: 0, height: 5},
    paddingVertical: 12,
  },
  view1: {
    marginTop: 30,
    marginHorizontal: 30,
    flex: 2,
    justifyContent: 'center',
  },
  view2: {
    marginHorizontal: 35,
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  view3: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  btnFacebookStyle: {
    width: 20,
    height: 20,
    marginStart: 5,
  },
});

const styles2 = StyleSheet.create({
  loginContainer: {
    marginStart: Platform.OS === 'ios' ? 28 : 30,
    height: '48%',
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 27,
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 30,
    marginBottom: Platform.OS === 'ios' ? 45 : 52,
  },
  userInputStyle: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
