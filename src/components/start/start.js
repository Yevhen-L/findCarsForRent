import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/assets/81ebe30a-76b5-48af-88a6-2fca0af81cafauth.jpg");
  background-size: cover;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #0b44cd;
`;

export const Description = styled.p`
  color: #667;
  line-height: 1.6;
`;
export const Button = styled.button`
  width: 130px;
  height: 130px;
  color: gray;
  border: 1px solid #0b44cd;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s;
  position: relative;
  animation: shadow-blink 1s infinite alternate;

  @keyframes shadow-blink {
    0% {
      box-shadow: 1px 1px 25px 15px rgba(15, 82, 242, 0.2);
    }
    100% {
      box-shadow: none;
    }
  }

  &:hover,
  &:focus {
    box-shadow: 1px 1px 25px 15px rgba(15, 82, 242, 0.2);
    background-color: rgba(15, 82, 242, 0.2);
  }
  span {
    color: #0b44cd;
    transition: color 0.9s;
    font-size: 22px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 0 0 0 transparent;
    transition: box-shadow 0.3s;
    z-index: -1;
  }

  &:hover span,
  &:focus span {
    color: #0b44cd;
    transition: color 0.9s;
  }
`;
