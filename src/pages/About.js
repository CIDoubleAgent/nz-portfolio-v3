import React from 'react'

const About = () => {
  return (
    <section className='card'>
      <header className='card-header'>
        About Me
      </header>

      <img alt='profile' src='https://github.com/CIDoubleAgent/nz-portfolio-v3/blob/main/src/images/profile/profilePicMe_1.jpg?raw=true'>
      </img>

      <article className='card-body'>
        <p className='about-content'>
          I am a web developer from Dover New Hampshire and have been a carpenter by trade for most of my career. My hobbies include hiking the many beautiful trails and mountains of New Hampshire, playing basketball, wakeboarding, enjoying craft beer, and poking holes in movie plots.
        </p>
      </article>
    </section>
  )
}

export default About