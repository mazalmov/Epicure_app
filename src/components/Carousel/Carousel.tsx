import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { ScreenBreakPoints } from '../../constants/BreakPoints';
import Stars from '../stars/stars';
import IconMeaning from '../IconMeaning/IconMeaning';
import Price from '../Price/Price';
import { CardData } from '../../constants/CardData';
import {
    CarouselWrapper,
    CardWrapper,
    Title,
    Description,
    Image,
    ChefName
} from './styles';

interface CarouselProps {
    cards: CardData[];
}

const Carousel: React.FC<CarouselProps & {className?:string}> = ({ cards ,className}) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth >= ScreenBreakPoints.lg;
            setIsDesktop(isLargeScreen);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <CarouselWrapper> 
            <Swiper
                spaceBetween={10}
                slidesPerView={isDesktop ? 3 : 1.5}
                loop={!isDesktop}
                allowTouchMove={!isDesktop}
                autoHeight={true}
                breakpoints={{
                    [ScreenBreakPoints.msm]: {
                        slidesPerView: 1.5,
                        spaceBetween: 18,
                    },
                    [ScreenBreakPoints.sm]: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    [ScreenBreakPoints.mmd]: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    [ScreenBreakPoints.lg]:
                    {
                        slidesPerView: 3,
                        spaceBetween: className ? 16 : 24,
                    },
                }}
            >
                {cards.slice(0, isDesktop ? 3 : cards.length).map((card) => (
                    <SwiperSlide key={card.id}>
                        <CardWrapper className={className}>
                            <Image>
                                <img src={card.imageUrl} alt={card.title} />
                            </Image>
                            <Title $chefName={card.chefname} $description={card.description} className={className}> {card.title}  </Title>
                            {card.chefname && <ChefName>{card.chefname}</ChefName>}
                            {card.stars && <Stars rating={card.stars} />}
                            {card.description && card.icon && (
                                <Description>
                                    {card.description}
                                    <IconMeaning iconName={card.icon} />
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
