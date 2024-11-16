import { Link } from "react-router-dom";
import { useState } from "react";
import { HomeStyle } from "../css/HomeStyle";
import { FaLeaf, FaWind, FaSolarPanel, FaWater } from "react-icons/fa";
import EolicaImg from "../assets/images/eolica.jpg";
import SolarImg from "../assets/images/solar.jpg";
import HidraulicaImg from "../assets/images/hidroeletrica.jpg";
import NuclearImg from "../assets/images/nuclear.jpg";

const energySources = [
  {
    img: EolicaImg,
    title: "Energia Eólica",
    description:
      "A energia eólica utiliza a força do vento para gerar eletricidade de forma limpa e renovável.",
    link: "/energiaeolica",
  },
  {
    img: SolarImg,
    title: "Energia Solar",
    description:
      "A energia solar aproveita a luz do sol para produzir eletricidade ou calor, sendo uma das fontes mais sustentáveis.",
    link: "/energiasolar",
  },
  {
    img: HidraulicaImg,
    title: "Energia Hidráulica",
    description:
      "A energia hidráulica utiliza o movimento da água, como em rios e barragens, para gerar eletricidade.",
    link: "/energiahidraulica",
  },
  {
    img: NuclearImg,
    title: "Energia Nuclear",
    description:
      "A energia nuclear utiliza reações atômicas para gerar grandes quantidades de energia de forma contínua.",
    link: "/energianuclear",
  },
];

const Home = () => {
  const images = [EolicaImg, NuclearImg, SolarImg, HidraulicaImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) =>
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    );

  return (
    <HomeStyle>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="prev" onClick={() => changeSlide("prev")}>
          ❮
        </button>
        <button className="next" onClick={() => changeSlide("next")}>
          ❯
        </button>
      </div>

      {/* Seção destacada */}
      <section className="highlight">
        <h2>A Importância das Fontes de Energia Sustentáveis</h2>
        <div className="highlight-content">
          <div>
            <FaWind className="icon" />
            <p>Energia Eólica: Aproveitando o vento de forma renovável.</p>
          </div>
          <div>
            <FaSolarPanel className="icon" />
            <p>Energia Solar: Transformando luz do sol em energia limpa.</p>
          </div>
          <div>
            <FaWater className="icon" />
            <p>Energia Hidráulica: Gerando energia com o movimento da água.</p>
          </div>
          <div>
            <FaLeaf className="icon" />
            <p>Impacto positivo no meio ambiente e no futuro.</p>
          </div>
        </div>
      </section>

      {/* Cards de energia */}
      <section>
        <h2 className="produto-title">Fontes de Energia Sustentáveis</h2>
        <div className="produto-list">
          {energySources.map((source, index) => (
            <div key={index} className="produto-item">
              <img src={source.img} alt={source.title} />
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <Link to={source.link} className="btn">
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de informações adicionais */}
      <section className="info-section">
        <h2>Por Que Escolher Energias Renováveis?</h2>
        <p>
          As fontes de energia sustentáveis são essenciais para reduzir o
          impacto ambiental, combater as mudanças climáticas e garantir um
          futuro mais seguro para as próximas gerações. Elas também promovem a
          independência energética e incentivam a inovação tecnológica.
        </p>
      </section>
    </HomeStyle>
  );
};

export default Home;
