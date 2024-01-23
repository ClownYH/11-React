import { useEffect, useRef, useState } from 'react';
import 프사 from './img/프사.jpg'
import './welcome.css'
import music from "./music/a-jazz-piano.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons';

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
    const [isPlaying, setIsPlaying] = useState(false);

    // const audio = document.getElementById("backgroundMusic");
    const audioRef = useRef(null); // 상태를 참조해옴

    const playMusic = () => {
        const audio = audioRef.current;
        if(audio){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const stopMusic = () => {
        const audio = audioRef.current;
        if(audio){
            audio.currentTime = 0;
            audio.pause();
            setIsPlaying(false);
        }
    }

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
                    <div id='musicPlayer'>
                    <audio id='backgroundMusic' src={music} ref={audioRef} autoPlay={true} loop/>
                    <button id='play' onClick={playMusic}>{isPlaying? <FontAwesomeIcon icon={faCirclePause}/> : <FontAwesomeIcon icon={faCirclePlay}/>}</button>
                    <button id='stop' onClick={stopMusic}><FontAwesomeIcon icon={faCircleStop}/></button>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default Welcome;