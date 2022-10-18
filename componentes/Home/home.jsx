// import React from "react";
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import "./home.css";
import "./escritorio.css";
// import logo from "../../recursos/3Recurso 5.png";
import Video1 from "../../recursos/video_paloalto.mp4"
import CountDownTimer from '../../componentes/CountDownTimer';
// import imgfecha from '../../recursos/3Recurso 2.png';
import camera from '../../recursos/2Recurso_1.png';
import logocasas from "../../recursos/PC2Recurso 11.png";
import ubicacion from '../../recursos/2Recurso_2.png';
import fecha from '../../recursos/2Recurso_3.png';
import logo1 from '../../recursos/2Recurso_4.png';
import logo2 from '../../recursos/2Recurso_6.png';
import header from '../../recursos/2Recurso_13.png';
import texto1 from '../../recursos/2Recurso_14.png';
import texto2 from '../../recursos/2Recurso_19.png';
import texto4 from '../../recursos/2Recurso_21.png';

import imgfecha from '../../recursos/PC2Recurso 9.png';
import logocosas from '../../recursos/PC2Recurso 10.png';
import ubicacionpc from '../../recursos/PC2Recurso 8.png';
import foto from '../../recursos/PC2Recurso 7.png';

// import ubicacion from '../../recursos/Direccion.svg';
// import foto from '../../recursos/Camara.svg';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useRouteMatch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
// import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
const Home = () => {
    const windowWidth = Dimensions.get('window').width;
    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        // Actualiza el título del documento usando la API del navegador
        console.log("Esto ha en el width ", windowWidth)
    });




    // let tracker = new GoogleAnalyticsTracker("UA-213703225-1");
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
            {windowWidth < 800 ?
                <div className="container_all" >
                    <div className="container_1" >
                        <div className="container_11" >
                            <a className="image"  >
                                <img className="imgcamera" src={header} />
                            </a>
                        </div>

                    </div>
                    <div className="container_2" >
                        <video className="video" playsInline controls loop autoPlay  >
                            <source src={Video1} type="video/mp4" />

                        </video>
                    </div>
                    <div className="container_3" >

                    </div>
                    <div className="container_4" >
                        <div className="container_40" >
                        </div>
                        <div className="container_41" >

                            <CountDownTimer hoursMinSecs={hoursMinSecs} />
                        </div>
                        <div className="container_40" >
                        </div>
                    </div>

                    <div className="container_5" >

                    </div>
                    <div className="container_6" >
                        <div className="container_60" >

                        </div>

                        <div className="container_61" >

                            <div className="container_611" >

                            </div>
                            <div className="container_6img" >
                                <a className="image"  >
                                    <img className="imgcamera" src={texto1} />
                                </a>

                            </div>

                            {/* <div className="container_612" >

                                <a>un</a>
                            </div>
                            <div className="container_612" >
                                mundo
                            </div>
                            <div className="container_612" >
                                de pisos
                            </div> */}

                        </div>
                        <div className="container_60" >

                        </div>
                        <div className="container_62" >
                            <div className="container_621" >

                                <div className="container_6211" >
                                    {/* <a className="image" href="https://www.addevent.com/event/HI10109408+apple" > */}
                                    <a className="image"  >
                                        <img className="imgcamera" src={camera} />
                                    </a>

                                </div>
                                <div className="container_621_1" >

                                </div>
                                <div className="container_621_0" >

                                </div>
                                <div className="container_621_2" >

                                </div>

                                <div className="container_6211" >
                                    {/* <a className="image" href="https://www.addevent.com/event/HI10109408+apple" > */}
                                    <a className="image"  >
                                        <img className="imgcamera" src={ubicacion} />
                                    </a>

                                </div>

                                <div className="container_621_2" >

                                </div>
                                <div className="container_621_0" >

                                </div>
                                <div className="container_621_1" >

                                </div>

                                <div className="container_6212" >
                                    {/* <a className="image" href="https://www.addevent.com/event/HI10109408+apple" > */}
                                    <a className="image"  >
                                        <img className="imgcamera" src={fecha} />
                                    </a>

                                </div>
                                <div className="container_621_1" >

                                </div>


                            </div>
                            <div className="container_620" >

                            </div>
                            <div className="container_622" >
                                <div className="container_6221" >
                                <a className="image"  >
                                    <img className="imgcamera" src={texto2} />
                                </a>
                                    {/* <div className="container_62211" > ¿Estás listo para la

                                    </div>
                                    <div className="container_62211" >experiencia PALO ALTO?



                                    </div>
                                    <div className="container_62211" >Te invitamos al lanzamiento



                                    </div>
                                    <div className="container_62211" >que te hará vivir momentos unicos.



                                    </div> */}
                                    {/* <div className="container_62211" > al puro estilo europeo.



                                    </div> */}


                                </div>
                                <div className="container_6222" >

                                </div>
                            </div>

                        </div>
                        {/* <div className="container_60" >

</div> */}



                    </div>
                    <div className="container_7" >
                        <div className="container_71" >

                        </div>
                        <div className="container_72" >
                            <div className="container_723" >
                                Traje cóctel

                            </div>
                            <div className="container_724" >


                            </div>

                        </div>
                        <div className="container_73" >

                        </div>
                        <div className="container_74" >
                            <a className="container_74_text" href='https://www.paloalto.com.ec'>www.paloalto.com.ec</a>
                        </div>
                        <div className="container_75" >

                        </div>
                    </div>
                    <div className="container_8" >
                    <a className="image2"  >
                                    <img className="imgfoot" src={texto4} />
                                </a>
                        {/* <div className="container_80" >

                        </div>
                        <div className="container_81" >
                            
                            <div className="container_812" >

                                <div className="container_8121" >



                                </div>
                                <div className="container_8122" >
                                    Te Invita:


                                </div>

                            </div>
                            <div className="container_811" >

                            </div>

                        </div>


                        <div className="container_82" >
                            <div className="container_821" >
                                <div className="container_8211" >

                                </div>
                                <div className="container_8212" >
                                    <div className="container_82121" >
                                        <a className="image" >
                                            <img className="imgcamera" src={logo1} />
                                        </a>

                                    </div>
                                    <div className="container_82122" >

                                    </div>

                                </div>
                            </div>
                            <div className="container_820" >
                                <div className="container_8201" >

                                </div>
                                <div className="container_8202" >

                                </div>
                            </div>
                            <div className="container_822" >
                                <div className="container_8221" >

                                </div>
                                <div className="container_8222" >
                                    <div className="container_82221" >

                                    </div>
                                    <div className="container_82222" >
                                        <a className="image" >
                                            <img className="imgcamera" src={logo2} />
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="container_83" >

                        </div> */}


                    </div>

                </div>




                :
                < >


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
                                <div className="container_205_3_1" >¿Estás listo para la experiencia </div>
                                <div className="container_205_3_1" >PALO ALTO?</div>
                                <div className="container_205_3_1" >Te invitamos al Lanzamiento que te</div>
                                <div className="container_205_3_1" >hará vivir momentos al puro estilo</div>
                                <div className="container_205_3_1" >europeo.</div>
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
                                    <img className="ubicacion" src={ubicacionpc} />
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








                </>
            }
        </>
    )
    //----------------
};


export default Home