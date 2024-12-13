import styled from "styled-components";
import { Colors } from "../colors";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";


export const MeaningIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    width: inherit;
    margin: 0 auto;
    background: ${Colors.Secondary.LightGrey};

  @media (min-width: ${ScreenBreakPoints.md}px) {
    justify-content: space-between;
  }
`;
export const TitleConteiner = styled.div`
order:1;
  width: 100%;
  display: flex;
  justify-content: center;  
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  text-align: center; 
  font: ${Typography.H1};
`;

export const Text = styled.h3`
  display: flex;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
  font: ${Typography.BodyText};
`;
export const TreeIcons = styled.div`
  order:2;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row; 
    justify-content: center;
    max-width: 488px;
  }
`;

export const IconContainer = styled.div`
  width: 100%;     
  height: 100%;     
  display: flex;    
  justify-content: center;  
  align-items: center;     

  img {
    width: 100%;      
    height: 100%;     
    object-fit: contain;  
  }


`;

