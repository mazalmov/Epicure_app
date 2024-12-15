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

`;

export const Title = styled.h1`
  text-align: left;
  text-align: center;
  word-break: break-word;
  ${Typography.H1}
`;

export const SearchContainer = styled.div`
  color: #000000;
  align-items: center;
  justify-content: center;
  background: #FFFFFFE0;
  max-width: 335px;
  margin-top: 65px;
  margin-bottom: 64px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    max-height: 221px;
    max-width: 776px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom:37px ;
    margin-top: 236px;
    margin-bottom: 239px;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px) {

    padding-left: 187px;
    padding-right: 187px;

  }

`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 8px;
  justify-content: space-between;
  overflow: hidden;
  height: auto;
  overflow: hidden;
  max-width: 100%;

  @media (min-width: ${ScreenBreakPoints.sm}px) {
    max-width: 335px;
    max-height: 144px;
  }
  @media (min-width: ${ScreenBreakPoints.md}px) {
    max-width: 505px;
    max-height: 48px;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    min-width: 505px;
    height: 50px;
  }
`;

export const HeroSearchText = styled.input`
  flex-grow: 1;
  padding: 8px 8px 8px 32px;
  width: 100%;
  height: 100%;
  border: 0.5px solid #000000;
  border-radius: 4px;
  font-size: 32px;
  ${Typography.InputText};
  box-sizing: border-box;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left 8px center;
  
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
    font-size: 12px;
    min-width: 375px;
  }


  @media (min-width: ${ScreenBreakPoints.md}px) {
    background-position: left 12px center;

  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    background-position: left 14px center;
  }
`;

