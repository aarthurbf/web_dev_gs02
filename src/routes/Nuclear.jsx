import { NuclearStyle } from "../css/NuclearStyle.jsx";

const Nuclear = () => {
  return (
    <NuclearStyle>
      <section>
        <div className="banner">
          <h2>ENERGIA NUCLEAR</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specs">
            <h3>EFICIÊNCIA ENERGÉTICA</h3>
            <p>ALTA PRODUÇÃO POR UNIDADE DE COMBUSTÍVEL</p>
            <h3>CAPACIDADE DE GERAÇÃO</h3>
            <p>ATÉ 1500 MW POR REATOR</p>
            <h3>VIDA ÚTIL</h3>
            <p>40 A 60 ANOS</p>
            <h3>EMISSÕES</h3>
            <p>QUASE ZERO EMISSÕES DE GASES DE EFEITO ESTUFA</p>
          </div>
          <div className="content">
            <h1>CONFIÁVEL, PODEROSA E SUSTENTÁVEL</h1>
            <p>
              A energia nuclear utiliza a fissão de átomos de urânio ou outros
              combustíveis nucleares para gerar calor, que é convertido em
              eletricidade. É uma das fontes mais eficientes e estáveis de
              energia disponível atualmente.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="selection-container">
          <h1 className="selection-title">IMPACTOS</h1>
          <p className="selection-text">
            A energia nuclear apresenta benefícios significativos em termos de
            emissões quase nulas de carbono e produção confiável. No entanto, os
            desafios incluem a gestão de resíduos radioativos e os altos custos
            iniciais de construção das usinas. Com tecnologia avançada, esses
            desafios estão sendo abordados com soluções como reatores de próxima
            geração e reciclagem de combustível.
          </p>
        </div>
        <div className="selection-container">
          <h1 className="selection-title">BENEFÍCIOS</h1>
          <p className="selection-text">
            Entre os principais benefícios estão a alta densidade energética,
            produção consistente e a capacidade de operar independentemente das
            condições climáticas. A energia nuclear também desempenha um papel
            essencial na transição para uma matriz energética mais limpa e na
            redução da dependência de combustíveis fósseis.
          </p>
        </div>
      </section>
    </NuclearStyle>
  );
};

export default Nuclear;
