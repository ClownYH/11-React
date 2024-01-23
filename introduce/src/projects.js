import './projects.css'
import project1 from './img/projects/bunnyroom/토끼로고.jpg'
import architecture from './img/projects/bunnyroom/archi.png'
import db from './img/projects/bunnyroom/db.png'
import site from './img/projects/bunnyroom/site.png'

function Projects(){

    return (
        <section id="projects">
            <h2>
                <p className='subTitle'>프로젝트.</p>
                <p>Projects.</p>
            </h2>

            <div className='projectList'>
                <article className="project">
                    <img className='mainImg' src={project1}/>
                    <div className='description'>
                        <h3 className='prSubTitle'>Semi Project</h3>
                        <h1 className='prTitle'>Bunny Room</h1>
                        <hr/>
                        <br/>
                        <h4>소개</h4>
                        <hr/>
                        <p>
                            첫 프로젝트로 공간 대여 서비스 '버니룸(Bunny Room)'에 참여하여 
                            관리자의 회원, 블랙리스트, 업체, 홈페이지 설정 등을 관리하는 기능 제작하는 파트를 주로 담당했으며, 일반 이용자가 사용하는 마이페이지 기능을 보조하였고, 프로젝트의 CSS 전반에 참여, 제작하였습니다.<br/>
                        </p>
                        <br/>
                        <h4>참고 자료</h4>
                        <hr/>
                        <img className='refImg' src={architecture}/>
                        <img className='refImg' src={db}/>
                        <img className='refImg' src={site}/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects;