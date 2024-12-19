import React from "react";
import { iconMap } from "../../constants/IconMap";
import {
    MeaningIconsContainer, Title, Text, IconContainer,TreeIcons,TitleConteiner
}
    from './styles'


interface IconInfo {
    iconName: keyof typeof iconMap;
    label: string;
}
const iconsData: IconInfo[] = [
    { iconName: 'spicy', label: 'Spicy' },
    { iconName: 'vegetarian', label: 'Vegetarian' },
    { iconName: 'vegan', label: 'Vegan' }
];

export const TheMeaningOfOurIcons: React.FC = () => {
    return (
        <MeaningIconsContainer>
          <TitleConteiner>

            <Title>THE MEANING OF OUR ICONS:</Title>
            </TitleConteiner>
            <TreeIcons>


            {iconsData.map((icon, index) => (
                <IconContainer key={index}>
                        <img src={iconMap[icon.iconName]} alt={icon.iconName} />
                        <Text>{icon.label}</Text>
                    
                </IconContainer>
            ))}
            </TreeIcons>
        </MeaningIconsContainer>
    );
};
export default TheMeaningOfOurIcons;