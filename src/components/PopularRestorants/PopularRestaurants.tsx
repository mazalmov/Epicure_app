import React, { useEffect } from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from "../../store/slices/restaurantSlice";
import { CardData } from "../../constants/CardData";
import { RootState } from '../../store/store';

export const selectRestaurants = (state: RootState) => state.restaurants.items;
export const selectRestaurantsStatus = (state: RootState) => state.restaurants.status;

const PopularRestorants: React.FC = () => {

    const restaurants = useSelector(selectRestaurants);
    const status = useSelector(selectRestaurantsStatus);

    const dispatch = useDispatch<AppDispatch>();
    console.log(restaurants);

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);
    
    const transformedRestaurants: CardData[] = restaurants.map((restaurant) => ({
        id: restaurant._id,
        title: restaurant.name,
        imageUrl: restaurant.image,
        chefName: (restaurant.chefId as any).name,
        stars: Number(restaurant.rank),
    }));

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading dishes.</p>;

    return (
        <CarouselContainer cards={transformedRestaurants} title="POPULAR RESTAURANT IN EPICURE:" className="popularRestorant" />
    );
};

export default PopularRestorants;

