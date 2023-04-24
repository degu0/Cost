import style from './module/Select.module.css'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uam opção</option>
                {options.map((option) => (
                    <option value={option.name} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select