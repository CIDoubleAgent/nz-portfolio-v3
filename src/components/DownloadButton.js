import React from "react";
import { saveAs } from "file-saver";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://docs.google.com/document/d/e/2PACX-1vTMLsviRDcxTnpF9JkDH_qzTNIgczOvFvntT7GkFuomLd60xSOj_QfT5sHmCPLHI6MRIssXvV3gbFMk/pub';
    const filename = 'Nick-Zabkar-dev-resume';

    saveAs(pdfUrl, filename);
  };

  return (
    <button className="download-button" onClick={handleDownload}>Click Here To Download</button>
  )
}

export default DownloadButton;