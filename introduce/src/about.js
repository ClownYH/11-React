import 프사2 from './img/증명사진(2023).jpg'
import './about.css'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
                        "항상 <strong>배우고</strong>, 하루하루 <strong>성장</strong>하는 신입 개발자로서<br/>
                        개발한 것이 문제없이 돌아가는 것에 <strong>기쁨과 보람</strong>을 느낍니다."
                        <br/>
                        <br/>
                        "<strong className='emp'>근면, 성실</strong>의 기본을 갖춘 <strong className='emp'>노력형 인재</strong>"
                    </div>
                    <br/>
                    <br/>
                    <div id='gitPlants'>
                        <img src="https://ghchart.rshah.org/ClownYH"/>
                        <CurrentDate/>
                    </div>
                </article>

                <article className='subContents'>
                    <div className='album'>
                        <img id="picture" src={프사2} alt="프사2" draggable='false'/>
                    </div>
                    <div className='selfIntro'>
                        <h3>Profile</h3>
                        <br/>
                        <p>
                            <FontAwesomeIcon icon={faUser} /><label> 이름 </label><span>정유환</span>
                        </p>
                    </div>
                </article>
            </div>
            
        </section>
    )
}

export default About;