// Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Timer from "./Timer";

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
    console.log(timer);
    setCountdown(true);
  }

  const countScore = (n) => {
    if (index === n) {
      setScore((score) => score + 5);
    }
  };

  return (
    <Container>
      {countdown ? <Timer score={score} /> : <></>}
      <p>Score: {score}</p>
      <h3>Time is ticking press start</h3>
      <button onClick={startGame}>start</button>
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

const Hole = styled.div`
  background-color: black;
  border: solid;
  border-color: black;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-left: 50px;
  margin: 10px;
`;

const AvocadoImage = styled.img`
  height: 200px;
  width: 200px;
  margin-left: 60px;
`;

const ImageContainer = styled.div`
  display: inline-block;
`;
