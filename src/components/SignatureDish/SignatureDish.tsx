import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../store/slices/dishSlice';
import { AppDispatch } from '../../store/store';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import { CardData } from '../../constants/CardData';
import { iconMap } from '../../constants/IconMap';
import { RootState } from '../../store/store';

export const selectDishes = (state: RootState) => state.dishes.items;
export const selectDishesStatus = (state: RootState) => state.dishes.status;

const SignatureDish: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>(); 
  const dishes = useSelector(selectDishes); 
  const status = useSelector(selectDishesStatus); 

  useEffect(() => {
    dispatch(fetchDishes()); 
  }, [dispatch]); 
  
  const allowedIcons = ["spicy", "vegetarian", "vegan"] as const;
  const transformedDishes: CardData[] = dishes.map((dish) => ({
      id:  dish._id,
      title: dish.name, 
      imageUrl: dish.image, 
      icon : allowedIcons.includes(dish.iconMeaning as any)
      ? (dish.iconMeaning as keyof typeof iconMap)
      : undefined,
      description: dish.ingredients.join(", "),
      price: dish.price,
  }));

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading dishes.</p>;

     return (
            <CarouselContainer cards={transformedDishes} title="SIGNATURE DISH OF:" className="signatureDish" />
    );
};

export default SignatureDish;
