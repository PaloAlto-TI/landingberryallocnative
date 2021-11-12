import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./App.css";
import logo from "./recursos/3Recurso 5.png";
import Video1 from "./recursos/video_berryalloc_V2.mp4"
import CountDownTimer from './componentes/CountDownTimer';
import imgfecha from './recursos/3Recurso 2.png'
import calendar from './recursos/agenda.svg'
import ubicacion from './recursos/Direccion.svg'
import foto from './recursos/Camara.svg'

export default function App() {
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
  return (
    < >
      <div className="header1" >
        <img className="logo" src={logo} />
        <hr className="divider"></hr>
      </div>

      <div className="body1" >
      <div className="divbod1" >

        <p className="contenedortitle" style={{alignItems: "center"}}>
        <span className="tittle0">floors for</span> 
        <span className="tittle0">moments</span>  
        <span className="tittle0">of joy.</span>
         </p>
         
         
      </div>
      <div className="divbod2" >
         <img  className="imgfecha" src={imgfecha}/>
        </div>
      </div>
    
      


      <div className="iframevideo1" >

        <video className="video" playsInline controls loop autoPlay muted >
        <source src={Video1} type="video/mp4" />

        </video>
      </div>
      <div className="contenedor-bajo1" >
        <div className="bajo1" >
        <img className="imgfoto" src={foto}/>
        </div>
        <div className="bajo2" >
          <p>
          <span className="al">¿Estas listo para la experiencia BerryAlloc?</span><br/>
          <span className="al">Te invitamos al lanzamiento que te hara vivir</span><br/>
          <span className="al">momentos de alegria al puro estilo europeo</span></p>

        </div>
        <div className="bajo3" >
        <img  className="imgcalendar" src={calendar}/>

        </div>
      </div>
      <div className="contador" >
        

        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>
      <div className="contenedor-bajo2" >
        <div className="bajo4" >
        {/* <img className="imgfecha" src={imgfecha}/> */}
        <p className="etiqtp">
          <span className="al1">Casa Del Rio,</span>
          <span className="al1">Quinta Lucrecia</span>
          <span className="al1">Cuenca - Ecuador</span>
          <span className="al1">Traje Cóctel</span>
          
          </p>
        </div>
      
        <div className="bajo6" >
          <p className="etiqtp1"><br/><span className="al2">www.berryalloc.com</span><br/>
         </p>

        </div>
        <div className="bajo3" >
        <img  className="imgdir" src={ubicacion}/>

        </div>
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
