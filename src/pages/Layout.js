import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'

import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="content-wrapper">
        {/* <div className="nav-wrapper"> */}
          <nav>
            <ul>
              <div className="brand">
                <Link to="/">Ž</Link>
              </div>
            </ul>

            <ul>
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
        {/* </div> */}

        <Outlet />

        <Footer />
      </div>
    </>
  )
};

export default Layout;