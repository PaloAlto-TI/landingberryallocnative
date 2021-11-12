import React from 'react'
import "./count.css";
const CountDownTimer = ({ hoursMinSecs }) => {

    const { days = 0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[dias, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);


    const tick = () => {

        if (dias === 0 && hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([dias - 1, 24, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([dias, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dias, hrs, mins - 1, 59]);
        } else {
            setTime([dias, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    // <span className="tittle0">floors for</span>
    return (
        <div>
            <div className="contenedoralto">


                <div className="alto1">
                    <p>

                        < span className="title1">

                            {`${dias.toString().padStart(2, '0')}`}
                        </span><br />
                        <span className="title2"> dias
                        </span>

                    </p>
                </div>
                <div className="alto2">
                    <p>    <span className="title3"> :
                    </span>
                    <br />
                        <span className="title3">&nbsp;
                        </span>
                    </p>
                </div>
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                    <p>

                        < span className="title1">

                            {`${hrs.toString().padStart(2, '0')}`}
                        </span><br />
                        <span className="title2"> horas
                        </span>

                    </p>
                </div>
                <div className="alto2">
                    <p>    <span className="title3"> :
                    </span>
                    <br />
                        <span className="title3">&nbsp;
                        </span>
                    </p>
                </div>
                {/* csdc -------------------------------------------------------------*/}

                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                    <p>

                        < span className="title1">

                            {`${mins.toString().padStart(2, '0')}`}
                        </span><br />
                        <span className="title2"> minutos
                        </span>

                    </p>
                </div>
                <div className="alto2">
                    <p>
                        <span className="title3"> :

                        </span>
                        <br />
                        <span className="title3">&nbsp;
                        </span>
                    </p>
                </div>
                {/* csdc -------------------------------------------------------------*/}
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                    <p>

                        < span className="title1">

                            {`${secs.toString().padStart(2, '0')}`}
                        </span><br />
                        <span className="title2"> segundos
                        </span>

                    </p>
                </div>

                {/* csdc -------------------------------------------------------------*/}

                <div className="alto1">


                </div>
            </div>

            {/* <a className="prueba1">
                {`${dias.toString().padStart(2, '0')}:${hrs.toString().padStart(2, '0')}:${mins.toString()
                    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</a><br />
            <a style={{ color: "white", width: "50vw", fontSize: "2vw" }}>dias | horas | minutos | segundos</a> */}


        </div>
    );
}

export default CountDownTimer;