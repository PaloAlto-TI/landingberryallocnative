import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link, Switch, useLocation, useHistory } from 'react-router-dom';
import Viewer from "../viewer/viewer"
import imgBack from "../../recursos/goBack.png";

import imgPlace from "../../recursos/placeholder.gif";

import { fotosid } from "../../recursos/fotosid"
import ProgressiveImage from "react-progressive-image";
import ReactPaginate from "react-paginate";
import "./foto.css";


const Foto = () => {
    let flag = false
    let history = useHistory();
    let location = useLocation();
    const items = [];

    const images = [];

    const [currentPage, setCurrentPage] = useState(0);
    console.log("esto esta en location: ", JSON.stringify(location.state))

    const [paginacion_inicial, setPaginacion_inicial] = useState(0);







    var count = 0
    Object.keys(fotosid).forEach(e => {

        images.push(
            {
                url: "https://drive.google.com/uc?id=" + fotosid[e].fotoid,
                index: count,
            }

        )
        count += 1;
    });
    //------------------------------------------------------
    const PER_PAGE = 10;
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;
    let data = images;

    const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map(({ url, index }) => <img key={index} id={index} src={url} onClick={(e) => clickOne(e.target.id)} style={{ paddingTop: "2vh", paddingLeft: "2vw", paddingRight: "2vw", width: "97vw" }} />



        );



    const pageCount = Math.ceil(data.length / PER_PAGE);
    //-------------------------------------------------------
    function clickOne(id) {

        history.push
            ({
                pathname: '/view',

                state: {
                    detail: id,
                    pagina: paginacion_inicial,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                }
            });

    }

    for (const [index, value] of images.entries()) {

        items.push(

            <img key={index} id={index} src={value.url} onClick={(e) => clickOne(e.target.id)} style={{ paddingTop: "2vh", paddingLeft: "2vw", paddingRight: "2vw", width: "97vw" }} />

        )
    };



    return (
        <>
            <div style={{ display: "flex" }} >
                <div style={{ display: "inline-block", color: "white", float: "right" }} onClick={() => history.push("/")}>
                    <img src={imgBack} style={{ height: "8vw", marginLeft: "1.8vw", border: "0.1vw solid grey", borderBottomLeftRadius: "2vw", borderBottomRightRadius: "2vw", borderTopLeftRadius: "2vw", borderTopRightRadius: "2vw" }} />

                </div>
            </div>
            <Router>

                <Switch>
                    <Route path='/view' component={Viewer}></Route>

                </Switch>
            </Router>
            <div>
            </div>


            {/* {items} */}
            {/* <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      /> */}

            {flag ?
                <div>
                    {currentPageData}
                    <br />
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                        onClick={async (e) => {
                            await setPaginacion_inicial(Number(e.nextSelectedPage));


                        }}
                        initialPage={location.state !== undefined ? location.state.pagina ? location.state.pagina : 0 : 0}
                    />

                </div>

                :
                <div className="texto1">Podras ver aquí las fotos del evento; Muy Pronto</div>
            }
        </>
    )
}
export default Foto
