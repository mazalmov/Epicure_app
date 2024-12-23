import { css } from 'styled-components';
import { ScreenBreakPoints } from '../constants/BreakPoints';
export const Typography = {
  H1: css`
    font-family: 'Helvetica Neue', sans-serif;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 24px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: ${ScreenBreakPoints.md}px) {
      font-size: 32px; 
    }
  `,
  H2: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: ${ScreenBreakPoints.md}px) {
      font-size: 20px; 
    }
  `,
  H3: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px; 
    font-weight: 400;
    color: #000000;

    @media (min-width: ${ScreenBreakPoints.md}px) {
      font-size: 32px; 
    }
  `,
  BodyText: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: ${ScreenBreakPoints.md}px) {
      font-size: 24px; 
    }
  `,
  Button: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    color: #FFFFFF;
    background-color: #000000;
    text-transform: uppercase;
  `,
  InputText: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    color: #000000;
    text-align: center;
    @media (min-width: ${ScreenBreakPoints.md}px) {
      font-size: 20px; 
    }
  `,
  LabelText: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 14px; 
    font-weight: 300;
    color: #979797;
  `,
};
