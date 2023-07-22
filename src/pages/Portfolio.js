
import React, { Component } from 'react';
import ProjectData from '../data/projects.json';

class Portfolio extends Component {
  
  render() {

    return (
      <section>
        <div className='portfolio-image background-image'></div>

        <article className=' portfolio'>
          
          {ProjectData.map((projectDetail) => {
            console.log(projectDetail.imageUrl)

            return <article className='card' key={projectDetail.id}>

              <div className='project-info'>

                <h2>{projectDetail.title}</h2>

                <p>{projectDetail.description}</p>

                <ul>
                  <li>
                    <a href={projectDetail.deployedLink} target='_blank' rel="noreferrer">
                      Deployed Site
                    </a>
                  </li>

                  <li>
                    <a href={projectDetail.repoLink} target='_blank' rel="noreferrer">
                      Repository
                    </a>
                  </li>
                </ul>
              
              </div>

            </article>
          })}
        </article>
      </section>
    )


  }
}

export default Portfolio