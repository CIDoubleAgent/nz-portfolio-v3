import React from 'react'

const About = () => {
  return (
    <section className='about-wrapper'>
      {/* <img className='card-background' alt='computer background' src='https://github.com/CIDoubleAgent/nz-portfolio-v3/blob/main/src/images/Project%20Images/clean-setup_1.jpg?raw=true'>
      </img> */}

      <div className='card about-card'>

        <article className='card-body'>
          {/* <img alt='profile' src='https://github.com/CIDoubleAgent/nz-portfolio-v3/blob/main/src/images/profile/profilePicMe_1.jpg?raw=true'>
          </img> */}

          <h1 className='card-header'>
            About Me
          </h1>
        
          <p>
            I am a web developer from Dover New Hampshire and have been a carpenter by trade for most of my career. My hobbies include hiking the many beautiful trails and mountains of New Hampshire, playing basketball, wakeboarding, enjoying craft beer, and poking holes in movie plots.
          </p>
        </article>
      </div>

    </section>
  )
}

export default About