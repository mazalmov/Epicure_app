import React from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/TopChef/onza.png';
import image2 from '../../assets/TopChef/kitchen_market.png';
import image3 from '../../assets/TopChef/mashya.png';
import chefPhoto from '../../assets/TopChef/chefPhoto.png';
import Chef from "../Chef/Chef";
import { TopChefContainer } from "./styles";

interface ChefProp {
    fullName: string;
    imageUrl: string;
    chefInfo: string;
  }
const ChefInfo: ChefProp= 
    {  fullName: 'Yossi Shitrit', imageUrl: chefPhoto,chefInfo: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish."}
 

;
const cards: CardData[] = [
    { id: "1", title: 'Onza', imageUrl: image1},
    { id: "2", title: 'Kitchen Market', imageUrl: image2 },
    { id: "3", title: 'Mashya', imageUrl: image3},
    { id: "4", title: 'Onza', imageUrl: image1},
    { id: "5", title: 'Kitchen Market', imageUrl: image2 },
    { id: "6", title: 'Mashya', imageUrl: image3}

];
const TopChef: React.FC = () => {
    return (
        <TopChefContainer>
        <Chef fullName={ChefInfo.fullName} imageUrl={ChefInfo.imageUrl} chefInfo={ChefInfo.chefInfo}/>
        <CarouselContainer cards={cards} title="YOSSI’S RESTAURANTS:" className={"topChef"}/>
        </TopChefContainer>
    );
};

export default TopChef;