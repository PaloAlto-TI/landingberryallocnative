import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import logo from "./recursos/3Recurso 5.png";

import { BrowserRouter as Router, Route, Link, Switch, Routes,useRouteMatch } from 'react-router-dom';
import Info from "./componentes/info/info";
import Home from "./componentes/Home/home";
import Foto from "./componentes/fotos/foto";
import Viewer from "./componentes/viewer/viewer"
import ReactGA from 'react-ga';
export default function App() {
  useEffect(() => {
    ReactGA.initialize('G-245Y2CMQWB');
  }, []);
  useEffect(() => {
    ReactGA.pageview('/');
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
              <Route exact path='*' component={Home}></Route>
              
            
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
