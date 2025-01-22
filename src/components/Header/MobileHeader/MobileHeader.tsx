import React from 'react';
import DynamicButton from '../../DynamicButton/DynamicButton';
import hambur from '../../../assets/Mobile/HAMBUR.png';
import logo from '../../../assets/General/about-logo.png';
import bag from '../../../assets/General/bag.png';
import searchIcon from '../../../assets/General/search_icon.png';
import userIcon from '../../../assets/General/user.png';

import {
    MobileHeaderContainer,
    HamburContainer,
    LogoContainer,
    RotatingElement,
    Image,
    TreeButtonContainer,
} from './styles'


const MobileHeader: React.FC = () => {

    return (
        <MobileHeaderContainer>
            <HamburContainer>
                <DynamicButton>
                    <Image
                        src={hambur}
                        alt={"hambur"}
                        className="hambur"
                        $maxWidth={"24"}
                        $maxHeight={"24"}
                    />
                </DynamicButton>
            </HamburContainer>
            <LogoContainer>
                <RotatingElement>
                    <DynamicButton>
                        <Image
                            src={logo}
                            alt={"logo"}
                            className="logo"
                            $maxWidth={"33"}
                            $maxHeight={"32"}
                        />
                    </DynamicButton>
                </RotatingElement>
            </LogoContainer>
            <TreeButtonContainer>
                <DynamicButton>
                    <Image
                        src={searchIcon}
                        alt={"searchIcon"}
                        className="searchIcon"
                    />
                </DynamicButton>
                <DynamicButton>
                    <Image
                        src={userIcon}
                        alt={"userIcon"}
                        className="userIcon"
                    />
                </DynamicButton>
                <DynamicButton>
                    <Image
                        src={bag}
                        alt={"bag"}
                        className="bag"
                    />
                </DynamicButton>
            </TreeButtonContainer>
        </MobileHeaderContainer>
    )
};
export default MobileHeader;