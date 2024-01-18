import 프사 from './img/프사.jpg'
import './welcome.css'

function Welcome () {

    return (
        <section id='welcome'>

            <article>
            <p>WELCOME</p>
            <p>TO</p>
            <p><span>YUHWAN</span>'s</p>
            <p>PORTPOLIO</p>
            </article>

            <article>
                <div style={{backgroundColor:"brown"}}>
                    받침
                    <div style={{backgroundColor:"silver"}}>
                        시디1
                        <div style={{backgroundColor:"grey"}}>
                            시디2
                            <div style={{backgroundColor:"white"}}>
                                빛 반사
                                <div style={{backgroundColor:"darkgrey"}}>
                                    시디3
                                    <div style={{backgroundColor:"red"}}>읽는 거</div>
                                    <img src={프사} style={{width:"20rem"}} alt="사진1"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default Welcome;