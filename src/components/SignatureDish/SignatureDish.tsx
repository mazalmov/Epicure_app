import React from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/SignatureDish/PadKiMao.png';
import image2 from '../../assets/SignatureDish/GarbanzoFrito.png';
import image3 from '../../assets/SignatureDish/SmokedPizza.png';
const cards: CardData[] = [
    { id: 1, title: 'Pad Ki Mao', imageUrl: image1, icon: 'spicy', description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut", price: 88 },
    { id: 2, title: 'Garbanzo Frito', imageUrl: image2, icon: 'spicy', description: "Polenta fingers, veal cheek, magic chili cured lemon cream,yellow laksa", price: 98 },
    { id: 3, title: 'Smoked Pizza', imageUrl: image3, icon: 'vegetarian', description: 'Basil dough, cashew "butter", demi-glace, bison & radish', price: 65 },
    { id: 4, title: 'Pad Ki Mao', imageUrl: image1, icon: 'spicy', description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut", price: 88 },
    { id: 5, title: 'Garbanzo Frito', imageUrl: image2, icon: 'spicy', description: "Polenta fingers, veal cheek, magic chili cured lemon cream,yellow laksa", price: 98 },
    { id: 6, title: 'Smoked Pizza', imageUrl: image3, icon: 'vegetarian', description: 'Basil dough, cashew "butter", demi-glace, bison & radish', price: 65 }
];

const SignatureDish: React.FC = () => {
    return (
            <CarouselContainer cards={cards} title="POPULAR SIGNATURE DISH OF:" className="signatureDish" />
    );
};

export default SignatureDish;