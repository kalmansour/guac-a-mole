import React from "react";
import styled from "styled-components";

const Game = () => {
  return (
    <Container>
      <Title>Let's Go!</Title>
      <Box>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Box>
    </Container>
  );
};

export default Game;

const Circle = styled.div`
  background-color: black;
  border: solid;
  border-color: black;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-left: 30px;
  /* margin: 10px; */
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: solid;
  border-color: black;
  margin: 20px 20px;
  height: 500px;
  width: 800px;
`;

const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: green;
`;
