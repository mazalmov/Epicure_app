import React, { useEffect } from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { TopChefContainer } from "./styles";
import Chef from "../Chef/Chef";
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChef } from "../../store/slices/chefSlice";
import { CardData } from "../../constants/CardData";
import { RootState } from '../../store/store';
import { selectRestaurants, selectRestaurantsStatus } from "../PopularRestorants/PopularRestaurants";

import chefPhoto from '../../assets/TopChef/chefPhoto.png';

interface ChefProp {
  fullName: string;
  imageUrl: string;
  chefInfo: string;
}

export const selectChef = (state: RootState) => state.chef.items;
export const selectChefStatus = (state: RootState) => state.chef.status;

const TopChef: React.FC = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const chefs = useSelector(selectChef);
  const status = useSelector(selectChefStatus);

  const restaurants = useSelector(selectRestaurants);
  const restaurantStatus = useSelector(selectRestaurantsStatus);
  
  useEffect(() => {
    dispatch(fetchChef());
  }, [dispatch]);

  const chef_names=['Mazal Mahari','Yossi shitrit','Assaf Granit','Haim choen'];
  const topChefName ='Mazal Mahari';
  const topChef = chefs.find((chef) => chef.name === topChefName);

  let ChefInfo: ChefProp = {
    fullName: 'Chef undefined',
    imageUrl: chefPhoto,
    chefInfo:
      'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades...',
  };

  if (topChef) {
    ChefInfo = {
      fullName: topChef.name ,
      imageUrl: topChef.image,
      chefInfo: (topChef as any).info,
    };
  }
  const yossiRestaurants = restaurants.filter((restaurant) => (restaurant as any).chefId.name === ChefInfo.fullName);
  const transformedChefRestaurants: CardData[] = yossiRestaurants.map(
    (restaurant) => ({
      id: restaurant._id,
      title: restaurant.name,
      imageUrl:restaurant?.image ,
      chefName: topChef?.name || 'Chef undefined',
      stars: Number(restaurant.rank),
    })
  );


  if (status === 'loading' || restaurantStatus === 'loading')
    return <p>Loading...</p>;
  if (status === 'failed' || restaurantStatus === 'failed')
    return <p>Error loading data.</p>;

  const title= ChefInfo.fullName.split(' ')[0].toUpperCase();
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
          title={`${title}’S RESTAURANTS:`}
          className="topChef"
        />
      </TopChefContainer>
    </div>
  );
};

export default TopChef;

