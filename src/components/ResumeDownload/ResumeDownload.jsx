import React from 'react';
import './ResumeDownload.css';
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumeDownload = () => {
  const downloadResume = () => {
    // Track download (you can add Google Analytics here later)
    console.log('Resume downloaded:', new Date().toISOString());
    
    // Download file
    const link = document.createElement('a');
    link.href = '/images/UTKARSH_RAJ_RESUME.pdf';
    link.download = 'Utkarsh_Raj_Resume.pdf';
    link.click();
  };

  const viewResume = () => {
    // Track view
    console.log('Resume viewed:', new Date().toISOString());
    
    // Open in new tab
    window.open('/images/UTKARSH_RAJ_RESUME.pdf', '_blank');
  };

  return (
    <div className="resume-download-container">
      <div className="resume-actions">
        <button className="resume-btn download-btn" onClick={downloadResume}>
          <FaDownload />
          <span>Download Resume</span>
        </button>
        <button className="resume-btn view-btn" onClick={viewResume}>
          <FaEye />
          <span>View Resume</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeDownload;
