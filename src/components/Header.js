import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFile, faFolder, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>

          <li>
            <a className='home-link hover' ><FontAwesomeIcon icon={faHouse} /></a>
          </li>

          <li>
            <a className='about-link hover' ><FontAwesomeIcon icon={faUser} /></a>
          </li>

          <li>
            <a className='portfolio-link hover' ><FontAwesomeIcon icon={faFolder} /></a>
          </li>

          <li>
            <a className='resume-link hover' ><FontAwesomeIcon icon={faFile} /></a>
          </li>

          <li>
            <a className='contact-link hover' ><FontAwesomeIcon icon={faComment} /></a>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header