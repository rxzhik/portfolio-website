import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";


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
            Thoughts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "custom-link active" : "custom-link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
