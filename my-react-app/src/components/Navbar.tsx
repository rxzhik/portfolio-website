import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="name">
            <NavLink to="/">RASHIK RAJ</NavLink>
        </div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/thoughts">Thoughts</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </div>
        <div className="about">
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar