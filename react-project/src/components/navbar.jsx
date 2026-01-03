import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>

      <NavLink to="/about" className="nav-link">
        About
      </NavLink>

      <NavLink to="/portfolio" className="nav-link">
        Portfolio
      </NavLink>
    </nav>
  );
}

export default Navbar;
