import styled from 'styled-components';
import HeroBackgroundDesktop from '../../assets/Desktop/HeroPicture_Desktop.png';
import HeroBackgroundMobile from '../../assets/Mobile/HeroPicture_Mobile.png';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import searchIcon from '../../assets/General/search_icon.png';
export const Title = styled.h1`
    text-align: center; 
    word-break: break-word;
    ${Typography.H1}
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroBackgroundMobile});
  background-size: cover; 
  flex-direction: column;
  background-position: center; 
  border: none;
  padding: 0 16px;
  width: 100%;
  height: 273px; 
  box-sizing: border-box; 

  @media (min-width: ${ScreenBreakPoints.md}px) {
    background-image: url(${HeroBackgroundDesktop});
    height: 600px;
  }

  @media (min-width:${ScreenBreakPoints.lg}px) {
    height: 700px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%; 
  max-width: 1200px;
  height: auto; 
  align-items: center;
  background: #FFFFFFE0;
  box-sizing: border-box; 
  padding: 16px; 

  @media (${ScreenBreakPoints.md}px) {
    width: 55%;
    height: auto;
  }

  @media (${ScreenBreakPoints.lg}px) {
    width: 50%;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px; 
  height: 50px; 
  box-sizing: border-box;
  padding: 8px;
  justify-content: space-between; 
  overflow: hidden; 

  @media (${ScreenBreakPoints.md}px) {
    width: 75%;
    height: 56px; 
  }

  @media (${ScreenBreakPoints.lg}px) {
    width: 60%;
    height: 50px;
  }
`;

export const HeroSearchText = styled.input`
  flex-grow: 1;
  padding: 8px 8px 8px 32px; 
  width: 100%; 
  height: 100%;
  border: none;
  border-radius: 4px;
  font-size: 32px;
  ${Typography.InputText}
  box-sizing: border-box;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px; 
  background-position: left 8px center;

  

  &::placeholder {
    color: #A6A6A6;
    ${Typography.InputText}
  }
  
  &:focus {
    outline: none;  
  }
  @media (${ScreenBreakPoints.md}px) {
    background-position: left 12px center;
  }
  @media (${ScreenBreakPoints.lg}px) {
    background-position: left 14px center;
  }

`;
