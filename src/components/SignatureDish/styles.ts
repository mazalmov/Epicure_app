import styled from "styled-components";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";
export const SignatureDishContainer = styled.div`
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const AllSignatureDish = styled.div`
    padding: 20px;
    ${Typography.H1}
    font-size: 24px;
    color: #333;
    margin: 0;
    text-align: left; 
    display: block;

    @media (min-width: ${ScreenBreakPoints.md}px) {
        flex: none;

    }
`;
export const Title = styled.h1`
  text-align: center; 
  word-break: break-word;
  ${Typography.H1}
`;
