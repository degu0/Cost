import style from './module/Container.module.css'

function Container(props) {
    return <div className={`${style.container} ${props.customClass}`}>{props.children}</div>
}

export default Container