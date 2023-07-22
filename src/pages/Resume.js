
const Resume = () => {
  
  return (
    <section className="resume-section">
      <div className='resume-image background-image'></div>

      <a className="download-button" href="https://github.com/CIDoubleAgent/nz-portfolio-v3/blob/main/src/images/resume/Nicholas%20Zabkar%20Dev%20Resume%207_20_2023.pdf" target='_blank' rel="noreferrer" download="Nick Zabkar Resume">Click Here To Download</a>

      <article className='resume-pdf'>
        <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vTMLsviRDcxTnpF9JkDH_qzTNIgczOvFvntT7GkFuomLd60xSOj_QfT5sHmCPLHI6MRIssXvV3gbFMk/pub?embedded=true"></iframe>
      </article>
    </section>
  )
};

export default Resume;