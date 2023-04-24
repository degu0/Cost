import style from './module/Submit.module.css'

function Submit({ text }) {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}

export default Submit