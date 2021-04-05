import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>Guac-A-Mole</Title>
      <h4 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Welcome to guacamole!
      </h4>
      <div>
        <Link to="/game">
          <button
            style={{
              backgroundColor: "#32CD32",
              color: "white",
              margin: "20px 20px",
              height: "50px",
              width: "80px",
            }}
          >
            Let's play
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 62px;
  text-align: "center";
  font-family: "sans-serif";
`;
