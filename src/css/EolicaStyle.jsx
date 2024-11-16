import styled from "styled-components";
import Eolica from "../assets/images/Eolica1.jpg";

export const EolicaStyle = styled.section`
  .banner {
    background: url(${Eolica}) no-repeat center center;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .banner h2 {
    color: var(--color7);
    text-shadow: 1px 2px 6px #000;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 2rem;
    flex-wrap: wrap;
  }

  .specs,
  .content {
    flex: 1 1 300px;
    margin: 1rem;
    text-align: center;
  }

  .specs {
    background-color: var(--color7);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .specs h3,
  .content h1 {
    color: var(--color5);
    font-size: 2rem;
  }

  .specs p,
  .content p {
    color: var(--color2);
    font-size: 1.5rem;
    margin: 15px 0;
  }

  .content h1 {
    font-size: 3.5rem;
  }

  .selection-container {
    padding: 2rem 5%;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto 3rem;
  }

  .selection-title {
    color: var(--color3);
    font-size: 2.5rem;
  }

  .selection-text {
    color: var(--color1);
    font-size: 1.4rem;
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    .container {
      padding: 3rem 1rem;
      flex-direction: column;
    }

    .banner h2 {
      font-size: 2.2rem;
    }

    .content h1 {
      font-size: 3rem;
    }

    .content p,
    .specs p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    .banner h2 {
      font-size: 2rem;
    }

    .content h1 {
      font-size: 2.5rem;
    }

    .content p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .banner h2,
    .selection-title {
      font-size: 1.5rem;
    }

    .content h1 {
      font-size: 2rem;
    }

    .content p,
    .specs p {
      font-size: 1rem;
    }
  }
`;
