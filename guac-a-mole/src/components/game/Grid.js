// Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Timer from "../timer/Timer";

// Styles
import {
  Container,
  Box,
  Hole,
  AvocadoImage,
  ImageContainer,
  Button,
  ScoreBoard,
} from "./styles";

const Grid = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState();
  const [countdown, setCountdown] = useState(false);

  const generateIndex = () => {
    setIndex(Math.floor(Math.random() * 6));
  };

  function startGame() {
    const timer = setInterval(generateIndex, 2000);
    setTimer(timer);
    setCountdown(true);
  }

  const countScore = (n) => {
    if (index === n) {
      setScore((score) => score + 5);
    }
  };

  return (
    <container>
      <Container>
        {countdown ? <Timer score={score} /> : <></>}
        <ScoreBoard>Score: {score} pts</ScoreBoard>
        <Button onClick={startGame}>{countdown ? "⏳" : "Start"}</Button>
        <Box>
          <div>
            {Array(5)
              .fill()
              .map((_, n) => {
                if (index === n) {
                  return (
                    <ImageContainer>
                      <AvocadoImage
                        src={
                          "https://static.wixstatic.com/media/2cd43b_877c62d8964843ed9c5201352de54f6f~mv2.png/v1/fill/w_406,h_458,fp_0.50_0.50,lg_1,q_95/2cd43b_877c62d8964843ed9c5201352de54f6f~mv2.png)"
                        }
                        alt="avocado"
                        onClick={() => countScore(n)}
                      />
                    </ImageContainer>
                  );
                } else {
                  return (
                    <ImageContainer>
                      <Hole />
                    </ImageContainer>
                  );
                }
              })}
          </div>
        </Box>
      </Container>
    </container>
  );
};

export default Grid;
