import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import { Video, AVPlaybackStatus } from 'expo-av';
import logo from "./recursos/3Recurso 5.png";
import Video1 from "./recursos/video_berryalloc_V2.mp4"
import {https} from 'https';

export default function App() {
  const video1 = React.useRef(null);
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
      {/* <div className="iframevideo" >
        <iframe src="http://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview" width="97%" height="450px" allow="autoplay"></iframe>
       
      </div> */}
      <div className="iframevideo1" >
    
      
      <video className="video" src={Video1} shouldPlay autoPlay controls loop></video>
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
