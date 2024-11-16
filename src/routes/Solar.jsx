import { SolarStyle } from "../css/SolarStyle";

const Solar = () => {
  return (
    <SolarStyle>
      <section>
        <div className="banner">
          <h2>ENERGIA SOLAR</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specs">
            <h3>REDUÇÃO DE CUSTOS</h3>
            <p>REDUZ A CONTA DE ENERGIA EM ATÉ 95%</p>
            <h3>CAPACIDADE DE GERAÇÃO</h3>
            <p>350 A 450 kWh POR SISTEMA</p>
            <h3>VIDA ÚTIL</h3>
            <p>25 A 30 ANOS</p>
            <h3>REDUÇÃO DE EMISSÕES</h3>
            <p>1 TONELADA DE CO₂ POR ANO</p>
          </div>
          <div className="content">
            <h1>RENOVÁVEL, LIMPA E ACESSÍVEL</h1>
            <p>
              A energia solar aproveita a luz do sol para gerar eletricidade
              através de células fotovoltaicas, sendo uma alternativa
              sustentável e econômica para atender às demandas energéticas.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="selection-container">
          <h1 className="selection-title">IMPACTOS</h1>
          <p className="selection-text">
            A energia solar é fundamental para a transição energética global,
            reduzindo a dependência de combustíveis fósseis. Sua aplicação é
            versátil, podendo ser instalada em residências, empresas e até
            grandes usinas solares. Além disso, contribui significativamente
            para a redução da emissão de gases do efeito estufa, promovendo um
            futuro mais sustentável.
          </p>
        </div>
        <div className="selection-container">
          <h1 className="selection-title">BENEFÍCIOS</h1>
          <p className="selection-text">
            Os principais benefícios incluem custos reduzidos a longo prazo,
            baixa manutenção e independência energética. A energia solar também
            é modular, permitindo configurações personalizadas para diferentes
            necessidades, desde pequenos sistemas residenciais até grandes
            projetos industriais. Sua adoção ajuda a combater as mudanças
            climáticas e promove uma economia mais verde.
          </p>
        </div>
      </section>
    </SolarStyle>
  );
};

export default Solar;
