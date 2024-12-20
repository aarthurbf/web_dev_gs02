import styled from "styled-components";

export const LoginStyle = styled.section`
  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
  }
  .form {
    position: absolute;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  header {
    font-size: 28px;
    font-weight: 600;
    color: var(--color8);
    text-align: center;
  }
  form {
    margin-top: 30px;
  }
  .form .field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    border-radius: 6px;
  }
  .field input,
  .field button {
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 6px;
  }
  .field input {
    outline: none;
    padding: 0 15px;
    border: 1px solid #cacaca;
  }
  .field input:focus {
    border-bottom-width: 2px;
  }
  .field button {
    color: #fff;
    background-color: var(--color5);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .field button:hover {
    background-color: var(--color3);
  }
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .welcome-message {
    font-size: 20px;
    font-weight: 500;
    color: var(--color8);
    text-align: center;
  }
  .logout-button {
    color: #fff;
    background-color: #e74c3c;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
  .logout-button:hover {
    background-color: #c0392b;
  }
  .form-link {
    text-align: center;
    margin-top: 10px;
  }
  .form-link span,
  .form-link a {
    font-size: 14px;
    font-weight: 400;
    color: var(--color8);
  }
  .form a {
    color: var(--color4);
    text-decoration: none;
  }
  .form-content a:hover {
    text-decoration: underline;
  }
  .line {
    position: relative;
    height: 1px;
    width: 100%;
    margin: 36px 0;
    background-color: #d4d4d4;
  }
  .line::before {
    content: "Ou";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #8b8b8b;
    padding: 0 15px;
  }
  .media-options a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a.facebook {
    color: #fff;
    background-color: #0000ff;
  }
  a.facebook .facebook-icon {
    height: 28px;
    width: 28px;
    color: var(--color6);
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  .facebook-icon,
  img.google-img {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
  img.google-img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }
  a.google {
    border: 1px solid #cacaca;
  }
  a.google span {
    font-weight: 500;
    opacity: 0.6;
    color: #232836;
  }

  @media screen and (max-width: 400px) {
    .form {
      padding: 20px 10px;
    }
  }
`;
