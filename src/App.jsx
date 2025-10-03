import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import MilhoIcon from "./components/icons/MilhoIcon";
import PaoIcon from "./components/icons/PaoIcon";
import XicaraIcon from "./components/icons/XicaraIcon";

import foto1 from "./assets/imagens/foto.png";
import foto2 from "./assets/imagens/fotoo.png";
import foto3 from "./assets/imagens/fotooo.png";

import "./App.css";

function PanModel({ position = [0, 1.5, 0], scale = 10 }) {
  const { scene } = useGLTF("/models/pan.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default function App() {
  return (
    <div className="container">
      <div className="esquerdo">
        <h1 className="titulo">Livro de receitas</h1>
        <Canvas camera={{ position: [6, 9, 7], fov: 45 }} className="imagem">
          <ambientLight intensity={1} />
          <directionalLight position={[5, -5, 5]} intensity={1} />
          <PanModel />
          <OrbitControls />
        </Canvas>
      </div>

      <div className="direito">
        <nav className="menu">
          <h1 className="receita-titulo">Receitas</h1>

          <div className="botoes">
            <Link to="/canjica" style={{ textDecoration: "none" }}>
              <button className="canjica">
                <span className="texto">Canjica</span>
                <MilhoIcon className="icone" width={25} height={25} />
              </button>
            </Link>

            <Link to="/pao" textDecoration="none">
              <button className="pao-acucar">
                <span className="texto">Pão de açúcar</span>
                <PaoIcon className="icone" width={25} height={25} />
              </button>
            </Link>

            <button className="chocolate-quente">
              <span className="texto">Chocolate quente</span>
              <XicaraIcon className="icone" width={30} height={25} />
            </button>
          </div>
        </nav>

        <div className="criadores">
          <div className="primeiraDiv">
            <p className="nomeCriador">Isabela A.</p>
            <p className="nomeCriador">Isabela G.</p>
            <p className="nomeCriador">Giovana</p>
            <p className="nomeCriador">Mauro</p>
          </div>

          <div className="segundaDiv">
            <img src={foto2} alt="foto" className="imagemCriador" />
            <img src={foto1} alt="foto" className="imagemCriador" />
            <img src={foto3} alt="foto" className="imagemCriador" />
            <img src={foto3} alt="foto" className="imagemCriador" />
          </div>
        </div>
      </div>
    </div>
  );
}
