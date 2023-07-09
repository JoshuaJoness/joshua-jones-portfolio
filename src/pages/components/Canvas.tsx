import React from 'react'
import { Canvas } from 'react-three-fiber'
import Experience from './Experience'
import '../../styles/canvas.css'
import * as THREE from 'three'

export default function CanvasAnimation() {
  return (
    <Canvas 
        className='canvas'
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        orthographic
        camera={{
            fov: 45,
            zoom: 100,
            near: 0.1,
            far: 200,
            position: [ 3, 2, 6 ]
        }}
    >
      <Experience />
    </Canvas>
  )
}
