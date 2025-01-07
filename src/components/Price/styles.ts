import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: #000;
  padding-bottom: 10px;
  padding-left:16px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-left:0px;
    justify-content: center; 
    position: relative;
    font-weight: normal;
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
font: Helvetica Neue;
color: #000000;
font-size: 16px;
font-weight: normal;
line-height: 30px;
letter-spacing: 1.9700000286102295px;
text-align: center;

@media (min-width: ${ScreenBreakPoints.md}px){
  font-size: 24px;
  font-weight: 200;
}
`;
