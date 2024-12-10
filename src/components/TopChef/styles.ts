import styled from 'styled-components';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  font: ${Typography.H1};
`;

export const AllRestorantsContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  @media (min-width: ${ScreenBreakPoints.md}px) {
      display: none;
  }
`;



export const ChefRestorantsContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
