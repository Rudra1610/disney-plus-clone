import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/Viewers-disney.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-pixar.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-marvel.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-starwars.png"></img>
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-national.png"></img>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  overflow: hidden;
  grid-gap: 25px;
  padding: 30px 0px 26px;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.94) 0s;
  margin-left: 40px;
  margin-right: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
      rgb(0 0 0/72%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
