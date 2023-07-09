import React from 'react'

export default function Contact() {
  return (
        <>
        <div className="contact-container">
            <img src="/images/profilePic.png" className="contact-image" />
            <div className="contact-link-container">
                <a href="https://github.com/joshuajoness" target="blank">GitHub</a>
                <a href="https://www.linkedin.com/in/joshuajoness/" target="blank">LinkedIn</a>
            </div>
            </div>
        <footer className="footer">
            <span className="contact-link">438-458-8808</span>
            <span> | </span>
            <span className="contact-link">mrjoshuajones@protonmail.com</span>
        </footer>
        </>
  )
}
