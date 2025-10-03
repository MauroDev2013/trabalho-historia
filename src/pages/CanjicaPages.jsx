import React from "react";
import "./ReceitasPages.css";
import canjicaFoto from "../assets/imagens/canjica.png";
import canjicaHistoria from "../assets/imagens/canjica-origem.jpg";


export default function Canjica() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        {/* nao pode mais usar o <br/> é depreciado*/}
        <h1>🍚 Canjica Brasileira <br/> (América Portuguesa)</h1>

        <p className="receita-historia">
          A canjica é uma sobremesa tradicional brasileira feita à base de milho branco, leite, leite condensado e especiarias. Sua origem vem da mistura de tradições indígenas, africanas e portuguesas. As tribos indígenas já cozinhavam o milho, os portugueses introduziram leite e açúcar, e os africanos acrescentaram técnicas de preparo que deixaram o doce mais cremoso. Hoje, a canjica é típica das festas juninas, mas também possui versões em outros países da América Latina, como o "mazamorra" colombiano.
        </p>

        <h2>Informações Nutricionais</h2>
        <ul>
          <li><strong>Milho:</strong> fonte de carboidratos e fibras.</li>
          <li><strong>Leite e leite condensado:</strong> fornecem proteínas e cálcio, mas contêm açúcar.</li>
          <li><strong>Leite de coco:</strong> gordura saudável e sabor característico.</li>
          <li><strong>Açúcar:</strong> fornece energia rápida, mas deve ser consumido com moderação.</li>
        </ul>

        <h2>Ingredientes – passado e presente</h2>
        <ul>
          <li><strong>Antigamente:</strong> apenas milho cozido com água e açúcar mascavo, sem leite ou especiarias.</li>
          <li><strong>Hoje:</strong> milho branco, leite, leite condensado, leite de coco, açúcar refinado e canela.</li>
        </ul>

        <h2>Modo de Preparo</h2>
        <ol>
          <li>Deixe o milho de molho em água por pelo menos 8 horas.</li>
          <li>Cozinhe o milho na panela de pressão até ficar macio (cerca de 40 minutos).</li>
          <li>Escorra o excesso de água, deixando um pouco do caldo do cozimento.</li>
          <li>Acrescente leite, leite condensado, leite de coco, açúcar e canela em pau.</li>
          <li>Cozinhe mexendo até engrossar e ficar cremoso.</li>
          <li>Sirva quente ou frio, polvilhado com canela em pó.</li>
        </ol>

        <h2>Onde Encontrar</h2>
        <ul>
          <li><strong>Antigamente:</strong> milho cultivado localmente e açúcar artesanal.</li>
          <li><strong>Hoje:</strong> todos os ingredientes facilmente encontrados em supermercados e feiras.</li>
        </ul>

        <h2>Quanto Custa</h2>
        <ul>
          <li><strong>Hoje:</strong></li>
          <ul>
            <li>500 g de milho para canjica: R$ 5,00</li>
            <li>1 litro de leite: R$ 6,00</li>
            <li>1 lata de leite condensado: R$ 6,50</li>
            <li>200 ml de leite de coco: R$ 4,00</li>
            <li>Açúcar, canela e especiarias: R$ 2,50</li>
          </ul>
        </ul>
        <p className="custo">
          <strong>Custo médio da receita hoje:</strong> R$ 20,00 a R$ 25,00 <br/><br/>
          <strong>Custo médio da receita antigamente:</strong> cerca de Cr$ 20 a Cr$ 40(Cruzeiros). Podendo variar, por conta da inflação na época.
        </p>
      </div>

      <div className="receita-imagem">
        <img src={canjicaFoto} alt="Canjica pronta" className="comida-imagem"/>
        <img src={canjicaHistoria} alt="Canjica pronta" className="temp-imagem"/>
      </div>
    </div>
  );
}
