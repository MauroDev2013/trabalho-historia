import React from "react";
import "./ReceitasPages.css";
import paoFoto from "../assets/imagens/paoAcucar.png"; // Usando uma imagem genérica, idealmente você usaria a foto do pão doce simples.

export default function PaoDeAcucarTradicional() {
  return (
    <div className="receitas-container">
      <div className="receitas-text">
        <h1>🍞 Pão de Açúcar (América Portuguesa)</h1>

        <p className="receita-historia">
          O Pão de Açúcar (ou Pão Doce com cobertura de açúcar cristal) é um clássico da culinária luso-brasileira. Sua origem remonta ao período colonial, onde a produção de cana-de-açúcar era abundante no Brasil. Era um pão festivo e mais elaborado que o pão simples, usando ingredientes como ovos, leite e gordura para enriquecer a massa, e sendo finalizado com uma generosa camada de açúcar, um luxo na época. Essa receita simples e reconfortante é a que realmente leva o nome "pão de açúcar" na tradição de panificação.
        </p>

        <h2>Informações Nutricionais</h2>
        <ul>
          <li><strong>Carboidratos (Farinha e Açúcar):</strong> Principal fonte de energia, fundamental para o trabalho manual da época.</li>
          <li><strong>Fermento Biológico:</strong> Aumenta a digestibilidade da farinha.</li>
          <li><strong>Leite e Ovos:</strong> Adicionados para enriquecer a massa, fornecendo proteínas, cálcio e gordura, tornando o pão macio e saboroso.</li>
        </ul>

        <h2>Ingredientes – Antigamente e Hoje</h2>
        <ul>
          <li>
            <strong>Antigamente (América Portuguesa):</strong>
            <ul>
              <li>Farinha de trigo (muitas vezes importada).</li>
              <li>Açúcar (cristal ou mascavo, abundante no país).</li>
              <li>Leite, ovos e gordura (banha ou manteiga) para enriquecer a massa.</li>
              <li>Fermento natural (levain) ou biológico.</li>
            </ul>
          </li>
          <li>
            <strong>Hoje (Receita Clássica):</strong>
            <ul>
              <li>Farinha de trigo, Fermento Biológico Seco, Açúcar (refinado e cristal).</li>
              <li>Ovos e Leite (para maciez).</li>
              <li>Manteiga ou margarina (para sabor e estrutura).</li>
              <li>Sal (para equilibrar o sabor doce).</li>
              <li>Gema para pincelar e Açúcar Cristal para finalizar.</li>
            </ul>
          </li>
        </ul>

        <h2>Modo de Preparo (Clássico Atual)</h2>
        <ol>
          <li><strong>Ativar o Fermento:</strong> Misture o fermento com um pouco de açúcar e leite morno. Deixe descansar até espumar.</li>
          <li><strong>Preparar a Massa:</strong> Em uma tigela grande, misture o restante dos ingredientes (farinha, açúcar, ovos, manteiga, sal e o fermento ativado). Sove a massa por cerca de 10 a 15 minutos até ficar lisa e elástica.</li>
          <li><strong>Primeiro Crescimento:</strong> Cubra a massa e deixe descansar em local quente por cerca de 1 a 1,5 horas, ou até dobrar de volume.</li>
          <li><strong>Modelagem:</strong> Divida a massa em porções, modele no formato desejado (pães individuais, trança ou rolo), e coloque em uma assadeira untada.</li>
          <li><strong>Segundo Crescimento:</strong> Deixe crescer novamente por 30 a 40 minutos.</li>
          <li><strong>Finalização e Forno:</strong> Pincele com gema e polvilhe generosamente com Açúcar Cristal. Asse em forno pré-aquecido (180°C) por 25 a 35 minutos, ou até dourar.</li>
        </ol>

        <h2>Quanto Custa (Estimativa de Ingredientes Básicos)</h2>
        <ul>
          <li><strong>Hoje:</strong> O custo de uma receita completa (farinha, fermento, açúcar, leite, ovos, manteiga) varia em média entre R$ 15,00 e R$ 25,00, dependendo da qualidade e marca dos ingredientes.</li>
          <li><strong>Antigamente:</strong> O preço era alto devido ao custo da farinha de trigo importada. O luxo do açúcar e do enriquecimento com leite e ovos tornava-o um doce mais caro e consumido em ocasiões especiais.</li>
        </ul>
      </div>

      <div className="receita-imagem">
        <img src={paoFoto} alt="Pão Doce Tradicional com Açúcar Cristal" className="pao-imagem"/>
      </div>
    </div>
  );
}
