import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import { SignatureDishContainer, AllSignatureDish, Title } from './styles'
import IconNavigatorBuffer from '../../assets/General/IconRestaurantNavigator.png';
import Carousel from "../Carousel/Carousel";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/SignatureDish/PadKiMao.png';
import image2 from '../../assets/SignatureDish/GarbanzoFrito.png';
import image3 from '../../assets/SignatureDish/SmokedPizza.png';
const cards: CardData[] = [
    { id: 1, title: 'Pad Ki Mao', imageUrl: image1, icon: 'spicy', description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut", price: 88 },
    { id: 2, title: 'Garbanzo Frito', imageUrl: image2, icon: 'spicy', description: "Polenta fingers, veal cheek, magic chili cured lemon cream,yellow laksa", price: 98 },
    { id: 3, title: 'Smoked Pizza', imageUrl: image3, icon: 'vegetarian', description: 'Basil dough, cashew "butter", demi-glace, bison & radish', price: 65 }
];

const SignatureDish: React.FC = () => {
    return (
        <SignatureDishContainer>
            <Title> {"POPULAR SIGNATURE DISH OF:"}</Title>

            <Carousel cards={cards} />
            <AllSignatureDish>
                <DynamicButton >
                    <img src={IconNavigatorBuffer} alt={"IconNavigatorBuffer"} />
                </DynamicButton>
            </AllSignatureDish>

        </SignatureDishContainer>
    );
};

export default SignatureDish;