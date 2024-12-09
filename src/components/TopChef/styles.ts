
import styled from 'styled-components';
import { Colors } from '../colors';
import { Typography } from '../Typography';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const MeaningIconsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  background: ${Colors.Secondary.LightGrey};
  text-align: center; 

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row; 
    justify-content: center;
    align-items: center;  
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  font: ${Typography.H1};
`;

export const Text = styled.h3`
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
  font: ${Typography.BodyText};
`;


export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; 

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: ${ScreenBreakPoints.md}px) {
    width: auto;  
    margin-bottom: 0;  
    flex-direction: row;  
  }
`;
export const AllRestorantsContainer = styled.div`
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


