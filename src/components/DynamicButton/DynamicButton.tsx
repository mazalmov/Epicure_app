// import { Interface } from "readline";
import React from 'react';
import { ButtonContainer } from './styles';
type DynamicButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};

const DynamicButton: React.FC<DynamicButtonProps> = ({ onClick, children }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {children}
        </ButtonContainer>

    );
}
export default DynamicButton;
