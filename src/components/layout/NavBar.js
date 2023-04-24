import { Link } from 'react-router-dom'

import style from './module/Navbar.module.css'
import logo from '../../images/costs_logo.png'

function NavBar() {
    return (
        <nav className={style.navbar}>
            <Link to='/'><img src={logo} alt='Costs'></img></Link>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={style.item}>
                    <Link to='/project'>Projeto</Link>
                </li>
                <li className={style.item}>
                    <Link to='/company'>Empresa</Link>
                </li>
                <li className={style.item}>
                    <Link to='/contact'>Contanto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar