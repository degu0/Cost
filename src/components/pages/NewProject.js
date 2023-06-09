import { useNavigate } from 'react-router-dom'

import style from './module/NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/project', {message: 'Projeto criado com sucesso!'})
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os servicos</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
        </div>
    )
}

export default NewProject