import type { FC } from 'react'
import './Project.css'


interface ProjectProps {
    name: string
    github: string
    website: string
}

const Project: FC<ProjectProps> = ({name, github, website}) => {
    return (
        <div className='project'>
            <h2>{name}</h2>

            <div className='links'>
                <a className='github' href={github} >GitHub</a>
                <a className='website' href={website} >Website</a>
            </div>
        </div>
    )
}

export default Project
