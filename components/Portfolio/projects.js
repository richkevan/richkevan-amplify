import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pageStyles from '@styles/Portfolio.module.css'

const Projects = (props) => {
    const [count, setCount] = useState(0)
    const [projects, setProjects] = useState(null)
    
    useEffect(() => {
        setProjects(document.getElementsByClassName("projectCards"))
    })
    const buttonScroll = (e) => {
            if (e.target.id === 'next') {
                projects[count+1].scrollIntoView({behavior: 'smooth'})
                setCount(count+1)
            }
            else if (e.target.id === 'previous') {
                projects[count-1].scrollIntoView({behavior: 'smooth'})
                setCount(count-1)
            }
    }
    
    return (
        <div className={pageStyles.projects}>
            {Object.keys(props.projects).map((project) => {
                return (
                    <div key={props.projects[project].category} className={`${pageStyles.projectCategory} projectCards`}>
                    <h3>{props.projects[project].category}</h3>
                    <ul>
                        {props.projects[project].projects.map((project) => {
                            return(
                                <li key={project['title']}>
                                    <Link href={`/portfolio/${encodeURIComponent(project['slug'])}`} passHref><h5>{project['title']}</h5></Link>
                                    <p>{project['description']}</p>
                                </li>      
                            )
                        })}
                    </ul>
                        <div className={pageStyles.scrollButton_Div}>
                        {count !== 0 && <button id='previous' onClick={buttonScroll}>Previous</button>}{count+1 !== Object.keys(props.projects).length && <button id='next' onClick={buttonScroll}>Next</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;