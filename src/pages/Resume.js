
const Resume = () => {
  
  return (
    <section className="resume-section">
      <div className='resume-image background-image'></div>

      <a className="download-button" href="path_to_file" download="Nick Zabkar Resume">Click Here To Download</a>

      <article className='resume-pdf'>
        <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vTMLsviRDcxTnpF9JkDH_qzTNIgczOvFvntT7GkFuomLd60xSOj_QfT5sHmCPLHI6MRIssXvV3gbFMk/pub?embedded=true"></iframe>
      </article>
    </section>
  )
};

export default Resume;