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
                <div id='recordPlayer'>
                    <div id='cd'>
                        <div id='cd1'>
                            <div id='cd2'>
                                <div id='cd3'>
                                    <div>
                                        <img id='profile' src={프사}  alt="사진1"/>
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