import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faComment, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'

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
              <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
            </li>
            <li id="aboutLink">
              <Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link>
            </li>
            <li id="portfolioLink">
              <Link to="/portfolio"><FontAwesomeIcon icon={faFolder} /> Portfolio</Link>
            </li>
            <li id="contactLink">
              <Link to="/contact"><FontAwesomeIcon icon={faComment} /> Contact</Link>
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