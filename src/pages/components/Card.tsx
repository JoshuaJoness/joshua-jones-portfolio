import React from 'react'
import ReactPlayer from 'react-player'

interface CardProps {
    title: string;
    description: string;
    bullets: string[];
    downloadText: string;
    downloadLink: string;
}

export default function Card({ title, description, bullets, downloadText, downloadLink }:CardProps) {
  return (
        <div className="card">
            <div className="video-wrapper">
                <ReactPlayer
                    className='react-player fixed-bottom'
                    url= '/videos/calorieCam.mp4'
                    controls={true}
                    playing={true}
                    loop={true}
                    muted
                />
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p className="card-description">{description}</p>
                <p className="card-description"> 
                Key Features:
                    <ul>
                        <li>Image-Based Caloric Results</li>
                        <li>Effortless Tracking</li>
                        <li>Minimalistic Design</li>
                    </ul>
                </p>
                <a href={downloadLink}>{downloadText}</a>
            </div>
        </div>
  )
}
