import { EnergiasStyle } from "../css/EnergiasStyle";
import EolicaImg from "../assets/images/eolica.jpg";
import SolarImg from "../assets/images/solar.jpg";
import HidraulicaImg from "../assets/images/hidroeletrica.jpg";
import NuclearImg from "../assets/images/nuclear.jpg";

const energySources = [
  {
    img: EolicaImg,
    title: "Energia Eólica",
    description: "A energia eólica utiliza a força do vento para gerar eletricidade de forma limpa e renovável.",
    link: "#"
  },
  {
    img: SolarImg,
    title: "Energia Solar",
    description: "A energia solar aproveita a luz do sol para produzir eletricidade ou calor, sendo uma das fontes mais sustentáveis.",
    link: "#"
  },
  {
    img: HidraulicaImg,
    title: "Energia Hidráulica",
    description: "A energia hidráulica utiliza o movimento da água, como em rios e barragens, para gerar eletricidade.",
    link: "#"
  },
  {
    img: NuclearImg,
    title: "Energia Nuclear",
    description: "A energia nuclear utiliza reações atômicas para gerar grandes quantidades de energia de forma contínua.",
    link: "#"
  }
];

const Energias = () => {
  return (
    <EnergiasStyle>
      <section>
        <h2 className="produto-title">Fontes de Energia Sustentáveis</h2>
        <div className="produto-list">
          {energySources.map((source, index) => (
            <div key={index} className="produto-item">
              <img src={source.img} alt={source.title} />
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <a href={source.link} className="btn">
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </section>
    </EnergiasStyle>
  );
};

export default Energias;
