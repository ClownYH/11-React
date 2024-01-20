import { useEffect, useState } from 'react';
import 프사 from './img/프사.jpg'
import './welcome.css'

const CurrentTime = () => {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {
        const now = setInterval(() => {
            setTimer(new Date());
        }, 1000);
        console.log(timer);

        return (() => clearInterval(now))
    }, []);


    return (

        <p id='timer'>{timer.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</p>
    )
}

function Welcome () {

    return (
        <section id='welcome'>

            <article className='libre-barcode'>
            <p style={{fontSize:"110px"}}>WELCOME</p>
            <p style={{fontSize:"100px"}}>TO</p>
            <p style={{fontSize:"100px"}}><span style={{fontSize:"120px", color:"purple"}}>YUHWAN</span>'s</p>
            <p style={{fontSize:"150px"}}>PORTPOLIO</p>
            <br/>
            <CurrentTime/>
            </article>

            <article>
                <div id='recordPlayer'>
                    <div id='cd'>
                        <div id='cd1'>
                            <div id='cd2'>
                                <div id='cd3'>
                                    <div>
                                        <img id='profile' src={프사}  alt="사진1" draggable='false'/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id='bar'></div>
                </div>
            </article>

        </section>
    )
}

export default Welcome;