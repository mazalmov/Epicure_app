import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import { RestorantsContainer, AllRestorantsContainer, Title } from './styles'
import Carousel from "../Carousel/Carousel";
import { CardData } from '../../constants/CardData';
import IconNavigatorBuffer from '../../assets/General/IconRestaurantNavigator.png';


interface CarouselContainerProp{
    cards: CardData[],
    title: string,
    className?: "signatureDish" | "topChef" | "popularRestorant";
}

const CarouselContainer: React.FC <CarouselContainerProp>= ({cards,title,className}) => {
    return (
        <RestorantsContainer>
            <Title> {title}</Title>
            <Carousel cards={cards} />
            <AllRestorantsContainer>
            <DynamicButton className={className}>
                    <img src={IconNavigatorBuffer} alt={"IconNavigatorBuffer"} />
            </DynamicButton>
            </AllRestorantsContainer> 
        </RestorantsContainer>
    );
};
export default CarouselContainer;