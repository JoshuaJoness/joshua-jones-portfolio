import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Resume() {
  return (
        <div className="resume-container">
            <h1 className="subtitle">Resume:</h1>
            <div className="pdf-container">
                <img 
                    className="resume-image"
                    src="/images/Joshua_Jones_Full_Stack_Developer-1.png" 
                    alt="Resume" 
                />
            </div>
            <a href="/static/Joshua_Jones_Full_Stack_Developer.pdf" download className="resume-download-link">
                Download <FontAwesomeIcon icon={faDownload} />
            </a>
        </div>
  )
}
