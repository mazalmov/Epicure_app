import React from 'react';
import {
    HeroContainer,
    SearchContainer,
    Title,
    SearchBox,
    HeroSearchText
} from './styles';
import { Fade } from 'react-awesome-reveal';
const Hero: React.FC = () => {
    return (

        <HeroContainer>
            <SearchContainer>
                <Fade direction="down" duration={1000}>
                    <Title>
                        Epicure works with the top <br />
                        chef restaurants in Tel Aviv
                    </Title>
                </Fade>

                <SearchBox>


                    <HeroSearchText placeholder="Search for restaurant cuisine, chef" />

                </SearchBox>
            </SearchContainer>
        </HeroContainer>
    );

}
export default Hero;

