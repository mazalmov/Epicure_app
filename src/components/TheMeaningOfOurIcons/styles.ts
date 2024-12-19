import styled from "styled-components";
import { Colors } from "../colors";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const MeaningIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
  background: ${Colors.Secondary.LightGrey};
`;

export const TitleConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 35px;
  letter-spacing: 1.25px;
  text-align: center;
  font:${Typography.H1};
  margin-bottom: 32px;
  color: #000;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 2.14px;
  }
`;

export const Text = styled.h3`
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-align: center;
  color: #000;
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1.5px;
  }
`;
export const TreeIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  max-width: 136px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row;
    max-width:488px;
    justify-content: center;
    gap: 98.6px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 136px;
  max-height: 101px;
  @media (min-width: ${ScreenBreakPoints.md}px){
    max-width: 136px;
    max-height: 127px;
  }
  img {
    width: 47px;
    height: 36px;
    object-fit: contain;
    @media (min-width: ${ScreenBreakPoints.md}px){
      width: 78px;
      height: 60px;
      margin-bottom: 8px;
    }
  }

  h3 {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;
    letter-spacing: 1.9700000286102295px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${Colors.Primary.Black};
    @media (min-width: ${ScreenBreakPoints.md}px){
    font-size: 24px;
    font-weight: 200;
    line-height: 30px;
    }
  }
`;
