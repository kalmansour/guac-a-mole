import React from "react";
import styled from "styled-components";

const Circle = () => {
  return <CircleStyled />;
};

export default Circle;

const CircleStyled = styled.div`
  background-color: black;
  border: solid;
  border-color: black;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-left: 60px;
`;
