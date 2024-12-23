import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";
import { Colors } from "../colors";

export const FooterContainer=styled.div`
    display: flex;
    flex-direction: column; 
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    background: ${Colors.Secondary.White};
    text-align: left; 
    
  @media (max-width: ${ScreenBreakPoints.sm}px) {
    padding-bottom: 5px;
  }
  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row; 
    justify-content: center;
    align-items: center;  
    gap: 30px;
    padding: 10px;
  }

`;
export const Text = styled.h2`
  margin-bottom: 20px;
  color: #000000;
  height: 22px;
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 200;
  line-height: 21.76px;
  letter-spacing: 1.9199999570846558px;
  text-align: left;
`;