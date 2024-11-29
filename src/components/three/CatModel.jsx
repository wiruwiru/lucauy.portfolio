import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

export function CatModel() {
    const group = useRef();
    const { scene, animations } = useGLTF('/assets/black_cat.glb');
    const { actions } = useAnimations(animations, group);

    React.useEffect(() => {
        if (actions['Take 001']) {
            actions['Take 001'].play();
        }
    }, [actions]);

    // useFrame(() => {
    //     if (group.current) {
    //         group.current.rotation.y += 0.005;
    //     }
    // });

    return <primitive object={scene} ref={group} scale={[0.5, 0.5, 0.5]} />;
}