import React, { useState } from "react";
import styled from "styled-components";
import Avocado from "./Avocado";

// Components
import Circle from "./Circle";
// import Score from "./Score";
import Time from "./Time";

// import Avocado from "./Avocado";

const Grid = () => {
  const circles = [Circle, Circle, Circle, Circle, Circle];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState();

  const generateIndex = () => {
    setIndex(Math.floor(Math.random() * 6));
  };

  const startGame = () => {
    const timer = setInterval(generateIndex, 2000);
    setTimer(timer);
    console.log(timer);
  };

  const endGame = () => {
    clearInterval(timer);
    setScore(0);
    setIndex(0);
  };

  const onClick = (n) => {
    if (index === n) {
      setScore((score) => score + 1);
    }
  };

  return (
    <Container>
      <Title>Let's Go!</Title>
      <button onClick={startGame}>start game</button>
      <button onClick={endGame}>end game</button>
      <p>score: {score}</p>
      <Time />
      <Box>
        {circles.fill().map((_, n) => {
          if (index === n) {
            return <Avocado onClick={() => onClick(n)} />;
          } else {
            return <Circle />;
          }
        })}
      </Box>
    </Container>
  );
};

export default Grid;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border: solid;
  border-color: black;
  margin: 20px 20px;
  height: 600px;
  width: 900px;
  align-items: center;
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
