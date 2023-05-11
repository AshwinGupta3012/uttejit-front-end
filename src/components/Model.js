import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Tire.glb");
  const tireMaterial = new MeshStandardMaterial({
    color: "gray", // Replace "red" with your desired color
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tire.geometry}
        material={tireMaterial}
        position={[0.00049169, 0.29567829, 0.03836682]}
        scale={0.001}
      />
    </group>
  );
}

useGLTF.preload("/Tire.glb");
