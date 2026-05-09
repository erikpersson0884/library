import './App.css'

import Footer from './layout/footer/Footer'

import Project from './components/project/Project'
import projects from './data/projects.json'

function App() {
    return (
        <>
            <h1>Erik Persson library</h1>
            <hr />
            <ul className='projects'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        github={project.github}
                        website={project.website}
                    />
                ))}
            </ul>

            <Footer />
        </>
    )
}

export default App
