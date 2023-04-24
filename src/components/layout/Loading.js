import loading from '../../images/loading.svg'
import style from './module/Loading.module.css'


function Loading() {
    return (
        <div className={style.loading_container}>
            <img src={loading} alt='Loading' className={style.loader}/>
        </div>
    )
}

export default Loading