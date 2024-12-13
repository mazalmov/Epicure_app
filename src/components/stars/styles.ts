import styled from "styled-components";
import { ScreenBreakPoints } from "../../constants/BreakPoints";

export const StarsContainer = styled.div`
  display: none; 
  @media (min-width: ${ScreenBreakPoints.md}px) { 
    display:block; 
    padding-bottom: 18px;

    }
`;
