import React from "react";
import styled from "styled-components";
import avocado1 from "../../media/avocado1.png";

const Avocado = () => {
  return <AvocadoStyled src={avocado1} alt="avocado1" />;
};

export default Avocado;

const AvocadoStyled = styled.img`
  height: 200px;
  width: 200px;
  margin-left: 60px;
`;
