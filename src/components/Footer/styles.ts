import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";
import { Colors } from "../colors";
import { Typography } from "../Typography";

export const FooterContainer=styled.div`
    display: flex;
    flex-direction: column; 
    padding: 19px;
    width: 100%;
    margin: 0 auto;
    background: ${Colors.Secondary.White};
    text-align: left; 
    

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row; 
    justify-content: center;
    align-items: center;  
    gap: 30px;
  }

`;
export const Text = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  height: 22px;
  font: ${Typography.H2};
`;