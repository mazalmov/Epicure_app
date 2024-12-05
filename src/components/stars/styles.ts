import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const StarsContainer = styled.div `
    display: none;
    @media (min-width: ${ScreenBreakPoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 100%;
    width: 100%;
    
  }

`;
