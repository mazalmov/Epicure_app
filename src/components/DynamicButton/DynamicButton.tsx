import React from 'react';
import { ButtonContainer } from './styles';

type DynamicButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};

const DynamicButton: React.FC<DynamicButtonProps & {className?:string} > = ({ onClick, children, className }) => {
    return (
        <ButtonContainer className={className} onClick={onClick}>
            {children}
        </ButtonContainer>
    );
};

export default DynamicButton;






