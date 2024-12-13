import styled from "styled-components";
import { ScreenBreakPoints } from "../../../constants/BreakPoints";

export const MobileHeaderContainer = styled.header`
margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 63px;
  width: 100%;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    display: none;
  }
`;

export const HamburContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  max-width: 24px;
  max-height: 24px;

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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 32px;
  max-width: 33px;
  padding-top: 7px;
  padding-bottom: 7px;

`;

export const TreeButtonContainer = styled.div`
  justify-content: space-between;
  display: flex;
  padding-right: 20px;
  justify-content: flex-end;
  max-width: 100px;
  max-height: 20px;
  gap: auto;

`;

export const Image = styled.img`
  display: block;
  object-fit: contain;
  max-width: 20px;
  cursor: pointer;

`;
