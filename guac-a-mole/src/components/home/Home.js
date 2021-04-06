// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Container, Title, Subtitle, Button } from "./styles";
const Home = () => {
  return (
    <container>
      <Container>
        <Title>Guac-🥑-Mole</Title>
        <Subtitle>Challenge The Avocado & You Will Be Rewarded</Subtitle>
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
