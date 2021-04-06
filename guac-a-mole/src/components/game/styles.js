import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border: solid;
  border-color: #32cd32;
  border-width: 5px;
  margin: 20px 20px;
  height: 500px;
  width: 800px;
  align-items: center;
`;

export const Container = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Hole = styled.div`
  background-color: black;
  border: solid;
  border-color: black;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-left: 50px;
  margin: 10px 30px;
`;

export const AvocadoImage = styled.img`
  height: 200px;
  width: 200px;
  /* margin-left: 60px; */
`;

export const ImageContainer = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  font-size: 25px;
  background-color: white;
  border: solid;
  border-width: 4px;
  border-color: #32cd32;
  color: #32cd32;
  margin: 20px 20px;
  height: 60px;
  width: 120px;
`;

export const ScoreBoard = styled.div`
  margin-top: 10px;
  font-size: 40px;
  text-align: "center";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;
