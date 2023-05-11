import React, { Suspense, useRef } from "react";
import heroImg from "../_images/hero_car.png";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Environment,
  Grid,
  OrbitControls,
  PresentationControls,
  Stage,
  TransformControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import * as THREE from "three";
import { useControls } from "leva";
import mapper from "../utils/mapper";
import { Model } from "./Model";

function CarElem() {
  const ref = useRef();
  const modes = ["translate", "rotate", "scale"];
  const state = proxy({ current: null, mode: 0 });
  const snap = useSnapshot(state);
  function Controls() {
    // Get notified on changes to state
    const snap = useSnapshot(state);
    const scene = useThree((state) => state.scene);
    return (
      <>
        {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
        {snap.current && (
          <TransformControls
            object={scene.getObjectByName(snap.current)}
            mode={modes[snap.mode]}
          />
        )}
        {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      </>
    );
  }

  function Ground() {
    const gridConfig = {
      cellSize: 0.5,
      cellThickness: 0.5,
      cellColor: "#6f6f6f",
      sectionSize: 3,
      sectionThickness: 1,
      sectionColor: "#9d4b4b",
      fadeDistance: 30,
      fadeStrength: 1,
      followCamera: false,
      infiniteGrid: true,
    };
    return <Grid position={[0, -0.5, 0]} args={[10.5, 10.5]} {...gridConfig} />;
  }

  function Lights() {
    const ambientCtl = useControls("Ambient Light", {
      visible: false,
      intensity: {
        value: 1.0,
        min: 0,
        max: 1.0,
        step: 0.1,
      },
    });

    const directionalCtl = useControls("Directional Light", {
      visible: true,
      position: {
        x: 3.3,
        y: 1.0,
        z: 4.4,
      },
      castShadow: true,
    });

    const pointCtl = useControls("Point Light", {
      visible: false,
      position: {
        x: 2,
        y: 0,
        z: 0,
      },
      castShadow: true,
    });

    const spotCtl = useControls("Spot Light", {
      visible: false,
      position: {
        x: 3,
        y: 2.5,
        z: 1,
      },
      castShadow: true,
    });

    return (
      <>
        <ambientLight
          visible={ambientCtl.visible}
          intensity={ambientCtl.intensity}
        />
        <directionalLight
          visible={directionalCtl.visible}
          position={[
            directionalCtl.position.x,
            directionalCtl.position.y,
            directionalCtl.position.z,
          ]}
          castShadow={directionalCtl.castShadow}
        />
        <pointLight
          visible={pointCtl.visible}
          position={[
            pointCtl.position.x,
            pointCtl.position.y,
            pointCtl.position.z,
          ]}
          castShadow={pointCtl.castShadow}
        />
        <spotLight
          visible={spotCtl.visible}
          position={[
            spotCtl.position.x,
            spotCtl.position.y,
            spotCtl.position.z,
          ]}
          castShadow={spotCtl.castShadow}
        />
      </>
    );
  }

  let cubes = [];
  const numCubes = useControls("number of Cubes", {
    number: {
      value: 10,
      min: 1,
      max: 100,
      step: 1,
    },
  });
  for (let i = 0; i < numCubes.number; i++) {
    cubes.push(
      <mesh
        castShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[mapper(Math.random(), 0, 1, -1, 1), 0, 0]}
        scale={[
          mapper(Math.random(), 0, 1, 0, 1),
          mapper(Math.random(), 0, 1, 0, 1),
          mapper(Math.random(), 0, 1, 0, 1),
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color={"white"} wireframe />
        <Environment preset="sunset" castShadow />
      </mesh>
    );
  }
  const Scene = () => {
    const materials = useLoader(MTLLoader, "../_model/obj/car.mtl");
    const obj = useLoader(OBJLoader, "../_model/obj/car.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });
    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
  };

  return (
    <div className="w-full h-full z-0">
      {/* <img
        src={heroImg}
        alt="heroImgCar"
        className=" mix-blend-lighten rounded-full"
      /> */}

      <Canvas camera={{ position: [-2, 0.8, -1.5] }} shadows className="z-0 ">
        <Suspense fallback={null}>
          <group position={[-0.8, 0, 0]}>
            <PresentationControls
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              {cubes}
              {/* <Lights /> */}
            </PresentationControls>
          </group>
          {/* <Controls /> */}
          <Ground className="z-0 " />
          {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color={"white"} />
          </mesh> */}
          <Scene />
          {/* <PresentationControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CarElem;
