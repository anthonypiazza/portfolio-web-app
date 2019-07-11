import React from 'react';
import {NavLink} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../components/css/hero.css';
import ProfileImg from '../../src/imgs/Anthony_Piazza.jpg';

const Hero = () => {
    return(
        <section className="hero-content">
            <AwesomeSlider className="slider-div">
                <div className="hero-width-div">
                    <div className="hero-text slide-in-left">
                        <div>
                            <h1>Full Stack Web Developer</h1>    
                        </div>
                        <div className="tagline">
                            <p>Currently enrolled in the Lambda School Full Stack Web Development Program.</p>
                        </div>
                    </div>
                    <div className="button-div">
                        <NavLink className="learn-more" link to="https://boring-euclid-601ad3.netlify.com/">Learn More</NavLink>
                    </div>
                </div>
              <div className="second-container">
                    <div className="hero-image">
                        <img src={ProfileImg} alt="Anthony Piazza"/>
                    </div>
              </div>
              <div><img src="/path/to/image-0.png"/></div>
            </AwesomeSlider>
        </section>   
    )
}

export default Hero;