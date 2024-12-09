import React from "react";
import DynamicButton from "../DynamicButton/DynamicButton";
import { ChefRestorantsContainer, AllRestorantsContainer, Title} from './styles'
import IconNavigatorBuffer from '../../assets/General/IconRestaurantNavigator.png';
import Carousel from "../Carousel/Carousel";
import { CardData } from '../../constants/CardData';
import image1 from '../../assets/TopChef/onza.png';
import image2 from '../../assets/TopChef/kitchen_market.png';
import image3 from '../../assets/TopChef/mashya.png';
import chefPhoto from '../../assets/TopChef/chefPhoto.png';
import Chef from "../Chef/Chef";

interface ChefProp {
    fullName: string;
    imageUrl: string;
    chefInfo: string;
  }
const ChefInfo: ChefProp= 
    {  fullName: 'Yossi Shitrit', imageUrl: chefPhoto,chefInfo: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish."}
 

;
const cards: CardData[] = [
    { id: 1, title: 'Onza', imageUrl: image1},
    { id: 2, title: 'Kitchen Market', imageUrl: image2 },
    { id: 3, title: 'Mashya', imageUrl: image3}

];
const TopChef: React.FC = () => {
    return (
        <>
        <Chef fullName={ChefInfo.fullName} imageUrl={ChefInfo.imageUrl} chefInfo={ChefInfo.chefInfo}>

        </Chef>

        <ChefRestorantsContainer>
            <Title> {"Yossi’s Restaurants:"}</Title>
            <Carousel cards={cards} />
            <AllRestorantsContainer>
            <DynamicButton >
                    <img src={IconNavigatorBuffer} alt={"IconNavigatorBuffer"} />
            </DynamicButton>
            </AllRestorantsContainer>
        </ChefRestorantsContainer>
        </>
    );
};

export default TopChef;