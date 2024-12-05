import styled from "styled-components";
 import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const IconMeaningContainer = styled.img`
        width: 30;
        height: 23;
    @media (min-width: ${ScreenBreakPoints.md}px){
        width: 40;
        height: 30;

    }

  
`;