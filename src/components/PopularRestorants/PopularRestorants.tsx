import React from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/PapularRestaurant/claro.png';
import image2 from '../../assets/PapularRestaurant/Lumina.png';
import image3 from '../../assets/PapularRestaurant/tiger-lily.png';

const cards: CardData[] = [
    { id: 1, title: 'claro', imageUrl: image1, chefname: "Ran Shmueli", stars: 4 },
    { id: 2, title: 'Lumina', imageUrl: image2, chefname: "Meir Adoni", stars: 3 },
    { id: 3, title: 'Tiger Lilly', imageUrl: image3, chefname: "Yanir Green", stars: 4 },
    { id: 4, title: 'claro', imageUrl: image1, chefname: "Ran Shmueli", stars: 4 },
    { id: 5, title: 'Lumina', imageUrl: image2, chefname: "Meir Adoni", stars: 3 },
    { id: 6, title: 'Tiger Lilly', imageUrl: image3, chefname: "Yanir Green", stars: 4 }
];

const PopularRestorants: React.FC = () => {
    return (
            <CarouselContainer cards={cards} title="POPULAR RESTAURAN IN EPICURE:" className="popularRestorant" />      
    );
};

export default PopularRestorants;
