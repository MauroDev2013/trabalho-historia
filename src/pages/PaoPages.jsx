import React from "react";
import "./ReceitasPages.css";
import paoFoto from "../assets/imagens/paoAcucar.png"; // usando a mesma foto

export default function PaoDeAcucar() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        <h1>🍞 Pão de Açúcar (Sobremesa Brasileira)</h1>

        <p className="receita-historia">
          O Pão de Açúcar, no contexto de sobremesa brasileira, é uma tradicional guloseima feita com chocolate, leite condensado e açúcar, lembrando um brigadeiro gigante ou doce de festa. Sua origem está ligada à culinária brasileira que aproveita o açúcar e o cacau produzidos no país. Com o tempo, essa sobremesa ganhou variações, podendo ser moldada, recheada ou coberta com chocolate, tornando-se popular em festas e comemorações.
        </p>

        <h2>Informações Nutricionais</h2>
        <ul>
          <li><strong>Chocolate e cacau:</strong> contêm antioxidantes que ajudam na circulação sanguínea.</li>
          <li><strong>Leite condensado e creme de leite:</strong> fornecem energia rápida e cremosidade, mas têm bastante açúcar.</li>
          <li><strong>Açúcar:</strong> fornece energia imediata, mas deve ser consumido com moderação.</li>
        </ul>

        <h2>Ingredientes – passado e presente</h2>
        <ul>
          <li><strong>Antigamente:</strong> usava-se apenas açúcar e cacau moído, misturado manualmente, resultando em um doce mais rústico.</li>
          <li><strong>Hoje:</strong> usamos chocolate em pó, leite condensado, creme de leite e açúcar refinado, permitindo uma textura cremosa e sabor doce uniforme.</li>
        </ul>

        <h2>Onde Encontrar</h2>
        <ul>
          <li><strong>Antigamente:</strong> o açúcar e o cacau eram produtos cultivados e moídos artesanalmente.</li>
          <li><strong>Hoje:</strong> todos os ingredientes podem ser encontrados facilmente em supermercados e mercearias.</li>
        </ul>

        <h2>Quanto Custa</h2>
        <ul>
          <li><strong>Hoje:</strong></li>
          <ul>
            <li>1 lata de leite condensado: R$ 6,50</li>
            <li>1 lata de creme de leite: R$ 4,50</li>
            <li>1 pacote de chocolate em pó (200g): R$ 7,00</li>
            <li>1 kg de açúcar: R$ 4,00</li>
          </ul>
        </ul>
        <p className="custo">
          <strong>Custo médio da receita hoje:</strong> R$ 10,00 a R$ 12,00 <br/>  <br/>
          <strong>Custo médio da receita antigamente:</strong> cerca de Cr$ 20 e Cr$ 100 (Cruzeiros, a moeda na época)
        </p>
      </div>

      <div className="receita-imagem">
        <img src={paoFoto} alt="Pão de Açúcar pronto" className="pao-imagem"/>
      </div>
    </div>
  );
}
