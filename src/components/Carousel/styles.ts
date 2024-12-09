import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import { Typography } from '../Typography';

export const CarouselWrapper = styled.div`
  display: block;
  flex-wrap: nowrap;
  width: 100%;
  padding: 16px;

  .swiper {
    display: block;
    justify-content: center;
    width: 100%;
  }

  .swiper-slide {
    display: block;
    justify-content: center;
    align-items: center;
  }
    
  .swiper-container {
    width: 100%;
    display: block;
  }


  @media (min-width: ${ScreenBreakPoints.md}px) {
    .swiper {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: 20px;
    }
    .swiper-slide {
      display: initial; 
    }
  }
  @media (max-width: ${ScreenBreakPoints.md - 1}px) {
    .swiper {
      display: flex;
      justify-content: center;
    }
  }
`;

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;
  height: auto;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;

`;

export const Title = styled.h3`
  text-align: center; 
  word-break: break-word;
  ${Typography.H2}
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  word-break: break-word;
  ${Typography.H3}
  
  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: column-reverse;
  }
  `;
