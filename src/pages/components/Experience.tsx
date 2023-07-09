import { ScrollControls } from '@react-three/drei'
import { Environment, OrbitControls } from 'drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { BufferGeometry, Group, Material, Mesh, NormalBufferAttributes } from 'three'

export default function Experience() {
    const groupRef: React.MutableRefObject<Group | null> = useRef(null)

    // useFrame((state, delta) => {
    //     if (groupRef.current)
    //         groupRef.current.rotation.y += delta
    // })

    return (
        <>
            {/* <OrbitControls enableZoom={false} /> */}

            <directionalLight position={[ 1, 2, 3 ]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <group ref={groupRef}>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color='mediumpurple' />
                </mesh>
                <mesh position-x={2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='orange' />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenYellow' />
            </mesh>
        </>
    )
}