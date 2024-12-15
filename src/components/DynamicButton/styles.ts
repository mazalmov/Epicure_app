
import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const ButtonContainer = styled.button`
  display: flex; 
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  &.signatureDish {
    display: flex;
    padding-top: 18.5px;
    padding-bottom: 48px;


    @media (min-width: ${ScreenBreakPoints.md}px) {
      display: none; 
    }
  }

  &.topChef {
    display: flex;
    padding-top: 18.5px;
    padding-bottom: 48px;

    @media (min-width: ${ScreenBreakPoints.md}px) {
      display: none; 
    }
  }

  &.popularRestorant {
    display: flex;
    padding-top: 18.5px;
    padding-bottom: 48px;


    @media (min-width: ${ScreenBreakPoints.md}px) {
      justify-content: end;
    }
  }
`;
