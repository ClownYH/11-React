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
                <article id='aboutContents'>
                    <div id='saying'>
                        "<strong className='emp'>근면, 성실</strong>의 기본을 갖춘 <strong className='emp'>노력형 인재</strong>"
                        <br/>
                        <br/>
                        <p style={{fontSize:"19px"}}>안녕하세요. 신입 개발자 정유환입니다. <br/>
                        새로운 기술을 배우고 이를 통해 성장하는 스스로의 모습에서 <br/>
                        큰 성취감을 느낍니다. 언제나 완성된 개발자가 되는 제 모습을 상상하며 <br/>
                        이를 현실에서 이루기 위해 노력하고 있습니다.<br/>
                        혼자만 성장하는 것보다는 <strong style={{color:"#1c64ff"}}>동료들과 함께 성장하는 개발자</strong>가 되고자 합니다.<br/>
                        받은 기대에 부응하는 모습을 보여드리고자 더욱 노력하겠습니다.<br/>
                        </p>
                        <br/>
                        <br/>
                        <br/>
                    </div>
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
                            <label><FontAwesomeIcon icon={faBook}/> </label><span>게임이나 서브컬쳐에 관심이 많음</span>
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