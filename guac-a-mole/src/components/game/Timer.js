import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <h4>
        {minutes === 0 && seconds === 0 ? (
          <Container2>
            <h1>GameOver</h1>
            <p>Enjoy the guac!</p>
            <p>Score: {this.props.score}</p>
            <HomeGif
              src="https://i0.wp.com/kiyafries.com/wp-content/uploads/2018/04/guac-scoop.mp4.gif?fit=1170%2C790&ssl=1"
              alt="guacamole"
            />
            <Link to="/">
              <button>Hungry for more</button>
            </Link>
          </Container2>
        ) : (
          <div>
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      </h4>
    );
  }
}

// const Box = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   background-color: white;
//   border: solid;
//   border-color: black;
//   margin: 20px 20px;
//   height: 600px;
//   width: 900px;
//   align-items: center;
// `;

const HomeGif = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  /* padding-bottom: 10px; */
  border: thick solid;
  border-color: ${({ theme }) => theme.gold};
`;

const Container2 = styled.div`
  /* opacity: 0.2; */
  background: white;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
`;

// width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// #navi,
// #infoi {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// #infoi {
//   z-index: 10;
// }
