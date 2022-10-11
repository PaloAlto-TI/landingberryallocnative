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
     
            <div className="contenedoralto">


                <div className="alto1">
                  

                        < label className="title1">

                            {`${dias.toString().padStart(2, '0')}`}
                        </label>
                        <label className="title2"> dias
                        </label>

                    
                </div>
                <div className="alto1">
                   <label className="title1"> :
                    </label>
                   <label className="title2"> ·
                    </label>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                 
                        < label className="title1">

                            {`${hrs.toString().padStart(2, '0')}`}
                        </label>
                        <label className="title2"> horas
                        </label>

                 
                </div>
                <div className="alto1">
                   <label className="title1"> :
                    </label>
                   <label className="title2"> ·
                    </label>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}

                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                 

                        < label className="title1">

                            {`${mins.toString().padStart(2, '0')}`}
                        </label>
                        <label className="title2"> minutos
                        </label>

                 
                </div>
                <div className="alto1">
                   <label className="title1"> :
                    </label>
                   <label className="title2"> ·
                    </label>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                  

                        < label className="title1">

                            {`${secs.toString().padStart(2, '0')}`}
                        </label>
                        <label className="title2"> segundos
                        </label>

                    
                </div>

                {/* csdc -------------------------------------------------------------*/}

             
            </div>

          


     
    );
}

export default CountDownTimer;