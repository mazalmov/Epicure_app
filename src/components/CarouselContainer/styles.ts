import styled from 'styled-components';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const RestorantsContainer = styled.div`
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
  }

`;

export const Title = styled.h1`
  text-align: left;
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  ${Typography.H1};
  letter-spacing: 1.25px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    text-align: center;
    font-size: 30px;
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
