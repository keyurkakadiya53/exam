import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const UseCamera = () => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log('Camera permission status', permission);
      if (permission === 'denied') {
        await Linking.openSettings();
      }
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View>
      {showCamera ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <View style={{}}>
            <TouchableOpacity
              style={{}}
              onPress={() => capturePhoto()}></TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default UseCamera;

const styles = StyleSheet.create({});
