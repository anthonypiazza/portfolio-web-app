import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../App.css';
import {
    HeroSection,
    SecondSlideText,
    SlideTitleDiv,
    FirstSlideTitle,
    FirstSlideTagline,
    SlideButtonDiv,
    SlideButton,
    SecondSlideTitle,
    SecondSlideTagline,
    SecondSlideSubTagline,
    SlideTwoButtonDiv
} from './StyledComponents';

const Hero = props => {
    return(
        <HeroSection id={props.id}>
            <AwesomeSlider className="slider-div">
                <div className="hero-width-div">
                    <SlideTitleDiv> 
                        <div>
                            <FirstSlideTitle>Full Stack Web Developer</FirstSlideTitle>    
                        </div>
                        <FirstSlideTagline>
                            <p>Enrolled in the Lambda School Full Stack Web Development Program.</p>
                        </FirstSlideTagline>
                        <SlideButtonDiv>
                            <SlideButton spy={true} smooth={true} offset={-70} duration= {500} to="section2">Learn More</SlideButton>
                        </SlideButtonDiv>
                    </SlideTitleDiv>
                </div>
                <div className="third-container">
                    <SlideTitleDiv>
                        <div>
                            <SecondSlideTitle>San Diego State University Class of 2016</SecondSlideTitle>    
                        </div>
                        <SecondSlideTagline>
                            <SecondSlideSubTagline>Bachelor of Science in Business Administration</SecondSlideSubTagline>
                            <SecondSlideText>Dean's List - Spring of 2014 and Spring of 2015</SecondSlideText>
                            <SecondSlideText>Studied at Oxford University during Summer 2015 session (Pacific University Exchange Program)</SecondSlideText>
                            <SecondSlideText>Sigma Chi Fraternity & Associated Student Leadership</SecondSlideText>
                        </SecondSlideTagline>
                        <SlideTwoButtonDiv>
                            <SlideButton spy={true} smooth={true} offset={-70} duration= {500} to="section4">View Education Details</SlideButton>
                        </SlideTwoButtonDiv>
                    </SlideTitleDiv>
                </div>    
                {/* <div className="second-container">
                    <div className="hero-text">
                        <div>
                            <h1 className="second-header">Github Contributions</h1>    
                        </div>
                        <div className="second-tagline">
                            <p className="degree"></p>
                            <p className="education-details"></p>
                            <p className="education-details"></p>
                            <p className="education-details"></p>
                        </div>
                        <div className="button-div-2">
                            <Link spy={true} smooth={true} offset={-70} duration= {500} className="learn-more" to="section4">View Education Details</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={ProfileImg} alt="Anthony Piazza"/>
                    </div>              
                    <div className="hero-image">
                        <img src={ProfileImg} alt="Anthony Piazza"/>
                    </div>
                </div> */}
            </AwesomeSlider>
        </HeroSection>   
    )
}

export default Hero;