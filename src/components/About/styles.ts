import styled from "styled-components";
import { Colors } from "../colors";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";


export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  background: ${Colors.Secondary.LightGrey};

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row;
    justify-content: space-between;
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
    order: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  text-align: left;
  font: ${Typography.H1};
`;

export const Paragraph = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
  font: ${Typography.BodyText};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const StoreButton = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
`;

export const AboutText = styled.div`
  text-align: left;
  word-wrap: break-word; 
  white-space: normal; 

  @media (max-width: ${ScreenBreakPoints.md - 1}px) {
    order: 1;
  }
`;