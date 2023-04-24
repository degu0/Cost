import { FaLinkedin, FaGithub } from 'react-icons/fa'

import style from './module/Footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p className={style.copy_right}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer