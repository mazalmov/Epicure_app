import styled from "styled-components";
import { Colors } from "../colors";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 24px;
  margin: 0 auto;
  background: ${Colors.Secondary.LightGrey};
  width: 100%; 
  box-sizing: border-box;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px) {
    padding-left:0;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${ScreenBreakPoints.md}px){
    max-width: 1185px;
    max-height: 430px ;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

  }

`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 2;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    order: 0;
    flex: 1;
    width: 50%;
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  order: 1;
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    position: relative; 
    padding: 10em;
    order: 0;
    flex: 1;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 50%;
    height: auto;
    max-width: 178.22px;
    max-height: 166px;
  }
`;

export const Title = styled.div`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: left;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-top: 20px;
    font-size: 30px;
    letter-spacing: 2.140000104904175px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  font-family: Helvetica Neue;
  line-height: 28px;
  text-align: left;
  font-weight: 200;
  letter-spacing: 2.140000104904175px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 20px;
  font-size: 18px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
  line-height: 30px;
    font-size: 20px;
    padding-left: 0;
    padding-right: 27px;
    & br {
      display: none; 
    }    
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 48px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    margin-bottom:0;
    flex-direction: row;
  }
`;

export const StoreButton = styled.img`
  max-width: 180px;
  height: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  max-width: 102px;
  height: auto;
  @media (min-width:${ScreenBreakPoints.md}px) {
    max-width: 180px;
    position: relative;
    left: 129px;
  }
`;

export const AboutText = styled.div`
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
  @media (max-width: ${ScreenBreakPoints.md}px) {
    order: 1;
  }
`;