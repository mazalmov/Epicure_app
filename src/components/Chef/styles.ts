import styled from "styled-components";
import { Colors } from "../colors";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";


export const ChefContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  background: ${Colors.Secondary.LightGrey};

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #000;
  text-align: center;
  font: ${Typography.H1};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    align-items: flex-start;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


export const ChefPicture = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;



export const ChefInfo = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  font: ${Typography.BodyText};
  text-align: left;

  @media (min-width: ${ScreenBreakPoints.md}px) {
    text-align: justify;
  }
`;

export const ChefImageContainer = styled.div`
  position: relative; 
  width: 100%;
 
`;


export const ChefName = styled.h3`
  position: absolute;
  bottom: 0;
  margin: 0; 
  width: 100%;
  background: ${Colors.Secondary.chefName};
  color: white;
  text-align: center;
  padding: 10px 0;
  font: ${Typography.H3};
  border-radius: 0 0 8px 8px;
`;

