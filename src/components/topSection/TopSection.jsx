import React from "react";
import styled from "styled-components";
import logo from "../../assets/in3D_tech.png";
import bgAudio from "../../assets/audio/bgAudio.mp3";
const song = new Audio(bgAudio);
export default function TopSection() {
  const [play, setPlay] = React.useState(false);

  const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;
    z-index: 99;
  `;

  const Logo = styled.img`
    margin: 0;
    width: 150px;
    height: 150px;
    background-image: url(${logo});
  `;

  const Slogan = styled.h4`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 55px;
    margin-top: 10px;
  `;
  const Volume = styled.button`
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 32px;
    background-color: transparent;
    border: none;
  `;

  return (
    <TopSectionContainer>
      <Volume
        onClick={() => {
          play ? song.pause() : song.play();

          setPlay((prevState) => !prevState);
        }}
      >
        {play ? "🔊" : "🔈"}
      </Volume>
      <Logo src={logo} />
      <Slogan>in3D Tech - Daniel Levi</Slogan>
    </TopSectionContainer>
  );
}
