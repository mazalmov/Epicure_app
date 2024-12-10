import styled from "styled-components";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";
export const SignatureDishContainer = styled.div`
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const AllSignatureDish = styled.div`
    display: flex;
    padding: 20px;
    justify-content: flex-start;
    @media (min-width: ${ScreenBreakPoints.md}px) {
        display: none;
    }
`;


export const Title = styled.h1`
  text-align: center; 
  word-break: break-word;
  ${Typography.H1}
`;
