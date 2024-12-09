import React from "react";
import LogoImg from '../../assets/About/AboutLogo.png';
import AppStoreImg from '../../assets/About/App_Store.png';
import GooglePlayImg from '../../assets/About/GooglePlay.png';

import {
    AboutContainer, Title, Paragraph, Logo, ButtonContainer,
    StoreButton, LeftSide, RightSide,AboutText
}
    from './styles'


export const About: React.FC = () => {
    return (
        
        <AboutContainer>
            <LeftSide>
                <AboutText>
                <Title>ABOUT US:</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
                    justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
                    blandit turpis suscipit at. Vestibulum sed massa in magna sodales
                    porta. Vivamus elit urna, dignissim a vestibulum.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
                    justo fermentum bibendum non eu ipsum. Cras porta malesuada eros.
                </Paragraph>
                </AboutText>
                <ButtonContainer>
                    <StoreButton src={AppStoreImg} alt="Download on the App Store" />
                    <StoreButton src={GooglePlayImg} alt="Get it on Google Play" />
                </ButtonContainer>
            </LeftSide>
            <RightSide>
                <Logo src={LogoImg} alt="Epicure logo" />
            </RightSide>
        </AboutContainer>

  

    );
};
export default About;

