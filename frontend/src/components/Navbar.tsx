import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import MyPDF from "../assets/resume.pdf";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="name">
          <Link className="custom-link brand" to="/">
            RASHIK RAJ
          </Link>
        </div>
        <div className="navbar-middle-links">
          <NavLink
            className={({ isActive }) =>
              isActive ? "custom-link active" : "custom-link"
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "custom-link active" : "custom-link"
            }
            to="/thoughts"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "custom-link active" : "custom-link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <a href={MyPDF} className="dwl_link" download="rashik_resume.pdf">
            Resume <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
