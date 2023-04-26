import { useState } from 'react'

import Input from '../form/Input'
import Submit from '../form/Submit'

import style from '../project/module/Project.module.css'

function ServiceForm({handleSubmit, textBtn, projectData}) {
    
    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input 
                type='text'
                text='Nome de servico'
                name= 'name'
                placeholder= 'Insira o nome do servico'
                handleOnChange={handleChange}
            />
            <Input 
                type='number'
                text='Custo do servico'
                name= 'cost'
                placeholder= 'Insira o valor total'
                handleOnChange={handleChange}
            />
            <Input 
                type='text'
                text='Descricao do servico'
                name= 'description'
                placeholder= 'Descreva o servico'
                handleOnChange={handleChange}
            />
            <Submit text={textBtn}/>
        </form>
    )
}

export default ServiceForm