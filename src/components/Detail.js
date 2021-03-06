import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const api_key = process.env.REACT_APP_API_KEY;
  const baseImgURL = "https://image.tmdb.org/t/p/w500/";
  const { id } = useParams();
  const bgURL =
    "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key;
  const logoURL =
    "https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + api_key;
  const [bgImgURL, setBgImgURL] = useState([]);
  const [logoImgURL, setLogoImgURL] = useState([]);
  useEffect(() => {
    axios.get(bgURL).then((res) => {
      setBgImgURL(res.data);
    });
    axios.get(logoURL).then((res) => {
      setLogoImgURL(res.data.logos[0]);
    });
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={baseImgURL + bgImgURL.poster_path}></img>
      </Background>
      <ImageTitle>
        <img src={baseImgURL + logoImgURL.file_path}></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"></img>
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"></img>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"></img>
        </GroupWatchButton>
      </Controls>
      <Subtitle></Subtitle>
      <Description>{bgImgURL.overview}</Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.8;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  height: 56px;
  border-radius: 5px;
  border: none;
  margin-right: 22px;
  font-size: 15px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 900px;
`;
