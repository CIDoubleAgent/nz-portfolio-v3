import { Outlet, Link } from "react-router-dom";

import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="content-wrapper">
        <nav>
          <ul className="brand">
            <li>
            <Link to="/">Ž</Link>
            </li>
          </ul>

          <ul>
            <li id="homeLink">
              <Link to="/">Home</Link>
            </li>
            <li id="aboutLink">
              <Link to="/about">About</Link>
            </li>
            <li id="portfolioLink">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li id="contactLink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Outlet />

        <Footer />
      </div>
    </>
  )
};

// const homeLink = document.getElementById('homeLink');
// const aboutLink = document.getElementById('aboutLink');
// const portfolioLink = document.getElementById('portfolioLink');
// const contactLink = document.getElementById('contactLink');

// switch(window.location) {
//   case 'http://localhost:3000/':
//     homeLink.classList.add('active-link');
//     break;
//     default:
//       homeLink.classList.remove('active-link')
//       aboutLink.classList.remove('active-link')
//       portfolioLink.classList.remove('active-link')
//       contactLink.classList.remove('active-link')
// }

export default Layout;