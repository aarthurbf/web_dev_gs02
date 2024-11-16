import { SobreStyle } from "../css/SobreStyle";
import imageSobre from "../assets/images/Nuclear1.jpg";

const Sobre = () => {
  return (
    <SobreStyle>
      <div className="heading-sobre">
        <h1>Sobre Nós</h1>
        <p>
          Somos apaixonados por um futuro mais limpo e sustentável. Nosso
          objetivo é conscientizar e educar sobre a importância de adotar fontes
          de energia renováveis e tecnologias sustentáveis, promovendo um
          impacto positivo no meio ambiente e nas gerações futuras. Acreditamos
          que cada passo dado em direção ao uso responsável de recursos naturais
          é um passo na construção de um planeta mais saudável. Trabalhamos para
          compartilhar conhecimento, apoiar iniciativas sustentáveis e inspirar
          mudanças em larga escala.
        </p>
      </div>
      <div className="container-sobre">
        <section className="sobre">
          <div className="sobre-img">
            <img src={imageSobre} alt="" />
          </div>
          <div className="sobre-content">
            <h2>A História das Energias Sustentáveis</h2>
            <p>
              Desde a Revolução Industrial, o mundo tem dependido amplamente de
              combustíveis fósseis, como carvão, petróleo e gás natural, para
              impulsionar seu desenvolvimento. No entanto, essas fontes de
              energia não renováveis têm causado sérios impactos ambientais,
              incluindo aquecimento global, poluição do ar e esgotamento de
              recursos. A busca por alternativas mais limpas e renováveis
              começou no século XX, motivada por crises de petróleo e crescente
              preocupação ambiental.
            </p>
          </div>
        </section>
      </div>
    </SobreStyle>
  );
};

export default Sobre;
