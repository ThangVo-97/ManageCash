    // import React from 'react';
    // import { View, Text } from 'react-native';
    // // import { Camera, Permissions } from 'expo';

    // import {Camera} from 'expo-camera'
    // import * as Permissions from "expo-permissions"
    // import styles from './style';
    // import Toolbar from './toolbar';

    // export default class CameraPage extends React.Component {
    //   camera = null;

    //   state = {
    //     captures: [],
    //     capturing: null,
       
    //     cameraType: Camera.Constants.Type.back,
    //     flashMode: Camera.Constants.FlashMode.off,
    //   };

    //   setFlashMode = (flashMode) => this.setState({ flashMode });
    //   setCameraType = (cameraType) => this.setState({ cameraType });
    //   handleCaptureIn = () => this.setState({ capturing: true });

    //   handleCaptureOut = () => {
    //     if (this.state.capturing)
    //       this.camera.stopRecording();
    //   };

    //   handleShortCapture = async () => {
    //     const photoData = await this.camera.takePictureAsync();
    //     this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    //   };

    //   handleLongCapture = async () => {
    //     const videoData = await this.camera.recordAsync();
    //     this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    //   };

    //   render() {
    //     const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

    //     if (hasCameraPermission === null) {
    //       return <View />;
    //     } else if (hasCameraPermission === false) {
    //       return <Text>Access to camera has been denied.</Text>;
    //     }

    //     return (
    //       <React.Fragment>
    //         <View>
    //           <Camera
    //             type={cameraType}
    //             flashMode={flashMode}
    //             style={styles.preview}
    //             ref={camera => this.camera = camera}
    //           />
    //         </View>
    //         <Toolbar
    //           capturing={capturing}
    //           flashMode={flashMode}
    //           cameraType={cameraType}
    //           setFlashMode={this.setFlashMode}
    //           setCameraType={this.setCameraType}
    //           onCaptureIn={this.handleCaptureIn}
    //           onCaptureOut={this.handleCaptureOut}
    //           onLongCapture={this.handleLongCapture}
    //           onShortCapture={this.handleShortCapture}
    //         />
    //       </React.Fragment>
    //     );
    //   };
    // };