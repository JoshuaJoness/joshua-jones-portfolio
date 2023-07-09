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
                        {/* Not working for static HTML */}
                        {/* {bullets.map(text => <li className="card-list-item">{text}</li>)} */}
                        <li>{bullets[0]}</li>
                        <li>{bullets[1]}</li>
                        <li>{bullets[2]}</li>
                    </ul>
                </p>
                <p>{downloadText}</p>
            </div>
        </div>
  )
}
