import React, { useEffect} from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, selectRestaurants, selectRestaurantsStatus } from '../../store/slices/restaurantSlice';  // מקשר את ה-selectors
import { CardData } from "../../constants/CardData";
import { getRandomFromArray } from "../../constants/Functions";


import image1 from '../../assets/PapularRestaurant/claro.png';
import image2 from '../../assets/PapularRestaurant/Lumina.png';
import image3 from '../../assets/PapularRestaurant/tiger-lily.png';

const PopularRestorants: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>(); 
    const restaurants = useSelector(selectRestaurants); 
    const status = useSelector(selectRestaurantsStatus); 
    console.log(restaurants);
    

    useEffect(() => {
        dispatch(fetchRestaurants()); 
      }, [dispatch]); 
    

    const images = [image1, image2, image3];
    
    const transformedRestaurants: CardData[] = restaurants.map((restaurant) => ({
        id: restaurant._id, 
        title: restaurant.name,
        // imageUrl: restaurant.image,
        imageUrl: getRandomFromArray(images),
        chefName: restaurant.name,
        stars: Number(restaurant.rank),
    }));

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading dishes.</p>;

    return (
        
        <CarouselContainer cards={transformedRestaurants} title="POPULAR RESTAURANT IN EPICURE:" className="popularRestorant" />

        
    );
};

export default PopularRestorants;

