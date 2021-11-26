// import React from "react";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./home.css";
import logo from "../../recursos/3Recurso 5.png";
import Video1 from "../../recursos/video_berryalloc_V2.mp4"
import CountDownTimer from '../../componentes/CountDownTimer';
import imgfecha from '../../recursos/3Recurso 2.png';
import calendar from '../../recursos/agenda.svg';
import ubicacion from '../../recursos/Direccion.svg';
import foto from '../../recursos/Camara.svg';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useRouteMatch, useHistory } from 'react-router-dom';
// import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
const Home = () => {
    // let tracker = new GoogleAnalyticsTracker("UA-213703225-1");
    // tracker.trackScreenView()

    console.log("tracking");

    let history = useHistory();

    //------------------------
    const video1 = React.useRef(null);
    const date_now = Math.floor(Math.floor(Date.now() / 1000));
    const date_future = 1639008000;
    // get total seconds between the times
    var delta = Math.abs(date_future - date_now);

    // calculate (and subtract) whole days
    var dias = Math.floor(delta / 86400);
    delta -= dias * 86400;

    // calculate (and subtract) whole hours
    var horas = Math.floor(delta / 3600) % 24;
    delta -= horas * 3600;

    // calculate (and subtract) whole minutes
    var minutos = Math.floor(delta / 60) % 60;
    delta -= minutos * 60;

    // what's left is seconds
    var segundos = delta % 60;  // in theory the modulus is not required



    console.log("dias: " + dias + " horas " + horas)
    console.log("dias: " + (Math.abs(date_future - date_now)) / 86400 + " horas " + date_future)

    const hoursMinSecs = { days: dias, hours: horas, minutes: minutos, seconds: segundos }

    //--------------------------
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);
    // let { path } = useRouteMatch();


    //  alert(path);
    //--------------------------
    return (
        < >
       
            {/* <a href="https://www.google.com.ec/maps/place/Quinta+Lucrecia/@-2.9098071,-79.0198802,17z/data=!3m1!4b1!4m5!3m4!1s0x91cd18763bda06eb:0xce5b4c3efdc41545!8m2!3d-2.9098624!4d-79.0177162?hl=es">
          <img className="imgdir" src="https://drive.google.com/file/d/19m5TAccNecqTt-h_nDcqbM9Pgg_RdvBd/view" />
        </a> */}

            {/* <div className="header1" >
      <img className="logo" src={logo} />
      <hr className="divider"></hr>
    </div> */}

            <div className="body1" >
                <div className="divbod1" >

                    <p className="contenedortitle" style={{ alignItems: "center" }}>
                        <span className="tittle0">floors for</span>
                        <span className="tittle0">moments</span>
                        <span className="tittle0">of joy.</span>
                    </p>


                </div>
                <div className="divbod2" >
                    <img className="imgfecha" src={imgfecha} />
                </div>
            </div>




            <div className="iframevideo1" >

                <video className="video" playsInline controls loop autoPlay  >
                    <source src={Video1} type="video/mp4" />

                </video>
            </div>
            <div className="contenedor-bajo1" >
                <div className="bajo1" >

                   <a href="" onClick={() => history.push("/fotos")}><img className="imgfoto" src={foto} /></a> 
                   {/* <img className="imgfoto" src={foto} /> */}

                </div>
                <div className="bajo2" >
                    <p className="etiqtp-1">
                        <span className="al">¿Estas listo para la experiencia BerryAlloc?</span><br />
                        <span className="al">Te invitamos al lanzamiento que te hará vivir</span><br />
                        <span className="al">momentos de alegría al puro estilo europeo</span></p>

                </div>
                <div className="bajo3" >
                    <a className="imgcalendar" href="https://www.addevent.com/event/HI10109408+apple" ><img className="imgcalendar" src={calendar} /> </a>
                    {/* <View >
    <Menu
      visible={visible}
      anchor={<Text onPress={showMenu}>   <img className="imgcalendar" src={calendar} /></Text>}
      onRequestClose={hideMenu}
    >
      <MenuItem onPress={hideMenu}><a href="https://www.addevent.com/event/HI10109408+google" target="_blank">Agendar con Google</a></MenuItem>
      <MenuItem onPress={hideMenu}><a href="https://www.addevent.com/event/HI10109408+apple" target="_blank">Agendar con Apple</a></MenuItem>
       */}
                    {/* <MenuDivider /> */}
                    {/* <MenuItem onPress={hideMenu}><a href="https://www.addevent.com/event/HI10109408+outlookcom" target="_blank">Agendar con Outlook</a></MenuItem>
    </Menu>
  </View> */}

                </div>
            </div>
            <div className="contador" >


                <CountDownTimer hoursMinSecs={hoursMinSecs} />
            </div>
            <div className="contenedor-bajo2" >
                <div className="bajo4" >
                    {/* <img className="imgfecha" src={imgfecha}/> */}
                    <p className="etiqtp">
                        <span className="al1">Casa Del Río,</span>
                        <span className="al1">Quinta Lucrecia</span>
                        <span className="al1">Cuenca - Ecuador</span>
                        <span className="al1">Traje Cóctel</span>

                    </p>


                </div>

                <div className="bajo6" >
                    <p className="etiqtp1">
                        <br /><span className="al2">conoce más: </span>

                        <br />
                        <span className="al3" ><a className="al3" href="https://www.berryalloc.com" target="_blank">www.berryalloc.com</a></span>

                    </p>

                </div>
                <div className="bajo3" >
                    <a href="https://www.google.com.ec/maps/place/Quinta+Lucrecia/@-2.9098071,-79.0198802,17z/data=!3m1!4b1!4m5!3m4!1s0x91cd18763bda06eb:0xce5b4c3efdc41545!8m2!3d-2.9098624!4d-79.0177162?hl=es">
                        <img className="imgdir" src={ubicacion} />
                    </a>
                </div>
            </div>
        </>
    )
    //----------------
};


export default Home