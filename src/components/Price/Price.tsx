import React from "react";
import { PriceContainer, PriceText } from "./styles";

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <PriceContainer>
      <PriceText>   
        ₪{price}
      </PriceText>
    </PriceContainer>
  );
};

export default Price;
