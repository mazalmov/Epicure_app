import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  width: 90%;
  max-height: 40px ;
  background-color: white;
  flex-direction: row;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding: 10px;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    padding: 20px;
  }
`;
export const HamburContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  padding: 15px;
  width: auto; 
  display: block;
  
  @media (${ScreenBreakPoints.md}px) {
    display: none;
    padding: 20px;
  }

  @media (${ScreenBreakPoints.lg}px) {
    padding: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;
  width: 100%; 
  max-width: 200px; 
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding: 20px;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    padding: 30px;
  }
`;


export const LogoTitleDesktop = styled.div`
  display: none;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    display: flex;
    padding: 5px;
    width: 70%;
    height: auto;
    display: block;
  }
`;


  export const Image = styled.img`
  width: 100%;    
  height: auto;    
  object-fit: contain; 
  cursor: pointer;
`;

export const TreeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  gap: 10px;  
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    width: 60%;
    width: auto;  
    height: auto;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    width: auto; 
    height: auto;
  }
`;
export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;  
  width: auto; 
  padding: 0;
  margin: 0; 
`;

export const SearchText = styled.input`
  display: none;  
  width: 100%;  
  padding: 5px;
  border: none; 
  border-radius: 4px;
  font-size: 16px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    display: block;
    height: 30px;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    height: 34px;
    font-size: 18px;
  }
`;

export const RestorantAndChefsContainer = styled.div`
  display: none; 

  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    gap: 10px;
    display: flex; 
    flex-direction: row; 
    width: 20%;
    height: auto;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    width: 374px;
    height: 34px;
  }
`;

export const RotatingElement = styled.div`
  display: inline-block;
  &:hover {
    animation: rotate 0.65s linear;
  }

  @keyframes rotate {
    from {
    transform: rotateY(0deg);
    }
    to {
    transform: rotateY(360deg);
    }
  }
`;