import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
// import logo from "./recursos/3Recurso 5.png";

import { BrowserRouter as Router, Route, Link, Switch, Routes, useRouteMatch, useHistory,Redirect } from 'react-router-dom';
import Info from "./componentes/info/info";
import Home from "./componentes/Home/home";
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
      
    

    </>
  );
}

