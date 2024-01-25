import './projects.css'
import project1 from './img/projects/bunnyroom/토끼로고.jpg'
import architecture from './img/projects/bunnyroom/archi.png'
import db from './img/projects/bunnyroom/db.png'
import site from './img/projects/bunnyroom/site.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

function Projects(){

    const projects = {
        bunnyroom : {
            prSubTitle : "Semi Projects",
            prTitle : "Bunny Room",
            description : "첫 프로젝트로 공간 대여 서비스 '버니룸(Bunny Room)'에 참여하여 관리자의 회원, 블랙리스트, 업체, 홈페이지 설정 등을 관리하는 기능 제작하는 파트를 주로 담당했으며, 일반 이용자가 사용하는 마이페이지 기능을 보조하였고, 프로젝트의 CSS 전반에 참여, 제작하였습니다.",
            mainImg : project1,
            refImg : [architecture, db],
            github: "https://github.com/yycBunnyRoom/SEMI_PROJECT-BUNNY_ROOM"
        }
    }

    const projectList = () => {
        return Object.values(projects).map((project, index) => (
                <article key={index} className="project">
                    <img className='mainImg' src={project.mainImg}/>
                    <div className='description'>
                        <h3 className='prSubTitle'>{project.prSubTitle}</h3>
                        <h1 className='prTitle'>{project.prTitle}</h1>
                        <hr/>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 소개</h4>
                        <hr/>
                        <p>
                            {project.description}
                            <br/>
                        </p>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 아키텍처</h4>
                        <hr/>
                        {project.refImg.map((img, i) => (
                            <img key={i} className='refImg' src={img}/>
                        ))}
                        <br/>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 깃허브</h4>
                        <hr/>
                        {/* rel 속성의 noopener는 현재 활성화된 페이지와 새로운 탭에서 활성화되는 페이지를 별개의 프로세스 퓌급,
                            noreferrer는 현재 활성화된 페이지의 정보를 새로운 탭에서 활성화되는 페이지에 전달하지 않음*/}
                        <a href={project.github} target='blank' rel="noopener noreferrer"><strong>{project.prTitle}</strong>({project.github})</a>

                    </div>
                </article>
        ))

    }

    return (
        <section id="projects">
            <h2>
                <p className='subTitle'>프로젝트.</p>
                <p>Projects.</p>
            </h2>

            <div className='projectList'>
                {projectList()}
            </div>
        </section>
    )
}

export default Projects;