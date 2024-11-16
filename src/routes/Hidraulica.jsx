import { HidraulicaStyle } from "../css/HidraulicaStyle";

const Hidraulica = () => {
  return (
    <HidraulicaStyle>
      <section>
        <div className="banner">
          <h2>ENERGIA HIDRÁULICA</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specs">
            <h3>REDUÇÃO DE CUSTOS</h3>
            <p>ENERGIA MAIS BARATA EM LONGO PRAZO</p>
            <h3>CAPACIDADE DE GERAÇÃO</h3>
            <p>ATÉ 1000 MW POR USINA</p>
            <h3>VIDA ÚTIL</h3>
            <p>50 A 100 ANOS</p>
            <h3>REDUÇÃO DE EMISSÕES</h3>
            <p>BAIXO IMPACTO CARBONO POR kWh</p>
          </div>
          <div className="content">
            <h1>RENOVÁVEL, CONFIÁVEL E ESCALÁVEL</h1>
            <p>
              A energia hidráulica utiliza o movimento da água, como rios ou
              quedas d’água, para mover turbinas e gerar eletricidade. É uma das
              fontes de energia renovável mais antigas e eficientes.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="selection-container">
          <h1 className="selection-title">IMPACTOS</h1>
          <p className="selection-text">
            A energia hidráulica desempenha um papel crucial na geração de
            energia limpa em larga escala. Sua implementação exige grandes
            obras, como a construção de barragens, que podem ter impactos
            ambientais e sociais. Contudo, quando bem planejada, é uma solução
            sustentável e de alta eficiência para suprir as demandas energéticas
            de grandes regiões.
          </p>
        </div>
        <div className="selection-container">
          <h1 className="selection-title">BENEFÍCIOS</h1>
          <p className="selection-text">
            Entre os principais benefícios estão a alta capacidade de geração,
            confiabilidade no fornecimento de energia e a possibilidade de
            armazenar água para uso em períodos de seca. Além disso, a energia
            hidráulica ajuda na redução de emissões de carbono e pode ser
            integrada a outras fontes renováveis para criar sistemas híbridos de
            energia.
          </p>
        </div>
      </section>
    </HidraulicaStyle>
  );
};

export default Hidraulica;
