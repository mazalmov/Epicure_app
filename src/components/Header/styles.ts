import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';

export const HeaderContainer = styled.header`
    display: none;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 14px;
    padding-bottom: 14px;
    max-width: ${ScreenBreakPoints.lg}px;
    align-items: center;
    max-height: 64px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: nowrap;
  max-width: inherit;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 126px;
  max-height: 33px;
`;

export const RestorantAndChefsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 7px;
  padding-left: 25px;
  flex-direction: row;
  align-items: end;
`;

export const RotatingElement = styled.div`
  max-width: 33px;
  display: inline-block;
  &:hover {
    animation: rotate 0.65s linear;
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export const LogoTitleDesktop = styled.div`
  max-width: 144px;
  display: flex;
  padding: 5px;
  width: 70%;
  height: auto;
`;

interface ImageProps {
  width?: string;
  height?: string;
}

export const Image = styled.img<ImageProps>`
  margin-left: 10px;
  display: block;
  object-fit: contain;
  padding-top: 6px;
  padding-bottom: 8px;
  cursor: pointer;
  max-width: ${({ width }) => width || 'auto'};
  max-height: ${({ height }) => height || 'auto'};
`;

export const TreeButtonContainer = styled.div`
  display: flex;
  max-height: 36px;
  justify-content: flex-end;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 410px;
  max-height: 36px;
`;

export const SearchText = styled.input`
  display: none;
  max-width: 372px;
  max-height: 22px;
  padding-left: 12px;
  padding-right: 24px;
  padding-top: 6px;
  padding-bottom: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    display: block;
    height: 30px;
  }

  @media (min-width: ${ScreenBreakPoints.lg}px) {
    height: 34px;
    font-size: 18px;
  }
`;
