import React from 'react'
import Card from './Card'

export default function Portfolio() {
  return (
        <div className="portfolio-container">
            <h1 className="subtitle">I build apps like:</h1>
            <Card 
                title="Calorie Cam" 
                description="Simplifies daily calorie tracking without sign-up."
                bullets={ [ "Image-Based Caloric Results", "Effortless Tracking", "Minimalistic Design" ] }
                downloadText="Download Calorie Cam from the Apple App Store."
                downloadLink="https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1"
            />
        </div>
  )
}
