import React from "react";
import "./ReceitasPages.css";
import chocolateFoto from "../assets/imagens/choc.png"; 
import chocolate from "../assets/imagens/chocolate.jpg"; 

export default function ChocolateQuente() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        <h1>☕ Chocolate Quente (América Espanhola)</h1>

        <p className="receita-historia">
          O chocolate quente tem uma longa história que começa com os povos
          maias e astecas, que preparavam uma bebida chamada <em>xocoatl</em>,
          feita com cacau, água e especiarias, na época era uma bebida sagrada, bem diferente do que conhecemos
          hoje. Quando os espanhóis chegaram à América no século XVI,
          levaram o cacau para a Europa, onde passaram a adicionar açúcar,
          leite e canela, transformando-o em uma bebida doce e cremosa.
          No Brasil, o cacau começou a ser cultivado no período colonial
          e ajudou a popularizar ainda mais essa delícia. Atualmente,
          o chocolate quente é consumido em todo o mundo, com diversas
          variações, incluindo chantilly, marshmallow, canela e outras especiarias.
        </p>

        <h2>Informações Nutricionais</h2>
        <ul>
          <li><strong>Chocolate e cacau:</strong> fornecem antioxidantes que ajudam na circulação e bem-estar.</li>
          <li><strong>Leite:</strong> fonte de proteínas e cálcio.</li>
          <li><strong>Açúcar:</strong> fornece energia rápida, mas deve ser consumido com moderação.</li>
          <li><strong>Especiarias (opcional):</strong> como canela, trazem sabor e antioxidantes extras.</li>
        </ul>

        <h2>Ingredientes – passado e presente</h2>
        <ul>
          <li><strong>Antigamente:</strong> cacau moído misturado com água e especiarias, sem açúcar.</li>
          <li><strong>Hoje:</strong> leite, chocolate em pó ou barra, açúcar refinado e especiarias opcionais.</li>
        </ul>

        <h2>Onde Encontrar</h2>
        <ul>
          <li><strong>Antigamente:</strong> cacau cultivado e moído artesanalmente.</li>
          <li><strong>Hoje:</strong> todos os ingredientes facilmente encontrados em supermercados, lojas de chocolate e mercearias.</li>
        </ul>

        <h2>Quanto Custa</h2>
        <ul>
          <li><strong>Hoje:</strong></li>
          <li>500 ml de leite: R$ 3,50</li>
          <li>2 colheres de chocolate em pó: R$ 2,50</li>
          <li>Açúcar: R$ 1,00</li>
          <li>Opcional: canela ou chantilly: R$ 2,00</li>
        </ul>

        <p className="custo">
          <strong>Custo médio da receita hoje:</strong> R$ 9,00 a R$ 10,00 <br/><br/>
          <strong>Custo médio da receita antigamente:</strong> cerca de Cr$ 20 a Cr$ 25 para servir 4 pessoas (Cruzeiros).  Podendo variar, por conta da inflação na época.
        </p>
      </div>

      <div className="receita-imagem">
        <img src={chocolateFoto} alt="Chocolate Quente pronto" className="comida-imagem"/>
        <img src={chocolate} alt="Canjica pronta" className="temp-imagem"/>
      </div>
    </div>
  );
}
