import 프사2 from './img/증명사진(2023).jpg'
import './about.css'

function About () {

    return (
        <section id='about'>
            <h2>
                <p className='subTitle'>어바웃.</p>
                <p>About.</p>
            </h2>
            <div className='contents'>
                <article>
                    <div>
                        "항상 <strong>배우고</strong>, 하루하루 <strong>성장</strong>하는 신입 개발자로서 개발한 것이 문제없이 돌아가는 것에 <strong>기쁨과 보람</strong>을 느낍니다."
                    </div>
                    
                    

                </article>
                <article>
                    <div className='album'>
                        <img id="picture" src={프사2} alt="프사2" draggable='false'/>
                    </div>


                    <p>
                        <label>이름 </label><span>정유환</span>
                    </p>
                    <p>
                        <label>나이 </label><span>92.08.24.</span>
                    </p>
                    <p>
                        <label>주소 </label><span>경기도 안양</span>
                    </p>
                    <p>
                        <label>학력 </label><span>한국공학대학교</span><span>(구 한국산업기술대학교)</span><span> 기계공학과 졸업</span>
                    </p>                  
                        
                </article>
            </div>
            
        </section>
    )
}

export default About;