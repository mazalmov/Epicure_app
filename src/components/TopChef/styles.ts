import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const TopChefContainer = styled.div`
  margin: auto;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    max-width: 1185px;
    flex-direction: row; 
    justify-content: center;
    align-items: center;  
  }
`;
