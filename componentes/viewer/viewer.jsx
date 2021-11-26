import React from "react";
import ImageViewer from 'react-native-image-zoom-viewer';
import { fotosid } from "../../recursos/fotosid";
import { useLocation,useHistory } from 'react-router-dom';
import imgBack from "../../recursos/goBack.png";
const Viewer = () => {
    let location = useLocation();
    let history = useHistory();

    let indexImg=0;
   try{
       
       indexImg=location.state.detail
   }
   catch(e)
   {
     
   }
    
    const images = [];
    Object.keys(fotosid).forEach(e => {
        images.push(
            {

                url: "https://drive.google.com/uc?id=" + fotosid[e].fotoid,
               
            }

        )

    });
    return(
  <>
  <div style={{display:"flex"}} >
  <div style={{display:"inline-block",color:"white",float:"right"}} onClick={()=>history.goBack()}>
      
  <img  src={imgBack} style={{height:"8vw",marginLeft:"1.8vw" ,border:"0.1vw solid grey",borderBottomLeftRadius:"2vw",borderBottomRightRadius:"2vw",borderTopLeftRadius:"2vw",borderTopRightRadius:"2vw"} } />
      </div>
      </div>
  <ImageViewer imageUrls={images} index={Number(indexImg)}  enableImageZoom={true} />

  </>
)}
export default Viewer