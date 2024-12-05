import React from 'react';
import spicyIcon from '../../assets/General/spicyIcon.png';
import vegetarianIcon from '../../assets/General/vegitarianIcon.png';
import veganIcon from '../../assets/General/veganIcon.png';
import {IconMeaningContainer} from './styles';

const iconMap = {
  spicy: spicyIcon,
  vegetarian: vegetarianIcon,
  vegan: veganIcon,
} as const;

interface IconMeaningProps {
  iconName: keyof typeof iconMap;
}

const IconMeaning: React.FC<IconMeaningProps> = ({ iconName }) => {
  const iconSrc = iconMap[iconName];

  return (
    <div>
      {iconSrc ? (
        <IconMeaningContainer src={iconSrc} alt={iconName} />
      ) : (
        <span>Icon not found</span> 
      )}
    </div>
  );
};

export default IconMeaning;
