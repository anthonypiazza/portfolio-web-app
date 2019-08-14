import React from 'react';
import Git from '../imgs/gitactivity.svg';
import '../App.css';
import {
    HeroSection,
    SlideTitleDiv,
    FirstSlideTitle,
    FirstSlideTagline,
    FirstSlideTaglineText,
    HeroImage,
    TitleDiv,
    VerticalAlign,
    SocialTagHero,
    RowDiv,
    SocialTagLink
} from './StyledComponents';

const Hero = props => {
    return(
        <HeroSection id={props.id}>
            <SlideTitleDiv> 
                <VerticalAlign>
                    <TitleDiv>
                        <FirstSlideTitle>Anthony Piazza</FirstSlideTitle>    
                    </TitleDiv>
                    <FirstSlideTagline>
                        <FirstSlideTaglineText><i style={{color: "white"}} className="fas fa-code"></i>Web Developer</FirstSlideTaglineText>
                        <FirstSlideTaglineText><i style={{color: "white"}} className="fab fa-bitcoin" />Crypto Enthusiast</FirstSlideTaglineText>
                        <FirstSlideTaglineText><i style={{color: "white"}} className="fas fa-headphones"/>Music Lover</FirstSlideTaglineText>
                        <RowDiv>
                            <SocialTagHero href="https://github.com/anthonypiazza">
                                <i style={{ color: "white" }} className="fab fa-github-square"/>
                            </SocialTagHero>
                            <SocialTagHero href="https://www.linkedin.com/in/piazzaanthony/">
                                <i style={{ color: "white" }} className="fab fa-linkedin"/>
                            </SocialTagHero>             
                            <SocialTagLink to="section6" spy={true} smooth={true} offset={-70} duration= {500}>
                                <i style={{ color: "white" }} className="fas fa-envelope"/>
                            </SocialTagLink>
                        </RowDiv>
                    </FirstSlideTagline>            
                </VerticalAlign>
                <div>
                    <HeroImage src={Git} alt="GitHub Activity Chart"/>
                </div>
            </SlideTitleDiv>

        </HeroSection>   
    )
}

export default Hero;