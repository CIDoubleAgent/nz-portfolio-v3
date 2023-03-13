import React, { Component } from 'react';
import ProjectData from '../data/projects.json';
// import image from '../images/project-images/hungry-snake_1.png'

class Portfolio extends Component {
  render() {
    return (
      <section>
        <div className='portfolio-image background-image'></div>

        <article className=' portfolio'>
          {ProjectData.map((projectDetail) => {
            return <article className='card' key={projectDetail.id}>

              <h2>
                {projectDetail.title}
              </h2>

              <div className='spacer'></div>

              <p>
                {projectDetail.description}
              </p>

              <ul>
                <li>
                  <a href={projectDetail.deployedLink}>
                    Deployed Site
                  </a>
                </li>

                <li>
                  <a href={projectDetail.repoLink}>
                    Repository
                  </a>
                </li>
              </ul>
            </article>
          })}
        </article>
      </section>
    )


  }
}

// export default ProjectList

// const Portfolio = () => {
//   return (
//     <section>
//       <div className='portfolio-image background-image'></div>

//       <div className='portfolio'>
//         <h1>Portfolio</h1>
//         <div className='portfolio-grid'>

//         </div>
//       </div>
//     </section>
//   )
// }

export default Portfolio