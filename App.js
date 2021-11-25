import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import logo from "./recursos/3Recurso 5.png";

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
  // let history = useHistory();
  // history.push("/")
  useEffect(() => {
    ReactGA.initialize('G-245Y2CMQWB');
  }, []);

  useEffect(() => {
    ReactGA.pageview('/Home');
  }, []);
  //--------------------------
  return (
    < >


      <div className="header1" >
        <img className="logo" src={logo} />
        <hr className="divider"></hr>
      </div>

      <Router>


        <Switch>
          {/* <Route exact path='/info' component={Info }></Route>
         
              <Route exact path='/fotos' component={Foto }></Route>
              <Route path='/view' component={Viewer }></Route> */}
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
