import React from "react";
import "./ReceitasPages.css";
import canjicaFoto from "../assets/imagens/canjica.png";

export default function Canjica() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        <h1>🍚 Canjica Brasileira (América Portuguesa)</h1>

        <h2>Ingredientes</h2>
        <ul>
          <li>500 g de milho para canjica (milho branco)</li>
          <li>1 litro de leite</li>
          <li>1 lata de leite condensado</li>
          <li>200 ml de leite de coco</li>
          <li>1 xícara de açúcar (opcional)</li>
          <li>1 pau de canela</li>
          <li>Canela em pó para polvilhar</li>
        </ul>

        <h2>Modo de preparo</h2>
        <ol>
          <li>Deixe o milho de molho em água por pelo menos 8 horas.</li>
          <li>Cozinhe o milho na panela de pressão até ficar macio (cerca de 40 minutos).</li>
          <li>Escorra o excesso de água, deixando um pouco do caldo do cozimento.</li>
          <li>Acrescente o leite, leite condensado, leite de coco, açúcar e canela em pau.</li>
          <li>Cozinhe mexendo até engrossar e ficar cremoso.</li>
          <li>Sirva quente ou frio, polvilhado com canela em pó.</li>
        </ol>
      </div>

      <div className="receita-imagem">
        <img src={canjicaFoto} alt="Canjica pronta" className="comida-imagem"/>
      </div>
    </div>
  );
}
