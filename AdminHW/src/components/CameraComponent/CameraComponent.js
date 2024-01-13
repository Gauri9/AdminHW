import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from 'react-native';
import {Camera, useCameraDevices, useCameraDevice} from 'react-native-vision-camera';


const CameraComponent = () => {
  const camera = useRef(Camera);
  const device = useCameraDevice('front');
  // const device = devices.back;

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log('newCameraPermission:', newCameraPermission);
      // console.log('devices', device)
      console.log('showCamera:', showCamera)
      
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    console.log('capture photo')
    if (camera.current !== null) {
      console.log('in if...')
      const photo = await camera.current.takePhoto();
      setImageSource(photo.path);
      setShowCamera(false);

      // const file = await camera.current.takePhoto()
      // const result = await fetch(`file://${file.path}`)
      // const data = await result.blob();
      // setShowCamera(false);
      console.log('imagesource', imageSource)
      console.log('file.path',file.path);
    }
    else{
      console.log('in else...')
    }
  };

  if (device == null) {
    return <Text style={{color:'red'}}>Camera not available</Text>;
  }

  return (
    <>
    {showCamera ? (
      <View style={styles.container}>
         <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.camButton}
            onPress={() => capturePhoto()}
          />
        </View>
      </View>
    ) : (
      <>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#77c3ec',
              }}
              onPress={() => setShowCamera(true)}>
              <Text style={{color: '#77c3ec', fontWeight: '500'}}>
                Retake
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )}
  </>
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
}); 

export default CameraComponent;