import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";

import logo from "./recursos/3Recurso 5.png";



export default function App() {
  return (
    < >
    <div className="header1" >
    <img className="logo" src={logo} />
    <hr class="divider"></hr>
    </div>
    
    <div className="body1" >

        <p className="contenedortitle"> <span className="tittle0">floors for</span> <span className="tittle0">moments</span>  <span className="tittle0">of joy.</span> </p>


       {/* <a className="title1">vive la</a>
       <a className="title2"> experiencia </a>
       <a className="title3">  BERRYALLOC <br/></a> */}
       
    </div>
    <div className="iframevideo" >
    <iframe  src="https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview" width="100%" height="450px" allow="autoplay"></iframe>
    {/* <ReactPlayer url='https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview' /> */}
    </div>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    backgroundColor: '#fff',

  }
});
