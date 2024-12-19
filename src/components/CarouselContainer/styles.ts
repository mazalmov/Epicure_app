import styled from 'styled-components';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const RestorantsContainer = styled.div<{ className?: string }>`
  padding-left: 16px;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    justify-content: center;
    flex-direction: row;
    padding-bottom: 80px;
    max-width: 1185px;
    &.topChef {
      padding-left: 0;
    }
  }
  @media (min-width: ${ScreenBreakPoints.mmd}px) {
    padding-left: 16px;
    &.topChef {
      padding-left: 16px;
    }
  }
  @media (min-width: ${ScreenBreakPoints.lg}px) {
    padding-left: 0;
    &.topChef {
      padding-left: 0;
      margin: auto;
      align-items: left;
      justify-content: flex-end;
      width: 721px; 
      margin: 0;

    }
  }
`;

export const Title = styled.h1<{ className?: string }>`
  text-align: left;
  font-size: 36px;
  margin-bottom: 40px;
  color: #000;
  ${Typography.H1};
  letter-spacing: 1.25px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    text-align: center;
    font-size: 30px;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px) {
    &.topChef {
      text-align: left;
    }
  }
`;

export const AllRestorantsContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-top: 40px;
    justify-content: flex-end;
  }
`;
