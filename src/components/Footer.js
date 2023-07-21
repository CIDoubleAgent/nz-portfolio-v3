import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <ul>

        <li>
        <a href='https://github.com/CIDoubleAgent' target='_blank' rel="noreferrer"><FaGithub /></a>
        </li>
        
        <li>
          <a href='https://www.linkedin.com/in/nicholas-zabkar-a730b457/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
        </li>

      </ul>
    </div>
  )
}

export default Footer