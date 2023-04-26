import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import style from './module/Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import Loading from '../layout/Loading'
import ProjectCard from '../project/ProjectCard'

function Project() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            {projectMessage && <Message type='success' msg={projectMessage} />}
            <Container customClass='start'>
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project?.category?.id}
                        key={project.id}
                        handleRemove={removeProject}
                    />)}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Nao ha projetos cadastrados!</p>
                )}
            </Container>

        </div>
    )
}

export default Project