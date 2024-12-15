import styled from 'styled-components';
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import { Colors } from '../colors';

export const CarouselWrapper = styled.div`
  display: block;
  flex-wrap: nowrap;
  width: 100%;
  .swiper {
    display: block;
    justify-content: center;
    height: 100%;
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


`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Secondary.Beige};
  text-align: left;
  justify-content: center;
  width: 245px;
  height: auto;
  justify-content: space-between;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    height: auto;
    width: 380px;
    align-items: center;
    text-align: center;
  }
`;

export const ChefName = styled.p`
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 1.9700000286102295px;
  text-align: left;
  padding-left:16px;
  width: 200px;
  margin: 0px;
  margin-bottom: 8px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    text-align: center;
    margin-top: 5px;
    padding-left:0px;
    font-size: 24px;
  }
`;

export const Title = styled.h1<{ $chefName?: string; $description?: string }>`
  text-align: left;
  padding-left: 16px;
  height: 50px;
  font-family: Helvetica Neue;
  font-size: 20px;
  font-weight: 400;
  line-height: 47px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    padding-bottom: ${({ $chefName, $description }) => {
      if ($chefName && !$description) return '0';
      if ($description) return '50px';
      return '50px';
    }};
    font-size: 40px;
    text-align: center;
    justify-content: left;
    padding-left: 96px;
    padding-right: 96px;
  }
`;


export const Description = styled.div`
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 1.9700000286102295px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-end;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    justify-content: flex-end;
    padding-bottom: 10px;
    height: 180px;
    display: flex;
    flex-direction: column-reverse;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

