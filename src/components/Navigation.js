import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFile, faFolder, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav>

      <ul>

        <li>
          <a className='home-link' ><FontAwesomeIcon icon={faHouse} /></a>
        </li>
      
        <li>
          <a className='about-link' ><FontAwesomeIcon icon={faUser} /></a>
        </li>
      
        <li>
          <a className='portfolio-link' ><FontAwesomeIcon icon={faFolder} /></a>
        </li>
      
        <li>
          <a className='resume-link' ><FontAwesomeIcon icon={faFile} /></a>
        </li>
     
        <li>
          <a className='contact-link' ><FontAwesomeIcon icon={faComment} /></a>
        </li>

      </ul>

    </nav>
  )
}

export default Navigation