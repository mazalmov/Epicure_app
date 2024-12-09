import React from 'react';
import { iconMap } from '../../constants/IconMap';
import { IconMeaningContainer } from './styles';

interface IconMeaningProps {
  iconName: keyof typeof iconMap;
  width?: number;  
  height?: number;
}

const IconMeaning: React.FC<IconMeaningProps> = ({ iconName, width, height }) => {
  const iconSrc = iconMap[iconName];

  return (
    <>
      {iconSrc ? (
        <IconMeaningContainer
          src={iconSrc}
          alt={iconName}
          width={width}  
          height={height}  
        />
      ) : (
        <span>Icon not found</span>
      )}
    </>
  );
};

export default IconMeaning;
