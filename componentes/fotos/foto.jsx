import React, { useState, useEffect } from "react";
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { BrowserRouter as Router, Route, Link, Switch,useLocation,useHistory } from 'react-router-dom';
import Viewer from "../viewer/viewer"
import {
    gapi
} from 'gapi';
import { fotosid } from "../../recursos/fotosid"
const Foto = () => {
    let history = useHistory();
    let location = useLocation();

    // console.log("location: ",location)
    const images = [];
    Object.keys(fotosid).forEach(e => {
        images.push(
            {
                url: "https://drive.google.com/uc?id=" + fotosid[e].fotoid
            }

        )

        // console.log("que hay en e: ", [e])
        // defaultValues[e] = "https://drive.google.com/uc?id=" + fotosid[e].fotoid;
    });

    // console.log("fotos id: ", images)
    const [isModalVisible, setisModalVisible] = useState(null);
    const [indexImg, setIndexImg] = useState(null);
    // const images = [

    //     {
    //         // Simplest usage.
    //         url: 'https://drive.google.com/uc?id=11OrKpuYZI6wz8TAQ-E1bGx0rR2KZMQVB',

    //         // width: number
    //         // height: number
    //         // Optional, if you know the image size, you can set the optimization performance

    //         // You can pass props to <Image />.
    //         props: {
    //             // headers: ...
    //         }
    //     },
    //     {
    //         // Simplest usage.
    //         url: 'https://drive.google.com/uc?id=1eKrzHKoaNb3ZE2Ds9kNF2J_KIw2S-pN8',

    //         // width: number
    //         // height: number
    //         // Optional, if you know the image size, you can set the optimization performance

    //         // You can pass props to <Image />.
    //         props: {
    //             // headers: ...
    //         }
    //     },
    //     {
    //         // Simplest usage.
    //         url: 'https://drive.google.com/uc?id=19THi4BgW0_-zBFf2-XKX19-l2VV5j01g',

    //         // width: number
    //         // height: number
    //         // Optional, if you know the image size, you can set the optimization performance

    //         // You can pass props to <Image />.
    //         props: {
    //             // headers: ...
    //         }
    //     },
    //     {
    //         // Simplest usage.
    //         url: 'https://drive.google.com/uc?id=1YKVYp2A20Uop6MS2zy8cGSLqIFrTGW4r',

    //         // width: number
    //         // height: number
    //         // Optional, if you know the image size, you can set the optimization performance

    //         // You can pass props to <Image />.
    //         props: {
    //             // headers: ...
    //         }
    //     }

    // ];
    useEffect(() => {
        // console.log("MOdal visible: ", isModalVisible)
        if (indexImg) {
            if (isModalVisible == null || isModalVisible === false) {



                setisModalVisible(true);
                // console.log("indeximg: ", typeof (indexImg));
            }
        }
    }, [indexImg]);

    const items = [];
    function clickOne(id) {
    //    setIndexImg(id)
    // history.push("/view")
     history.push
     ({
        pathname: '/view',
       
        state: { detail: id }
    });

}

    for (const [index, value] of images.entries()) {
        
        items.push(<img key={index} id={index} src={value.url} onClick={(e) => clickOne(e.target.id)} style={{ paddingTop: "2vh", paddingLeft: "2vw", paddingRight: "2vw" }} />)
    };

    const handleCancel = () => {
        setIndexImg(null)
        setisModalVisible(false);
    };

    return (
        <>
  <div style={{display:"flex",border:"1px solid white"}} >
  <div style={{display:"inline-block",color:"white",float:"right",border:"1px solid white"}} onClick={()=>history.push("/")}>
  X
      </div>
      </div>
            <Router>

                <Switch>
                    <Route  path='/view' component={Viewer}></Route>

                </Switch>
            </Router>
            <div>
                {/* <button onClick={() => handleOpenPicker()}>Open Picker</button> */}
            </div>
            {isModalVisible && (
                <Modal
                    title={<b>Imagen</b>}
                    okType="primary"
                    okText="Aceptar"
                    cancelText="Cancelar"
                    visible={true}
                    onCancel={handleCancel}
                    onClick={handleCancel}
                    onOk={handleCancel}
                    
                >
                    <ImageViewer imageUrls={images} index={Number(indexImg)} enableSwipeDown={true} onSwipeDown={handleCancel} enableImageZoom={true} />
                </Modal>

            )
            }

            {items}
        </>
    )
}
export default Foto