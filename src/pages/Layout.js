import { Outlet, Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {

  return (
    <>
      <div className="content-wrapper">
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

        <Outlet />

        <Footer />
      </div>
    </>
  )
};

export default Layout;