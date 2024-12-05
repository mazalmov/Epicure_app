import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import Stars from '../stars/stars';
import IconMeaning from '../IconMeaning/IconMeaning';
import Price from '../Price/Price';
import {
    CarouselWrapper,
    CardWrapper,
    Title,
    Description
} from './styles';

interface CardData {
    id: number;
    title: string;
    imageUrl: string;
    description?: string;
    icon?: 'spicy' | 'vegetarian' | 'vegan';
    chefname?: string;
    stars?: number;
    price?: number;
}

interface CarouselProps {
    cards: CardData[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth >= ScreenBreakPoints.lg;
            setIsDesktop(isLargeScreen);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <CarouselWrapper>
            <Swiper
                spaceBetween={10}
                slidesPerView={isDesktop ? 3 : 1.1}
                loop={!isDesktop ? true : false}
                allowTouchMove={!isDesktop}
                breakpoints={{
                    [ScreenBreakPoints.sm]: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    [ScreenBreakPoints.md]: {
                        slidesPerView: 2.5,
                        spaceBetween: 5,
                    },
                }}
            >
                {cards.slice(0, isDesktop ? 3 : cards.length).map((card) => (
                    <SwiperSlide key={card.id}>
                        <CardWrapper>
                            <img src={card.imageUrl} alt={card.title} />
                            <Title>{card.title}</Title>
                            {card.chefname && <p>{card.chefname}</p>}
                            {card.stars && <Stars rating={card.stars} />}
                            {card.description && card.icon && (
                                <Description>
                                    <IconMeaning iconName={card.icon} />
                                    <p>{card.description}</p>
                                </Description>
                            )}
                            {card.price && <Price price={card.price} />}
                        </CardWrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselWrapper>
    );
};

export default Carousel;
