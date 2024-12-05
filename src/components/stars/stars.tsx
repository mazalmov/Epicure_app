import React from "react";
import fullStar from '../../assets/Desktop/FullStar.png';
import emptyStar from '../../assets/Desktop/EmptyStar.png';
import { StarsContainer } from "./styles";

interface StarsProps {
    cardId: number;
    rating: number;
}

const Stars: React.FC<StarsProps> = ({ cardId, rating }) => {
    const emptyStarsCount = 5 - rating;

    return (
        <StarsContainer>
            {Array.from({ length: rating }).map((_, index) => (
                <img
                    key={`fullstar-${cardId}-${index}`}
                    src={fullStar}
                    alt="Full Star"
                />
            ))}

            {Array.from({ length: emptyStarsCount }).map((_, index) => (
                <img
                    key={`emptystar-${cardId}-${index}`}
                    src={emptyStar}
                    alt="Empty Star"
                />
            ))}
        </StarsContainer>
    );
};

export default Stars;
