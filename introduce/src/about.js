import 프사2 from './img/프사2.jfif'

function About () {

    return (
        <section id='about'>
            <h2>
                <p>어바웃.</p>
                <p>About.</p>
            </h2>
            <article>
                <img src={프사2} alt="프사2" style={{width:"20rem"}}/>
            </article>
            

            <article>
                <div>
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
                        <label>Email </label><span>qwer1745@gmail.com</span>
                    </p>
                    <p>
                        <label>학력 </label><span>한국공학대학교</span><span>(구 한국산업기술대학교)</span><span> 기계공학과 졸업</span>
                    </p>                  
                    
                </div>
                <div>
                    "항상 <strong>배우고</strong>, 하루하루 <strong>성장</strong>하는 신입 개발자로서 개발한 것이 문제없이 돌아가는 것에 <strong>기쁨과 보람</strong>을 느낍니다."
                </div>
            </article>
        </section>
    )
}

export default About;