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
                  

                        < div className="title1">

                            {`${dias.toString().padStart(2, '0')}`}
                        </div>
                        < div className="title00">

                        </div>
                        <div className="title2"> dias
                        </div>

                    
                </div>
                
                <div className="alto2">
                   <div className="title3"> :
                    </div>
                   <div className="title4"> 
                    </div>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                 
                        < div className="title1">

                            {`${hrs.toString().padStart(2, '0')}`}
                        </div>
                        < div className="title00">

                        </div>
                        <div className="title2"> horas
                        </div>

                 
                </div>
                <div className="alto2">
                   <div className="title3"> :
                    </div>
                   <div className="title4"> 
                    </div>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}

                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                 

                        < div className="title1">

                            {`${mins.toString().padStart(2, '0')}`}
                        </div>
                        < div className="title00">

                        </div>
                        <div className="title2"> minutos
                        </div>

                 
                </div>
                <div className="alto2">
                   <div className="title3"> :
                    </div>
                   <div className="title4"> 
                    </div>
               
                      
                   
                </div>
                {/* csdc -------------------------------------------------------------*/}
                {/* csdc -------------------------------------------------------------*/}


                <div className="alto1">
                  

                        < div className="title1">

                            {`${secs.toString().padStart(2, '0')}`}
                        </div>
                        < div className="title00">

                        </div>
                        <div className="title2"> segundos
                        </div>

                    
                </div>

                {/* csdc -------------------------------------------------------------*/}

             
            </div>

          


     
    );
}

export default CountDownTimer;