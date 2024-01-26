import './css/about.css'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHand, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';

const CurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const now = setInterval(() => {
            setDate(new Date());
        }, 1000);
        console.log(date);

        return (() => clearInterval(now))
    }, []);

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };

    return (

        <p style={{color:'black', textAlign:'right', fontWeight:'bold'}}>{date.toDateString('ko-KR', options)}</p>
    )
}

function About () {

    return (
        <section id='about'>
            <h2>
                <p className='subTitle'>어바웃.</p>
                <p>About.</p>
            </h2>
            <div className='contents'>
                <article>
                    <div id='saying'>
                        "<strong>경험과 노력</strong>으로 쌓는 실력은<br/>저를 더 <strong>단단하게</strong> 담금질합니다."<br/>
                        <br/>
                        "그래서 저는 더 많은 기회를 원합니다."
                        <br/>
                        <br/>
                        "<strong className='emp'>근면, 성실</strong>의 기본을 갖춘 <strong className='emp'>노력형 인재</strong>"
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div id='gitPlants'>
                        <img src="https://ghchart.rshah.org/2697bf/ClownYH"/>
                        <CurrentDate/>
                    </div>
                </article>

                <article className='subContents'>
                    <div className='album'>
                        <img id="picture" src='/img/증명사진(2023).jpg' alt="프사2" draggable='false'/>
                    </div>
                    <div className='selfIntro'>
                        <h3>Profile</h3>
                        <br/>
                        <p>
                            <label><FontAwesomeIcon icon={faUser} /> </label><span>정유환</span>
                        </p>
                        <p>
                            <label><FontAwesomeIcon icon={faHand}/> </label><span>전형적인 INFP</span>
                        </p>
                        <p>
                            <label><FontAwesomeIcon icon={faBook}/> </label><span>독서, 게임</span>
                        </p>
                        <p>
                            <label><FontAwesomeIcon icon={faUpload}/> </label><span>qwer1745@gmail.com</span>
                        </p>
                    </div>
                </article>
            </div>
            
        </section>
    )
}

export default About;