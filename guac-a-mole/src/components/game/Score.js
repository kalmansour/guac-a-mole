import React from "react";
import styled from "styled-components";

const Score = ({ score }) => {
  return (
    <Container>
      <h3>Score: ${score} pts</h3>
    </Container>
  );
};

export default Score;

const Container = styled.div`
  background-color: green;
  color: white;
  margin: 10px;
`;
