import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFolder, faHouse, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav>

      <ul>

        <li className='home-icon'>
          <FontAwesomeIcon icon={faHouse} />
        </li>
      
        <li className='about-icon'>
          <FontAwesomeIcon icon={faUser} />
        </li>
      
        <li className='portfolio-icon'>
        <FontAwesomeIcon icon={faFolder} />
        </li>
     
        <li className='contact-icon'>
          <FontAwesomeIcon icon={faMessage} />
        </li>
      
        <li className='resume-icon'>
          <FontAwesomeIcon icon={faFile} />
        </li>

      </ul>

    </nav>
  )
}

export default Navigation