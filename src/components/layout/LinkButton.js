import { Link } from "react-router-dom";
import style from './module/LinkButton.module.css'

function LinkButton({to, text}) {
    return(
        <Link className={style.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton