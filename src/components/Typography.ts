import { css } from 'styled-components';

export const Typography = {
  H1: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 24px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: 768px) {
      font-size: 32px; 
    }
  `,
  H2: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: 768px) {
      font-size: 30px; 
    }
  `,
  H3: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px; 
    font-weight: 400;
    color: #000000;

    @media (min-width: 768px) {
      font-size: 40px; 
    }
  `,
  BodyText: css`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    color: #000000;

    @media (min-width: 768px) {
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
    @media (min-width: 768px) {
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
