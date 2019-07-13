import React from 'react';
import {NavLink} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../components/css/hero.css';
import { Link, animateScroll as scroll } from "react-scroll";
import ProfileImg from '../../src/imgs/Anthony_Piazza.jpg';

const Hero = props => {
    return(
        <section className="hero-content" id={props.id}>
            <AwesomeSlider className="slider-div">
                <div className="hero-width-div">
                    <div className="hero-text">
                        <div className="job-occupation">
                            <h1>Full Stack Web Developer</h1>    
                        </div>
                        <div className="tagline">
                            <p>Enrolled in the Lambda School Full Stack Web Development Program.</p>
                        </div>
                    </div>
                    <div className="button-div">
                        <Link spy={true} smooth={true} offset={-70} duration= {500} className="learn-more" to="section2">Learn More</Link>
                    </div>
                </div>
                <div className="second-container">
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
                    {/* <div className="hero-image">
                        <img src={ProfileImg} alt="Anthony Piazza"/>
                    </div> */}
                </div>
                <div className="third-container">
                    <div className="hero-text">
                        <div>
                            <h1 className="third-header">San Diego State University Class of 2016</h1>    
                        </div>
                        <div className="third-tagline">
                            <p className="degree">Bachelor of Science in Business Administration</p>
                            <p className="education-details">Dean's List - Spring of 2014 and Spring of 2015</p>
                            <p className="education-details">Studied at Oxford University during Summer 2015 session (Pacific University Exchange Program)</p>
                            <p className="education-details">Sigma Chi Fraternity & Associated Student Leadership</p>
                        </div>
                        <div className="button-div-3">
                            <Link spy={true} smooth={true} offset={-70} duration= {500} className="learn-more" to="section4">View Education Details</Link>
                        </div>
                    </div>
                    {/* <div className="hero-image">
                        <img src={ProfileImg} alt="Anthony Piazza"/>
                    </div> */}
                </div>
            </AwesomeSlider>
        </section>   
    )
}

export default Hero;