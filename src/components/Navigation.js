import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFile, faFolder, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav className='navigation'>

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
      
        <li className='resume-icon'>
          <FontAwesomeIcon icon={faFile} />
        </li>
     
        <li className='contact-icon'>
          <FontAwesomeIcon icon={faComment} />
        </li>

      </ul>

    </nav>
  )
}

export default Navigation