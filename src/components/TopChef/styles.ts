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
  flex-direction: row;
  padding: 20px;
  ${Typography.H1}
  font-size: 24px;
  color: #333;
  margin: 0;
  justify-content: flex-start;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    justify-content: flex-end;
    flex-direction: row-reverse;
  }
`;

export const ChefRestorantsContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
