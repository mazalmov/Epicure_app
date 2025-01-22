import styled from 'styled-components';
import HeroBackgroundDesktop from '../../assets/Desktop/HeroPicture_Desktop.png';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import searchIcon from '../../assets/General/search_icon.png';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroBackgroundDesktop});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-size: cover;
  margin-bottom: 48px;
  @media (min-width: ${ScreenBreakPoints.md}px){
    margin-bottom: 70px;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px){
    margin-bottom: 80px;
  }  

`;

export const Title = styled.h1`
  text-align: left;
  text-align: center;
  word-break: break-word;
  width: auto;
  letter-spacing: 1.9700000286102295px;
  ${Typography.H1}
  margin-bottom: 0;
  @media (min-width: ${ScreenBreakPoints.md}px){
    max-width: 402px;
    letter-spacing: 0;
    margin-bottom: 16px;
  }
`;

export const SearchContainer = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFFE0;
  max-width: 335px;
  margin-top: 65px;
  margin-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
  height: auto;
  
  @media (min-width: ${ScreenBreakPoints.sm}px) {
    max-width: 505px; 
  }
  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom:37px ;
    margin-top: 236px;
    margin-bottom: 239px;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px) {
    max-height: 221px;
    width: 776px;
    padding-left: 135px;
    padding-right: 135px;
  }

`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110%;
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  overflow: hidden;
  height: auto;
  overflow: hidden;
  @media (min-width: ${ScreenBreakPoints.sm}px) {
    width:100%;
    padding:20px;
  }
  @media (min-width: ${ScreenBreakPoints.md}px) {
    max-width: 505px;
    padding: 0;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
  }
`;

export const HeroSearchText = styled.input`
  flex-grow: 1;
  padding: 8px 8px 8px 32px;
  width: 100%;
  border: 0.5px solid #000000;
  border-radius: 4px;
  ${Typography.InputText};
  font-size: 12px;
  box-sizing: border-box;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left 8px center;
  letter-spacing: 1.2899999618530273px;
  overflow: visible;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::placeholder {
    color: #A6A6A6;
    ${Typography.InputText}
  }

  &:focus {
    outline: none;
  }
  @media (min-width: ${ScreenBreakPoints.sm}px) {
    min-width: 375px;
  }


  @media (min-width: ${ScreenBreakPoints.md}px) {
    background-position: left 12px center;
    font-size: 24px;
    letter-spacing: 0px;

  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    background-position: left 14px center;
  }
`;

