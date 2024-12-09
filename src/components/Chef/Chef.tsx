import React from "react";
import {
  ChefContainer,
  TitleContainer,
  Title,
  Layout,
  LeftColumn,
  RightColumn,
  ChefPicture,
  ChefName,
  ChefInfo,
  ChefImageContainer,
} from "./styles";

interface ChefProp {
  fullName: string;
  imageUrl: string;
  chefInfo: string;
}

const Chef: React.FC<ChefProp> = ({ fullName, imageUrl, chefInfo }) => {
  return (
    <ChefContainer>
      <TitleContainer>
        <Title>CHEF OF THE WEEK:</Title>
      </TitleContainer>
      <Layout>
        <LeftColumn>
        <ChefImageContainer>
          <ChefPicture src={imageUrl} alt={fullName} />
          <ChefName>{fullName}</ChefName>
          </ChefImageContainer>
        </LeftColumn>
        <RightColumn>
          <ChefInfo>{chefInfo}</ChefInfo>
        </RightColumn>
      </Layout>
    </ChefContainer>
  );
};

export default Chef;
