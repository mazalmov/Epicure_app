import React from 'react';
import DynamicButton from '../../components/DynamicButton/DynamicButton';
import {
    HeaderContainer,
    HamburContainer,
    LogoContainer,
    LogoTitleDesktop,
    Image,
    TreeButtonContainer,
    SearchIconContainer,
    SearchText,
    RestorantAndChefsContainer,
    RotatingElement
} from './styles'
import hambur from '../../assets/Mobile/HAMBUR.png';
import logo from '../../assets/General/about-logo.png';
import epicure from '../../assets/Desktop/epicure.png';
import bag from '../../assets/General/bag.png';
import searchIcon from '../../assets/General/search_icon.png';
import userIcon from '../../assets/General/user.png';
import restaurants from '../../assets/Desktop/restaurants.png';
import chefs from '../../assets/Desktop/chefs.png';
const Header: React.FC = () => {

    return (
        <HeaderContainer>
            <HamburContainer>
                <DynamicButton>
                    <Image
                        src={hambur}
                        alt={"hambur"}
                        className="hambur"
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
                        />
                    </DynamicButton>
                </RotatingElement>
                <LogoTitleDesktop>
                    <DynamicButton>
                        <Image
                            src={epicure}
                            alt={"epicure"}
                            className="epicure"
                        />
                    </DynamicButton>
                </LogoTitleDesktop>
            </LogoContainer>
            <RestorantAndChefsContainer>
                <DynamicButton>
                    <Image
                        src={restaurants}
                        alt={"restaurants"}
                        className="restaurants"
                    />
                </DynamicButton>
                <DynamicButton>
                    <Image
                        src={chefs}
                        alt={"chefs"}
                        className="chefs"
                    />
                </DynamicButton>
            </RestorantAndChefsContainer>
            <TreeButtonContainer>
                <SearchIconContainer>
                    <SearchText />
                    <DynamicButton>
                        <Image
                            src={searchIcon}
                            alt={"searchIcon"}
                            className="searchIcon"
                        />
                    </DynamicButton>
                </SearchIconContainer>
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
        </HeaderContainer>
    )
};
export default Header;

