import React from "react";
import ImageViewer from 'react-native-image-zoom-viewer';
import { fotosid } from "../../recursos/fotosid"
import { useLocation,useHistory } from 'react-router-dom';
const Viewer = () => {
    let location = useLocation();
    let history = useHistory();
// console.log("location: ",location);
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

        // console.log("que hay en e: ", [e])
        // defaultValues[e] = "https://drive.google.com/uc?id=" + fotosid[e].fotoid;
    });
    return(
  <>
  <div style={{display:"flex",border:"1px solid white"}} >
  <div style={{display:"inline-block",color:"white",float:"right",border:"1px solid white"}} onClick={()=>history.push("/fotos")}>
      
      X
      </div>
      </div>
  <ImageViewer imageUrls={images} index={Number(indexImg)}  enableImageZoom={true} />

  </>
)}
export default Viewer