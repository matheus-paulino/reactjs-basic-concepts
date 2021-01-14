import React from "react";
import styled from "styled-components";

const Site = styled.div`
  margin-top: 15px;
  width: 400px;
  height: 400px;
  background-color: #00ff00;
`;

const Title = styled.h1`
  font-size: 19px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
`;

const Button = styled.button`
  font-size: 19px;
  padding: 10px 15px;
  margin: 5px;

  /* Caso não tenha nada em props.color utilize outra cor */
  background-color: ${(props) => props.color || "#00FF00"};
`;

/**
 * ButtonSmal extende Button (herdando propriedades do button)
 * Consigo enviar props para o componente pai
 */
const ButtonSmall = styled(Button)`
  padding: 5px 7px;
  font-size: 16px;
`;

function StyledComponents() {
  return (
    <>
      <Site>
        <Title>Styled Components</Title>
        <Button color="#FF0000">Clique aqui!</Button>
        <Button color="#0000FF">Outro clique aqui!</Button>
        <Button>Outro clique aqui!</Button>
        <ButtonSmall color="yellow">Outro botão</ButtonSmall>
      </Site>
    </>
  );
}

export default StyledComponents;
