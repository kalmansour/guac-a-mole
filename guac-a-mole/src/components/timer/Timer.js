// Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles
import {
  Container,
  Title,
  TimerStyled,
  Button,
  Scoreboard,
  HomeGif,
} from "./styles";

export default class Timer extends Component {
  state = { minutes: 0, seconds: 10 };
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
      <div>
        {minutes === 0 && seconds === 0 ? (
          <container>
            <Container>
              <div>
                <Title>Game Over</Title>
                <div>
                  <Scoreboard>Score: {this.props.score} pts</Scoreboard>
                </div>
              </div>

              <HomeGif
                src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2018/04/guac-scoop.mp4.gif?fit=1170%2C790&ssl=1"
                alt="guacamole"
              />
              <Link to="/">
                <Button>Want More</Button>
              </Link>
            </Container>
          </container>
        ) : (
          <div>
            <TimerStyled>
              Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </TimerStyled>
          </div>
        )}
      </div>
    );
  }
}
