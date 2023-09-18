import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
        <div className="header-spacer"></div>

        <header>
          
          <ul className="brand">
            <li>
              <Link to="/">Ž</Link>
            </li>
          </ul>

          <nav>
            <ul>
              <li id="homeLink">
                <NavLink to="/">Home</NavLink>
              </li>
              <li id="aboutLink">
                <NavLink to="/about">About</NavLink>
              </li>
              <li id="portfolioLink">
                <NavLink to="/portfolio">Projects</NavLink>
              </li>
              <li id="resumeLink">
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li id="contactLink">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

        </header>
    </>
  )
};

export default Header;