/* eslint-disable */
import * as THREE from "three";

import { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import "./App.css";

const store = [
  {
    name: "outside",
    color: "lightpink",
    position: [5, 0, 15],
    url: "/fouriesburg_mountain_cloudy.jpeg",
    link: 1,
  },
  {
    name: "inside",
    color: "lightblue",
    position: [15, 0, 0],
    url: "/montorfano.jpeg",
    link: 0,
  },
];

function ContentView({ name, position, texture, onClick }: any) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[0, 32, 32]} />
        <meshBasicMaterial color="transparent" />
        <Html center>
          <a href="#" onClick={onClick}>
            <svg
              data-name="Ground Scene"
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              transform="translate(14 15)"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_14"
                    data-name="Rectangle 14"
                    width="31"
                    height="31"
                    transform="translate(0 0)"
                    fill="black"
                    stroke="black"
                    stroke-width="0.5"
                  ></rect>
                </clipPath>
                <clipPath id="clip-path-2">
                  <rect
                    id="Rectangle_14-2"
                    data-name="Rectangle 14"
                    width="32.223"
                    height="32.223"
                    transform="translate(0.171 0.162)"
                    fill="black"
                    stroke="black"
                    stroke-width="1"
                  ></rect>
                </clipPath>
              </defs>
              <path
                id="Path_96"
                data-name="Path 96"
                d="M15.17,0A15.17,15.17,0,1,1,0,15.17,15.17,15.17,0,0,1,15.17,0Z"
                transform="translate(0.33 0.33)"
                fill="black"
                stroke="white"
                stroke-width="1"
              ></path>
              <g
                id="Mask_Group_1"
                data-name="Mask Group 1"
                transform="translate(0 0)"
              >
                <g
                  id="Mask_Group_1-2"
                  data-name="Mask Group 1"
                  transform="translate(-0.805 -1.805)"
                >
                  <g
                    id="Group_220"
                    data-name="Group 220"
                    transform="translate(-63.147 7.322)"
                  >
                    <path
                      id="Path_179"
                      data-name="Path 179"
                      d="M80.655,15.323c1.1.377,2.075.618,3.472,1.047C83.59,23.155,77.174,20.461,80.655,15.323ZM86.383,9.09c-.072-2.037-.431-4.71-3.289-4.291-1.34.35-2.33,1.821-2.8,4.36a12.192,12.192,0,0,0,.195,4.53c.275.828.182.777.478.934,1.146.258,2.28.544,3.435.835C85.579,14.63,86.543,10.23,86.383,9.09Zm-8.821-.156a12.2,12.2,0,0,0,.195-4.53C77.292,1.865,76.3.393,74.961.044,72.1-.375,71.744,2.3,71.672,4.335c-.16,1.14.8,5.539,1.978,6.368,1.155-.291,2.289-.577,3.435-.835C77.38,9.711,77.287,9.762,77.562,8.934Zm-3.634,2.681c.537,6.785,6.953,4.09,3.472-1.047C76.3,10.945,75.326,11.186,73.928,11.615Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </Html>
      </mesh>
    </group>
  );
}

function Views() {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(
    THREE.TextureLoader,
    store.map((entry) => entry.url)
  );
  return (
    <ContentView onClick={() => set(link)} {...props} texture={maps[which]} />
  );
}

export default function App() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      {/* Move camera around */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        autoRotate={false}
        rotateSpeed={-0.5}
      />
      <Suspense fallback={null}>
        <Preload all />
        <Views />
      </Suspense>
    </Canvas>
  );
}
