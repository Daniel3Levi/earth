import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/in3D_tech.png';

export default function TopSection() {
  const TopSctionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Logo = styled.img`
    margin: 0;
    width: 60px;
    height: 60px;
    background-image: url(${logo});
  `;

  const Slogen = styled.h4`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
  `;

  return (
    <TopSctionContainer>
      <Logo src={logo} />
      <Slogen>in3D Tech - Daniel Levi</Slogen>
    </TopSctionContainer>
  );
}
