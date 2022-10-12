import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/witch_hat_with_old_iron.glb");
  return (
    <group {...props} dispose={null} ref={props.reference}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-0.05, 0.82, 0.68]}
          rotation={[-0.23, -0.98, -0.33]}
          scale={0.01}
        >
          <mesh geometry={nodes.Sphere_0.geometry} material={materials.Bolt} />
        </group>
        <group position={[0.01, 0.84, 0.38]} scale={0.1}>
          <mesh
            geometry={nodes.Cube002_0.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group scale={0.33}>
          <mesh
            geometry={nodes.Cube001_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group scale={0.33}>
          <mesh
            geometry={nodes.Cube003_0.geometry}
            material={materials.Material}
          />
        </group>
        <group scale={0.33}>
          <mesh
            geometry={nodes.Cube004_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-0.01, -0.35, 0.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.16}
        >
          <mesh
            geometry={nodes.Plane_0.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group position={[-0.02, 0.08, 0.28]}>
          <mesh
            geometry={nodes.NurbsCurve_0.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group position={[0.05, 0.78, 0.6]}>
          <mesh
            geometry={nodes.Plane001_0.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            geometry={nodes.Plane001_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            geometry={nodes.Plane001_2.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          position={[0.02, 0.85, 0.43]}
          rotation={[-0.38, -0.05, -0.02]}
          scale={0.01}
        >
          <mesh
            geometry={nodes.Utug_0.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group position={[0.06, 0.84, 0.68]} scale={0.2}>
          <mesh
            geometry={nodes.Utug_clasp_0.geometry}
            material={materials.Utug_clasp}
          />
          <mesh
            geometry={nodes.Utug_clasp_1.geometry}
            material={materials.Utug_clasp_clamp}
          />
        </group>
        <group
          position={[0.06, 0.86, 0.68]}
          rotation={[0.09, 1.21, 0.44]}
          scale={0}
        >
          <mesh
            geometry={nodes["Utug-clasp-buttom_0"].geometry}
            material={materials["Utug-clasp-button"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/witch_hat_with_old_iron.glb");

export default Model;
