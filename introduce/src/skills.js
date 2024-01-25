import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './skills.css'
import { faCss3Alt, faGithub, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlus, faCrow, faDatabase, faLeaf, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import coffee from './img/coffee.png'

function Skills () {
    const skills = {
        html5 : {
            name : "HTML5",
            icon : <FontAwesomeIcon icon={faHtml5} size='8x'/>
        },

        css3 : {
            name: "CSS3",
            icon : <FontAwesomeIcon icon={faCss3Alt} size="8x" />
        },

        js : {
            name : "JavaScript",
            icon : <FontAwesomeIcon icon={faJs} size='8x'/>
        },

        react : {
            name : "React",
            icon : <FontAwesomeIcon icon={faReact} size='8x'/>
        },

        java : {
            name : "Java",
            icon : <FontAwesomeIcon icon={faJava} size='8x'/>
        },

        spring : {
            name : "Spring",
            icon : <FontAwesomeIcon icon={faLeaf} size='8x'/>
        },

        mySql : {
            name : "MySQL",
            icon : <FontAwesomeIcon icon={faDatabase} size='8x'/>
        },

        myBatis : {
            name : "MyBatis",
            icon : <FontAwesomeIcon icon={faCrow} size='8x'/>
        },

        github : {
            name : "Github",
            icon : <FontAwesomeIcon icon={faGithub} size='8x'/>
        },

        toBeAdded : {
            name : "...To be Added!!",
            icon : <FontAwesomeIcon icon={faCirclePlus} size='8x'/>
        }
    }

    const skillList = () => {
        // Object 객체로 변환(배열이 아니기 때문에 직접 map을 적용할 수 없다.)
        return Object.values(skills).map((skill, index) => (
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
                <img id='coffee' src={coffee} draggable='false'/>
                <div className='skillTable'>
                    {skillList()}
                </div>
            </article>
            </div>
        </section>
    )
}

export default Skills;