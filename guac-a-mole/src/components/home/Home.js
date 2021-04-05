import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <container>
      <Container>
        <Title>Guac-A-Mole</Title>
        <Subtitle>Challenge The Avocados & You Will Be Rewarded</Subtitle>
        <div>
          <Link to="/game">
            <Button>Accept Challenge</Button>
          </Link>
        </div>
      </Container>
    </container>
  );
};

export default Home;

const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 62px;
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Subtitle = styled.p`
  font-size: 40px;
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Button = styled.button`
  font-size: 50px;
  background-color: white;
  border: solid;
  border-width: 4px;
  border-color: #32cd32;
  color: #32cd32;
  margin: 20px 20px;
  height: 200px;
  width: 400px;
`;
