import styled from "styled-components";

export const HomeStyle = styled.section`
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide.active {
    opacity: 1;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1;
  }

  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  .btn {
    background-color: var(--color4);
    border: 2px solid var(--color5);
    padding: 8px 0.9rem;
    border-radius: 5px;
    color: var(--color6);
    transition: var(--transition);
  }

  .btn:hover {
    background: transparent;
    color: var(--color2);
  }

  .produto-title {
    font-size: 4.5vmin;
    text-align: center;
    margin: 2.5rem 0 2rem;
    color: var(--color5);
  }

  .produto-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    grid-gap: 2rem;
    padding: 0 1rem 6rem;
  }

  .produto-item {
    max-width: 22rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: 1px 1px 30px darkgray;
    border-radius: 5px;
    transition: 0.5s;
  }

  .produto-item:hover {
    transform: scale(1.1);
  }

  .produto-item img {
    width: 100%;
    border-radius: 5px;
  }

  .produto-item h3 {
    margin: 2rem 0;
    font-weight: 800;
  }

  .produto-item p {
    margin: 0 0 1.5rem;
    width: 80%;
  }

  .vejaMais {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .highlight {
    background-color: var(--color4); 
    padding: 8rem; 
    text-align: center;
    color: white; 
  }

  .highlight h2 {
    font-size: 2.3rem; 
    margin-bottom: 5rem;
    color: white;
  }

  .highlight-content {
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center;
    gap: 2rem; 
  }

  .highlight-content div {
    max-width: 250px;
    text-align: center;
  }

  .highlight-content .icon {
    font-size: 4rem; 
    color: white;
    margin-bottom: 1rem;
  }

  .info-section {
    padding: 4rem 2rem; 
    background-color: var(--color3); 
    text-align: center;
    color: white;
  }

  .info-section h2 {
    font-size: 2.5rem; /* Título maior */
    margin-bottom: 1.5rem;
  }

  .info-section p {
    font-size: 1.2rem; /* Texto maior */
    max-width: 600px; /* Limita a largura do texto */
    margin: 0 auto; /* Centraliza horizontalmente */
    line-height: 1.8; /* Aumenta o espaçamento entre linhas */
  }
  .selection-form {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
  }

  .form {
    width: 100%;
    max-width: 500px;
    background: var(--color7);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  }

  .form h2 {
    margin-bottom: 1.5rem;
    color: var(--color3);
    border-bottom: 2px solid var(--color2);
    padding-bottom: 0.5rem;
  }

  .form input,
  .form button {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 1rem;
    outline: none;
    transition: border 0.3s, background 0.3s;
  }

  .form input {
    background: none;
    border: 2px solid var(--color6);
    color: var(--color1);
  }

  .form input:focus {
    border-color: var(--color4);
  }

  .form button {
    margin-top: 1.5rem;
    background: var(--color2);
    border: none;
    color: var(--color7);
    cursor: pointer;
  }

  .form button:hover {
    background: var(--color5);
  }

  @media screen and (max-width: 768px) {
    .produto-item {
      max-width: 25rem;
    }

    .produto-title {
      font-size: 6vmin;
    }
  }

  @media screen and (max-width: 480px) {
    .produto-item {
      max-width: 100%;
      margin: 2rem auto;
      padding: 1.5rem;
    }

    .produto-title {
      font-size: 10vmin;
    }
  }
`;
