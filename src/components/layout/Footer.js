import { FaLinkedin, FaGithub } from 'react-icons/fa'

import style from './module/Footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <a href='https://www.linkedin.com/in/deyvid-gustavo-0642a2235/' target='_blanck'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/degu0' target='_blanck'>
                        <FaGithub />
                    </a>
                </li>
            </ul>
            <p className={style.copy_right}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer