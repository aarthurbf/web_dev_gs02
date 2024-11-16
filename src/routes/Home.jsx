import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeStyle } from "../css/HomeStyle";
import { FaLeaf, FaWind, FaSolarPanel, FaWater } from "react-icons/fa";
import EolicaImg from "../assets/images/eolica.jpg";
import SolarImg from "../assets/images/solar.jpg";
import HidraulicaImg from "../assets/images/hidroeletrica.jpg";
import NuclearImg from "../assets/images/nuclear.jpg";

const Home = () => {
  const [energySources, setEnergySources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/energySources.json");
      const data = await response.json();
      setEnergySources(data);
    };

    fetchData();
  }, []);

  const images = [EolicaImg, NuclearImg, SolarImg, HidraulicaImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) =>
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    );

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const dadosExistentes = JSON.parse(localStorage.getItem("produto")) || [];

    const novoItem = { nome, email };

    const dadosAtualizados = [...dadosExistentes, novoItem];

    localStorage.setItem("produto", JSON.stringify(dadosAtualizados));

    alert("Email enviado com sucesso");

    setNome("");
    setEmail("");
  };

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

      <section>
        <h2 className="produto-title">Fontes de Energia Sustentáveis</h2>
        <div className="produto-list">
          {energySources.map((source, index) => (
            <div key={index} className="produto-item">
              <img src={source.img} alt={source.title} />{" "}
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <Link to={source.link} className="btn">
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>Por Que Escolher Energias Renováveis?</h2>
        <p>
          As fontes de energia sustentáveis são essenciais para reduzir o
          impacto ambiental, combater as mudanças climáticas e garantir um
          futuro mais seguro para as próximas gerações. Elas também promovem a
          independência energética e incentivam a inovação tecnológica.
        </p>
      </section>

      <div className="selection-form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Mais informações</h2>
          <input
            placeholder="Escreva seu nome"
            aria-label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder="Informe seu email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </HomeStyle>
  );
};

export default Home;
