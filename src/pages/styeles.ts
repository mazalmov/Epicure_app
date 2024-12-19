import styled from "styled-components";
import { ScreenBreakPoints } from "../constants/BreakPoints";
import { Colors } from "../components/colors";

export const HomePageContainer = styled.div`
  display: block;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  height: 100vh; 
  width: 100%; 
  background-color: ${Colors.Secondary.White};
  @media (min-width: ${ScreenBreakPoints.md}px) {
    gap:70px;
} 
`;

