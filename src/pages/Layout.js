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
            <Link to="/">Ž</Link>
          </ul>

          <ul>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
            </li>
            <li>
              <Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link>
            </li>
            <li>
              <Link to="/portfolio"><FontAwesomeIcon icon={faFolder} /> Portfolio</Link>
            </li>
            <li>
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

export default Layout;