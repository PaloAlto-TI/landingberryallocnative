import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
//import logo from "./recursos/3Recurso 5.png";

import { BrowserRouter as Router, Route, Link, Switch, Routes, useRouteMatch, useHistory,Redirect } from 'react-router-dom';
import Info from "./componentes/info/info";
import Home from "./componentes/Home/home";
//import Escritorio from "./componentes/Home/Escritorio";
import Foto from "./componentes/fotos/foto";
import Viewer from "./componentes/viewer/viewer"
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';




export default function App() {
 const TagManagerArgs={
   gtmId:"GTM-WV8KBPD"
 }


 TagManager.initialize(TagManagerArgs)
 TagManager.dataLayer({
   dataLayer:{
     event:"pageview",
     path:"home"
   }
 })

  useEffect(() => {
    ReactGA.initialize('G-245Y2CMQWB');
    ReactGA.initialize('G-ZD411R44NR');
    ReactGA.initialize('G-JJPBCHL3VR');
  }, []);

  useEffect(() => {
    ReactGA.pageview('/Home');
  }, []);
  //--------------------------
  return (
    < >


      

      <Router>


        <Switch>
          {/* <Route exact path='/info' component={Info }></Route> */}
         
              <Route exact path='/fotos' component={Foto }></Route>
              <Route path='/view' component={Viewer }></Route>
          <Route  path='/Home' component={Home}>
          
          </Route>
          <Route exact path='*'>
          <Redirect to="/Home"/>
          </Route>


        </Switch>
      </Router>
      
    

<<<<<<< HEAD
        <p className="contenedortitle"> <span className="tittle0">floors for</span> <span className="tittle0">moments</span>  <span className="tittle0">of joy.</span> </p>


       {/* <a className="title1">vive la</a>
       <a className="title2"> experiencia </a>
       <a className="title3">  BERRYALLOC <br/></a> SDCFSDVC*/}
       
    </div>
    <div className="iframevideo" >
    <iframe  src="https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview" width="97%" height="450px" allow="autoplay"></iframe>
    {/* <ReactPlayer url='https://drive.google.com/file/d/1F2jGc8lW0DT-dF3UgQ__KJNdXiad5Qjy/preview'sdvsdvsd /> */}
    </div>
</>
=======
    </>
>>>>>>> 12986b4c30279ff600a987876f9937c9067714dc
  );
}

