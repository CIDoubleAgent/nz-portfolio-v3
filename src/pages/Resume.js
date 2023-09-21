import DownloadButton from "../components/DownloadButton";

const Resume = () => {
  
  return (
    <section className="resume-section">
      <div className='resume-image background-image'></div>

      <DownloadButton />

      <article className='resume-pdf'>
        <iframe 
        title="Resume" 
        src="https://docs.google.com/document/d/e/2PACX-1vTMLsviRDcxTnpF9JkDH_qzTNIgczOvFvntT7GkFuomLd60xSOj_QfT5sHmCPLHI6MRIssXvV3gbFMk/pub?embedded=true"
        />
      </article>
    </section>
  )
};

export default Resume;