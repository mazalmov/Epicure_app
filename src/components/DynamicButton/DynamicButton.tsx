import React from 'react';
import { ButtonContainer } from './styles';

type DynamicButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: "signatureDish" | "topChef" | "popularRestorant";
};

const DynamicButton: React.FC<DynamicButtonProps> = ({ onClick, children, className }) => {
    return (
        <ButtonContainer className={className} onClick={onClick}>
            {children}
        </ButtonContainer>
    );
};

export default DynamicButton;






