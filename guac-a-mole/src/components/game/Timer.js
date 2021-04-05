import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Timer extends Component {
  state = { minutes: 0, seconds: 1 };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <h4>
        {minutes === 0 && seconds === 0 ? (
          <container>
            <Container>
              <div>
                <Title>Game Over</Title>
                <Scoreboard>Score: {this.props.score} pts</Scoreboard>
                <Subtitle>Enjoy The Guac!</Subtitle>
              </div>

              <HomeGif
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2018/04/guac-scoop.mp4.gif?fit=1170%2C790&ssl=1"
                alt="guacamole"
              />
              <Link to="/">
                <Button>Hungry for more</Button>
              </Link>
            </Container>
          </container>
        ) : (
          <div>
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      </h4>
    );
  }
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Scoreboard = styled.h2`
  /* font-size: 40px; */
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Subtitle = styled.h3`
  /* font-size: 20px; */
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HomeGif = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 650px;
  height: 350px;
  /* padding-bottom: 10px; */
  border: solid;
  border-color: #32cd32;
`;

const Container = styled.div`
  /* opacity: 0.2; */
  background: white;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: bolder;
  background-color: #32cd32;
  border: solid;
  border-width: 5px;
  border-color: gold;
  color: tomato;
  margin: 20px 20px;
  height: 100px;
  width: 200px;
`;
