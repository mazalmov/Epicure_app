import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding-bottom: 10px;
  padding-left:16px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-left:0px;
    justify-content: center; 
    position: relative;
    width: 80%;
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      height: 1px;
      background: #979797;
    }

    &::before {
      margin-right: 15px;
    }

    &::after {
      margin-left: 8px;
    }
  }
`;

export const PriceText = styled.span`
color: #000000;
font-size: 24px;
font-weight: 200;
line-height: 30px;
letter-spacing: 1.9700000286102295px;
text-align: center;

`;
