import React from 'react';
import {
    HeroContainer,
    SearchContainer,
    Title,
    SearchBox,
    HeroSearchText
} from './styles';
import DynamicButton from '../DynamicButton/DynamicButton';
import { Image } from '../Header/styles';
import searchIcon from '../../assets/General/search_icon.png';

const Hero: React.FC = () => {
    return (

        <HeroContainer>
            <SearchContainer>
            <Title>
                Epicure works with the top <br />
                chef restaurants in Tel Aviv
            </Title>

                <SearchBox>
                    <DynamicButton>
                        <Image
                            src={searchIcon}
                            alt={"searchIcon"}
                            className="searchIcon"
                        />
                    </DynamicButton>
                    <HeroSearchText placeholder="Search for restaurant cuisine, chef"
                    />
                </SearchBox>
            </SearchContainer>
        </HeroContainer>
    );

}
export default Hero;