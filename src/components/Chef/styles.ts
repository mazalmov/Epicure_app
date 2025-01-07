import styled from "styled-components";
import { Colors } from "../colors";
import { Typography } from "../Typography";
import { ScreenBreakPoints } from "../../constants/BreakPoints";


export const ChefContainer = styled.div`
  margin: auto;
  padding-top:48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    max-width: 1185px;
    margin-bottom: 45px;
    padding: 0;
  }
  @media (min-width: ${ScreenBreakPoints.mmd}px){
    padding-left: 20px;
  }
  @media (min-width: ${ScreenBreakPoints.lg}px){
    padding-left: 0;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
font-family: Helvetica Neue;
font-size: 18px;
font-weight: 200;
line-height: 35px;
letter-spacing: 1.25px;
text-align: left;
text-decoration-skip-ink: none;
@media (min-width: ${ScreenBreakPoints.sm}px) {
  text-align: center;
  }
  @media (min-width: ${ScreenBreakPoints.md}px){
    font-size: 30px;
  }
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
  text-align: center;
  margin: auto;
  @media (min-width: ${ScreenBreakPoints.md}px) {
    align-items: flex-start;
    padding: 20px;
  }
  @media (max-width: ${ScreenBreakPoints.sm}px) {
    padding-top:0;
    padding-bottom: 0;
}
`;


export const ChefPicture = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  max-width: 400px;
  height: auto;
`;
export const ChefInfo = styled.p`
  font-size: 16px;
  line-height: 1.8;
  font: ${Typography.BodyText};
  text-align: left;
  @media (max-width: ${ScreenBreakPoints.sm}px){
    margin-top: 0;
  }
  
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
  letter-spacing: 2.6700000762939453px;
`;

