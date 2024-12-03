'use client';
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CatModel } from './CatModel';

export function CatModelCanvas() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="w-full h-[300px] sm:w-[400px] sm:h-[300px]">
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
                {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
            </Canvas>
        </div>
    );
}