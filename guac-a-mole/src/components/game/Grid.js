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
      <button onClick={startGame}>start game</button>
      <button onClick={endGame}>end game</button>
      <p>score: {score}</p>
      <Box>
        <style>
          {`
        .hole {
          background-color: black;
          border: solid;
          border-color: black;
          border-radius: 50%;
          height: 200px;
          width: 200px;
          margin-left: 50px;
          margin:10px
        }

        .container {
          display: inline-block;
        }

        img {
          height: 200px;
          width: 200px;
          margin-left: 60px;
        }
      `}
        </style>
        <div>
          {Array(5)
            .fill()
            .map((_, n) => {
              if (index === n) {
                return (
                  <div className="container">
                    <img
                      src={
                        "https://static.wixstatic.com/media/2cd43b_877c62d8964843ed9c5201352de54f6f~mv2.png/v1/fill/w_406,h_458,fp_0.50_0.50,lg_1,q_95/2cd43b_877c62d8964843ed9c5201352de54f6f~mv2.png"
                      }
                      alt="avocado"
                      onClick={() => onClick(n)}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="container">
                    <div className="hole"></div>
                  </div>
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
