// import React from "react";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./escritorio.css";
import logocasas from "../../recursos/PC2Recurso 11.png";
import Video1 from "../../recursos/video_berryalloc_V2.mp4"
import CountDownTimer from '../CountDownTimer';
import imgfecha from '../../recursos/PC2Recurso 9.png';
import logocosas from '../../recursos/PC2Recurso 10.png';
import ubicacion from '../../recursos/PC2Recurso 8.png';
import foto from '../../recursos/PC2Recurso 7.png';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useRouteMatch, useHistory } from 'react-router-dom';
// import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
const Home = () => {
    // let tracker = new GoogleAnalyticsTracker("UA-213703225-1");assdasd
    // tracker.trackScreenView()

    console.log("tracking");

    let history = useHistory();

    //------------------------
    const video1 = React.useRef(null);
    const date_now = Math.floor(Math.floor(Date.now() / 1000));
    // const date_future = 1639008000;
    // const date_future = 1639008000;
    const date_future = 1668992400;
    if (date_now >= date_future) {
        var dias = 0;
        var horas = 0;
        var minutos = 0;
        var segundos = 0;

    }
    else {


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



        // console.log("dias: " + dias + " horas " + horas)
        // console.log("dias: " + (Math.abs(date_future - date_now)) / 86400 + " horas " + date_future)

    }
    const hoursMinSecs = { days: dias, hours: horas, minutes: minutos, seconds: segundos }

    //--------------------------
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        < >
        
            {
            <div className="container_all_Desk" > 
            <div className="container_201" > </div>
            <div className="container_202" > </div>
            
            <div className="container_203" > 
                <div className="container_203_1" > 
                <video className="video" playsInline controls loop autoPlay  >
                    <source src={Video1} type="video/mp4" />

                </video>
                
                
                </div>

                <div className="container_203_2" >
                    <div className="container_203_2_1" > </div>
                    <div className="container_203_2_2" > 
                    <div className="container_203_2_2_2" > 
                        <div className="container_203_2_2_2_1" >
                       <CountDownTimer hoursMinSecs={hoursMinSecs} />   
                        </div>
                        
                        <div className="container_203_2_2_2_3" > </div>
            
                    
                    </div>
                    </div>
                </div>
            
            </div>

            <div className="container_204" > </div>
            <div className="container_205" > 
                <div className="container_205_1" > 
                    <div className="container_205_1_1" ><b>un</b></div>
                    <div className="container_205_1_1" ><b>mundo</b></div>
                    <div className="container_205_1_1" ><b>de pisos</b></div>
                </div>
                    
                <div className="container_205_2" > </div>
                <div className="container_205_3" >
                <div className="container_205_3_1" >¿Estas listo para la esperiencia </div>
                <div className="container_205_3_1" >PALO ALTO?</div>
                <div className="container_205_3_1" >Te invitamos al Lanzamiento que te</div>
                <div className="container_205_3_1" >hará vivir momentos al puro estilo</div>
                <div className="container_205_3_1" >europeo</div>  
                </div>
                <div className="container_205_4" >
                </div>
                <div className="container_205_5" > 
                    <div className="container_205_5_1" >
                    <img className="foto" src={foto} />
                    </div>
                    <div className="container_205_5_2" >
                    <div className="container_205_5_2_2" > </div>
                    <div className="container_205_5_2_1" > </div>
                    <div className="container_205_5_2_2" > </div>
                    </div>
                    <div className="container_205_5_3" >
                    <img className="ubicacion" src={ubicacion} />
                         </div>
                    <div className="container_205_5_4" > 
                    <div className="container_205_5_2_2" > </div>
                    <div className="container_205_5_2_1" > </div>
                    <div className="container_205_5_2_2" > </div>
                    </div>
                    <div className="container_205_5_5" > 
                    <img className="ubicacion" src={imgfecha} />
                    </div>
                </div>  
            </div>
            <div className="container_206" > </div>
            <div className="container_207" > 
                <div className="container_207_1" > </div>
                <div className="container_207_2" > 
                <div className="container_207_2_1" > </div>
                <div className="container_207_2_2" >Te invita:</div>
                <div className="container_207_2_3" > </div>
                
                </div>
                <div className="container_207_3" > </div>

                <div className="container_207_4" > 
                <div className="container_207_4_1" > </div>
                <div className="container_207_4_2" ><img className="logocosas" src={logocosas} /></div>
                <div className="container_207_4_3" > </div>
                
                </div>
                <div className="container_207_5" > 
                
                
                <div className="container_207_5_1" > </div>
                <div className="container_207_5_2" >
                    <div className="container_207_5_2_2" > </div>
                    <div className="container_207_5_2_1" > </div>
                    <div className="container_207_5_2_2" > </div>

                </div>
                <div className="container_207_5_3" > </div>
                
                </div>
                <div className="container_207_6" >
                <div className="container_207_6_1" > </div>
                <div className="container_207_6_2" ><img className="logocasas" src={logocasas} /></div>
                <div className="container_207_6_3" > </div>   
                 </div>
                <div className="container_207_7" > </div>
            </div>
        </div>
            
        

            
            /* <div className="container_all" >
                <div className="container_1" >
                   
                </div>
                <div className="container_2" >
                    <video className="video" playsInline controls loop autoPlay  >
                        <source src={Video1} type="video/mp4" />

                    </video>
                </div>
                <div className="container_3" >

                </div>
                <div className="container_4" >
                    <CountDownTimer hoursMinSecs={hoursMinSecs} />
                </div>
                <div className="container_5" >

                </div>
                <div className="container_6" >
                    <div className="container_60" >

                    </div>

                    <div className="container_61" >
                        <div className="container_611" >

                        </div>
                        <div className="container_612" >
                            
                            <a>un</a>
                        </div>
                        <div className="container_612" >
                            mundo
                        </div>
                        <div className="container_612" >
                            de pisos
                        </div>

                    </div>
                    <div className="container_60" >

</div>
                    <div className="container_62" >

                    </div>
                    <div className="container_60" >

</div>
                    


                </div>
                <div className="container_7" >

                </div>
                <div className="container_8" >
                   
                </div>

            </div> */}




            {/* <div className="body1" >
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

                </div>
                <div className="bajo2" >
                    <p className="etiqtp-1">
                        <span className="al">¿Estas listo para la experiencia BerryAlloc?</span><br />
                        <span className="al">Te invitamos al lanzamiento que te hará vivir</span><br />
                        <span className="al">momentos de alegría al puro estilo europeo</span></p>

                </div>
                <div className="bajo3" >
                    <a className="imgcalendar" href="https://www.addevent.com/event/HI10109408+apple" ><img className="imgcalendar" src={calendar} /> </a>
     

                </div>
            </div>
            <div className="contador" >


                <CountDownTimer hoursMinSecs={hoursMinSecs} />
            </div>
            <div className="contenedor-bajo2" >
                <div className="bajo4" >
                  
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
            </div> */}
        </>
    )
    //----------------
};


export default Home