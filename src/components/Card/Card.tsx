import React, { ReactNode } from 'react';
import { CardContainer } from './styles';

interface CardProps {
    children: ReactNode;
  }
  
  export const Card: React.FC<CardProps> = ({ children }) => {
    return(
        
        <CardContainer>
            {children}
        </CardContainer>
    );

};
export default Card;