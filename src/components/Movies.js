import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies() {
  const baseImgURL = "https://image.tmdb.org/t/p/w500";
  const api_key = "cbddb036583508d48b2ffac23fe1d399";
  const [imgURL, setImgURL] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=cbddb036583508d48b2ffac23fe1d399"
      )
      .then((res) => {
        setImgURL(res.data.results);
      });
  }, [imgURL]);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {imgURL.map((e, index) => {
          return (
            <Wrap key={e.id}>
              <Link to={`/detail/${e.id}`}>
                <img src={baseImgURL + e.poster_path} alt={e.title}></img>
              </Link>
            </Wrap>
          );
        })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  overflow: hidden;
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  margin: 15px 10px 30px;
  img {
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
