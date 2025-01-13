// import React from "react";
// import CarouselContainer from "../CarouselContainer/CarouselContainer";
// import { CardData } from '../../constants/CardData';
// import image1 from '../../assets/TopChef/onza.png';
// import image2 from '../../assets/TopChef/kitchen_market.png';
// import image3 from '../../assets/TopChef/mashya.png';
// import chefPhoto from '../../assets/TopChef/chefPhoto.png';
// import Chef from "../Chef/Chef";
// import { TopChefContainer } from "./styles";

// interface ChefProp {
//     fullName: string;
//     imageUrl: string;
//     chefInfo: string;
//   }
// const ChefInfo: ChefProp= 
//     {  fullName: 'Yossi Shitrit', imageUrl: chefPhoto,chefInfo: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish."}
 
// const cards: CardData[] = [
//     { id: "1", title: 'Onza', imageUrl: image1},
//     { id: "2", title: 'Kitchen Market', imageUrl: image2 },
//     { id: "3", title: 'Mashya', imageUrl: image3},
//     { id: "4", title: 'Onza', imageUrl: image1},
//     { id: "5", title: 'Kitchen Market', imageUrl: image2 },
//     { id: "6", title: 'Mashya', imageUrl: image3}

// ];
// const TopChef: React.FC = () => {
//     return (
//         <TopChefContainer>
//         <Chef fullName={ChefInfo.fullName} imageUrl={ChefInfo.imageUrl} chefInfo={ChefInfo.chefInfo}/>
//         <CarouselContainer cards={cards} title="YOSSI’S RESTAURANTS:" className={"topChef"}/>
//         </TopChefContainer>
//     );
// };

// export default TopChef;

import React, { useEffect } from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { TopChefContainer } from "./styles";
import Chef from "../Chef/Chef";
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChef } from "../../store/slices/chefSlice";
import { CardData } from "../../constants/CardData";
import { getRandomFromArray } from "../../constants/Functions";
import { RootState } from '../../store/store';
import { selectRestaurants, selectRestaurantsStatus} from "../PopularRestorants/PopularRestorants";



import image1 from '../../assets/TopChef/onza.png';
import image2 from '../../assets/TopChef/kitchen_market.png';
import image3 from '../../assets/TopChef/mashya.png';
import chefPhoto from '../../assets/TopChef/chefPhoto.png';

interface ChefProp {
    fullName: string;
    imageUrl: string;
    chefInfo: string;
  }

export const selectChef = (state: RootState) => state.chef.items;
export const selectChefStatus = (state: RootState) => state.chef.status;

const TopChef: React.FC = () => {
    const restaurants = useSelector(selectRestaurants);
    const restaurantStatus = useSelector(selectRestaurantsStatus);
  
    const dispatch = useDispatch<AppDispatch>();
    const chefs = useSelector(selectChef);
    const status = useSelector(selectChefStatus);
  
    useEffect(() => {
      dispatch(fetchChef());
    }, [dispatch]);
  
    const images = [image1, image2, image3];
    const topChefName = 'Yossi shitrit';
    const topChef = chefs.find((chef) => chef.name === topChefName);
    console.log("topChef", topChef);
  
    let ChefInfo: ChefProp = {
      fullName: 'Chef undefined',
      imageUrl: chefPhoto,
      chefInfo:
        'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades...',
    };
  
    if (topChef) {
      ChefInfo = {
        fullName: topChef.name,
        imageUrl: chefPhoto,
        chefInfo: (topChef as any).info,
      };
    }
  
    const yossiRestaurants = topChef
      ? restaurants.filter((restaurant) =>
          topChef.restaurantIds.includes(restaurant._id)
        )
      : [];
  
    console.log("yossiRestaurants", yossiRestaurants);
  
    const transformedChefRestaurants: CardData[] = yossiRestaurants.map(
      (restaurant) => ({
        id: restaurant._id,
        title: restaurant.name,
        imageUrl: getRandomFromArray(images),
        chefName: topChef?.name|| 'Chef undefined',
        stars: Number(restaurant.rank),
      })
    );
  
    if (status === 'loading' || restaurantStatus === 'loading')
      return <p>Loading...</p>;
    if (status === 'failed' || restaurantStatus === 'failed')
      return <p>Error loading data.</p>;
    console.log("transformedChefRestaurants",transformedChefRestaurants);
    
  return (
    <div>
      <TopChefContainer>
        <Chef
          fullName={ChefInfo.fullName}
          imageUrl={ChefInfo.imageUrl}
          chefInfo={ChefInfo.chefInfo}
        />
        <CarouselContainer
          cards={transformedChefRestaurants}
          title="YOSSI’S RESTAURANTS:"
          className="topChef"
        /> 
      </TopChefContainer>
    </div>
  );
};

export default TopChef;