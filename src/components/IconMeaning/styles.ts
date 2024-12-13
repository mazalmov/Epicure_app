import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

 export const IconMeaningContainer = styled.div`
    align-items: center;
    justify-content: center;

 `;

export const IconContainer = styled.img`
    width: ${({ width }) => (width ? `${width}px` : '30px')}; 
    height: ${({ height }) => (height ? `${height}px` : '23px')};  
    @media (min-width: ${ScreenBreakPoints.md}px){
        width: ${({ width }) => (width ? `${width}px` : '40px')};  
        height: ${({ height }) => (height ? `${height}px` : '31px')}; 

    }
`;

