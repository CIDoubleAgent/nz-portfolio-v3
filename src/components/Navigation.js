import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFile, faFolder, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav>

      <ul>

        <li>
          <i className='home-link' ><FontAwesomeIcon icon={faHouse} /></i>
        </li>
      
        <li>
          <i className='about-link' ><FontAwesomeIcon icon={faUser} /></i>
        </li>
      
        <li>
          <i className='portfolio-link' ><FontAwesomeIcon icon={faFolder} /></i>
        </li>
      
        <li>
          <i className='resume-link' ><FontAwesomeIcon icon={faFile} /></i>
        </li>
     
        <li>
          <i className='contact-link' ><FontAwesomeIcon icon={faComment} /></i>
        </li>

      </ul>

    </nav>
  )
}

export default Navigation