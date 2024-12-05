import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: #000;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    justify-content: center;
    position: relative;
    width: 100%;

    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      height: 1px;
      background: #000;
    }

    &::before {
      margin-right: 8px;
    }

    &::after {
      margin-left: 8px;
    }
  }
`;

export const PriceText = styled.span`
    font-family: 'Helvetica Neue', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 4px;
`;
