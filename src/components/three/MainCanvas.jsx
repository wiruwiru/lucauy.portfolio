'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CatModel } from './CatModel';

export function MainCanvas() {
    return (
        <div className="w-[400px] h-[300px]">
            <Canvas
                camera={{
                    position: [20, 15, 3],
                    fov: 45,
                    near: 0.1,
                    far: 1000
                }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <CatModel />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
