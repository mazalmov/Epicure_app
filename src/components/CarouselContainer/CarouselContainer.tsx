import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import { RestorantsContainer, AllRestorantsContainer, Title } from './styles'
import Carousel from "../Carousel/Carousel";
import { CardData } from '../../constants/CardData';
import IconNavigatorBuffer from '../../assets/General/IconRestaurantNavigator.png';


interface CarouselContainerProp{
    cards: CardData[],
    title: string,
}

const CarouselContainer: React.FC <CarouselContainerProp & {className?:string}>= ({cards,title,className}) => {
    return (
        <RestorantsContainer className={className}>
            <Title className={className}> {title}</Title>
            <Carousel cards={cards} className={className}/>
            <AllRestorantsContainer>
            <DynamicButton className={className}>
                    <img src={IconNavigatorBuffer} alt={"IconNavigatorBuffer"} />
            </DynamicButton>
            </AllRestorantsContainer> 
        </RestorantsContainer>
    );
};
export default CarouselContainer;