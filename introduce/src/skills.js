import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/skills.css'
import { faCss3Alt, faGithub, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlus, faCrow, faDatabase, faLeaf, faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Skills () {
    // 해당 자료는  FontAwesomeIcon을 사용하고 있어서 json으로 분리할 수 없었다.
    const frontSkills = {
        html5 : {
            name : "HTML5",
            icon : <FontAwesomeIcon icon={faHtml5} size='6x'/>
        },

        css3 : {
            name: "CSS3",
            icon : <FontAwesomeIcon icon={faCss3Alt} size="6x" />
        },

        js : {
            name : "JavaScript",
            icon : <FontAwesomeIcon icon={faJs} size='6x'/>
        },

        react : {
            name : "React",
            icon : <FontAwesomeIcon icon={faReact} size='6x'/>
        }
    }

    const frontSkillList = () => {
        // Object 객체로 변환(배열이 아니기 때문에 직접 map을 적용할 수 없다.)
        return Object.values(frontSkills).map((skill, index) => (
            <div key={index} className='skill'>
                {skill.icon}
                <label>{skill.name}</label>
            </div>
        ))
    }

    const backSkills = {
        java : {
            name : "Java",
            icon : <FontAwesomeIcon icon={faJava} size='6x'/>
        },

        spring : {
            name : "Spring",
            icon : <FontAwesomeIcon icon={faLeaf} size='6x'/>
        },

        mySql : {
            name : "MySQL",
            icon : <FontAwesomeIcon icon={faDatabase} size='6x'/>
        },

        myBatis : {
            name : "MyBatis",
            icon : <FontAwesomeIcon icon={faCrow} size='6x'/>
        },

        github : {
            name : "Github",
            icon : <FontAwesomeIcon icon={faGithub} size='6x'/>
        },

        toBeAdded : {
            name : "...To be Added!!",
            icon : <FontAwesomeIcon icon={faCirclePlus} size='6x'/>
        }
    }

    const backSkillList = () => {
        // Object 객체로 변환(배열이 아니기 때문에 직접 map을 적용할 수 없다.)
        return Object.values(backSkills).map((skill, index) => (
            <div key={index} className='skill'>
                {skill.icon}
                <label>{skill.name}</label>
            </div>
        ))
    }
    
    return (
        <section id="skills">
            <h2>
                <p className='subTitle'>스킬.</p>
                <p>Skills.</p>
            </h2>
            <div id='skillContents'>
            <article id='skillTree'>
                <img id='coffee' src='img/coffee.png' draggable='false'/>
                <h3>FrontEnd</h3>
                <div className='skillTable'>
                    {frontSkillList()}
                </div>
                <h3>BackEnd</h3>
                <div className='skillTable'>
                    {backSkillList()}
                </div>
            </article>
            </div>
        </section>
    )
}

export default Skills;