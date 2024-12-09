import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import { PopularRestorantsContainer, AllRestorantsContainer, Title } from './styles'
import IconNavigatorBuffer from '../../assets/General/IconRestaurantNavigator.png';
import Carousel from "../Carousel/Carousel";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/PapularRestaurant/claro.png';
import image2 from '../../assets/PapularRestaurant/Lumina.png';
import image3 from '../../assets/PapularRestaurant/tiger-lily.png';
const cards: CardData[] = [
    { id: 1, title: 'claro', imageUrl: image1, chefname: "Ran Shmueli", stars: 4 },
    { id: 2, title: 'Lumina', imageUrl: image2, chefname: "Meir Adoni", stars: 3 },
    { id: 3, title: 'Tiger Lilly', imageUrl: image3, chefname: "Yanir Green", stars: 4 }

];
const PopularRestorants: React.FC = () => {
    return (
        <PopularRestorantsContainer>
            <Title> {"POPULAR RESTAURAN IN EPICURE:"}</Title>
            <Carousel cards={cards} />
            <AllRestorantsContainer>
            <DynamicButton >
                    <img src={IconNavigatorBuffer} alt={"IconNavigatorBuffer"} />
            </DynamicButton>
            </AllRestorantsContainer>
        </PopularRestorantsContainer>
    );
};

export default PopularRestorants;