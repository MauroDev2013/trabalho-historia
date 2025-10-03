import React from "react";
import "./ReceitasPages.css";
import chocolateFoto from "../assets/imagens/choc.png"; // coloque a foto do chocolate quente

export default function ChocolateQuente() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        <h1>☕ Chocolate Quente (Bebida Brasileira)</h1>

        <p className="receita-historia">
          O chocolate quente é uma bebida tradicional brasileira, especialmente popular nos dias frios. Feita à base de leite, chocolate e açúcar, possui origem na mistura das tradições indígenas, europeias e africanas. Os indígenas já consumiam o cacau, os europeus introduziram leite e açúcar, e os africanos ajudaram a popularizar a cremosidade da bebida. Hoje, o chocolate quente é consumido em cafés, lanchonetes e em casa, podendo ter variações com canela, chantilly ou especiarias.
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
          <li><strong>Antigamente:</strong> cacau moído misturado com água ou leite simples, adoçado manualmente.</li>
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
          <strong>Custo médio da receita antigamente:</strong> cerca de Cr$ 20 a Cr$ 25 para servir 4 pessoas(Cruzados).
        </p>
      </div>

      <div className="receita-imagem">
        <img src={chocolateFoto} alt="Chocolate Quente pronto" className="comida-imagem"/>
      </div>
    </div>
  );
}
