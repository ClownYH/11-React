import './contact.css'

function Contact () {

    return (
        <section id="contact">
            <h2>
                <p className='subTitle'>콘택트.</p>
                <p>Contact.</p>
            </h2>

            <div id='board1'>
                <div id='board2'>
                    <article className='contactBoard'>
                        <p>
                            감사합니다.<br/>
                            언제나 노력하는<br/>
                            개발자가 되겠습니다.
                        </p>
                    </article>
                    <article className='contactBoard'>
                        <h3>Contact to</h3>
                        <hr/>
                        <br/>
                        <a href='https://github.com/ClownYH' target='blank'><strong>github</strong> 바로가기</a>
                        <br/>
                        <br/>
                        <a href='mailto:qwer1745@gmail.com'>이메일 보내기</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact;