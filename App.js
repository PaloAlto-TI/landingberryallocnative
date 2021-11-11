import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import { Video, AVPlaybackStatus } from 'expo-av';
import logo from "./recursos/3Recurso 5.png";



export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    < >
      <div className="header1" >
        <img className="logo" src={logo} />
        <hr className="divider"></hr>
      </div>

      <div className="body1" >

        <p className="contenedortitle"> <span className="tittle0">floors for</span> <span className="tittle0">moments</span>  <span className="tittle0">of joy.</span> </p>


        {/* <a className="title1">vive la</a>
       <a className="title2"> experiencia </a>
       <a className="title3">  BERRYALLOC <br/></a> SDCFSDVC*/}

      </div>
      <div className="iframevideo" >
        <iframe src="https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview" width="97%" height="450px" allow="autoplay"></iframe>
        {/* <ReactPlayer url='https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview' /> */}
      </div>
      <div className="iframevideo1" >
      <Video
        ref={video}
        // style={styles.video}
        source={{
          uri: 'https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <video src="https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview" autoplay poster="posterimage.jpg">
  Tu navegador no admite el elemento <code>video</code>.
</video>
      </div>
    </>
  );
}
//nsdflsndlf
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
