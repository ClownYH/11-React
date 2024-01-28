import './css/projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'
import projects from './data/projects.json'

function Projects(){ 

    const projectList = () => {
        return Object.values(projects).map((project, index) => (
                <article key={index} className="project">
                    <img className='mainImg' src={project.mainImg}/>
                    <div className='description'>
                        <h3 className='prSubTitle'>{project.prSubTitle}</h3>
                        <h1 className='prTitle'>{project.prTitle}</h1>
                        <hr/>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 제작 기간</h4>
                        <hr/>
                        <p>{project.prPeriod}</p>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 소개</h4>
                        <hr/>
                        <p>
                            {project.description}
                            <br/>
                        </p>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 사용 기술</h4>
                        <hr/>
                        <p>
                            {project.prSkills}
                        </p>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 담당 파트</h4>
                        <hr/>
                        <p>
                            {project.act1}
                        </p>
                        <p>
                            {project.act2}
                        </p>
                        <p>
                            {project.act3}
                        </p>
                        <p>
                            {project.act4}
                        </p>
                        <br/>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> 아키텍처 / DB</h4>
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
                        <a href={project.github} target='blank' rel="noopener noreferrer" style={{fontSize:"large", textDecoration:"none"}}><strong>{project.prTitle}</strong></a>

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