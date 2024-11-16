import { EolicaStyle } from "../css/EolicaStyle";
import { useState } from "react";

const Eolica = () => {
  return (
    <EolicaStyle>
      <section>
        <div className="banner">
          <h2>ENERGIA EÓLICA</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specs">
            <h3>REDUÇÃO DE CUSTOS</h3>
            <p>REDUZ OS GASTOS COM ENERGIA EM ATÉ 80%</p>
            <h3>CAPACIDADE DE GERAÇÃO</h3>
            <p>2 A 3 MW POR TURBINA</p>
            <h3>VIDA ÚTIL</h3>
            <p>20 A 25 ANOS</p>
            <h3>REDUÇÃO DE EMISSÕES</h3>
            <p>2.5 TONELADAS DE CO₂ POR MWh</p>
          </div>
          <div className="content">
            <h1>RENOVÁVEL, LIMPA E EFICIENTE</h1>
            <p>
              A energia eólica utiliza a força do vento para mover turbinas que
              geram eletricidade. É uma das formas mais sustentáveis de produzir
              energia em larga escala.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="selection-container">
          <h1 className="selection-title">IMPACTOS</h1>
          <p className="selection-text">
            A energia eólica é uma solução essencial para reduzir a dependência
            de combustíveis fósseis. Suas turbinas podem ser instaladas em áreas
            urbanas, rurais e até mesmo no mar (offshore), ampliando sua
            aplicação. Além disso, seu impacto ambiental é mínimo, com baixa
            emissão de gases do efeito estufa, ajudando no combate às mudanças
            climáticas.
          </p>
        </div>
        <div className="selection-container">
          <h1 className="selection-title">BENEFÍCIOS</h1>
          <p className="selection-text">
            Entre os principais benefícios estão a geração de energia limpa,
            redução de custos a longo prazo e a criação de empregos nas áreas de
            construção e manutenção de turbinas. A energia eólica também é
            altamente escalável, podendo atender desde pequenas comunidades até
            grandes redes elétricas.
          </p>
        </div>
      </section>
    </EolicaStyle>
  );
};

export default Eolica;
