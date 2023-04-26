import { parse, v4 as uuidv4 } from 'uuid'

import style from './module/Project.module.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'
import Message from '../layout/Message'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Projects() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function createService(project) {
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orcamento ultrapassado, verifique o valor do servico')
            setType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {   
                setShowServiceForm(false)
            })
            .catch((err) => console.log(err))
    }

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {   
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Servico removido com sucesso!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project) {


        if (project.budget < project.cost) {
            setMessage('O orcamento nao pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={style.project_details}>
                    <Container customClass='column'>
                        {message && <Message type={type} msg={message} />}
                        <div className={style.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={style.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>
                            {!showProjectForm ? (
                                <div className={style.project_indo}>
                                    <p><span>Categoria:</span>{project.category.id}</p>
                                    <p><span>Total de Orcamento:</span>R${project.budget}</p>
                                    <p><span>Total Utilizado:</span>R${project.cost}</p>
                                </div>
                            ) : (
                                <div className={style.project_indo}>
                                    <ProjectForm handleSubmit={editPost} btnText='Concluir edicao'
                                        projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className={style.service_form_container}>
                            <h2>Adicione um servico:</h2>
                            <button className={style.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar servico' : 'Fechar'}</button>
                            <div className={style.project_indo}>
                                {showServiceForm && (
                                    <div>
                                        <ServiceForm
                                            handleSubmit={createService}
                                            textBtn='Adicionar Servico'
                                            projectData={project}
                                        />
                                    </div>
                                )}
                            </div>
                            <h2>Servicos</h2>
                            <Container customClass='start'>
                                {services.length > 0 &&
                                    services.map((service) =>(
                                        <ServiceCard
                                            id = {service.id}
                                            name = {service.name}
                                            cost = {service.cost}
                                            description = {service.description}
                                            key = {service.id}
                                            handleRemove = {removeService}
                                        />
                                    ))
                                }
                                {services.length === 0 && <p>Nao ha servicos cadastrados.</p>}
                            </Container>
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Projects