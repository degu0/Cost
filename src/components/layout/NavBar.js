import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/company'>Company</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/newproject'>New Project</Link>
        </div>
    )
}

export default NavBar