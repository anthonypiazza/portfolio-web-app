import React from 'react';

import ProfileImg from '../imgs/Anthony_Piazza.jpg';
import '../App.css';
import {
  ContactPage,
  ProfileSection,
  ProfileH1,
  Profile,
  ProfileImgDiv,
  ProfileImgTag,
  SocialLinkDiv,
  ProfileH3,
  ProfileInfoDiv,
  InfoP,
  IconLink,
  ProfileName,
  CityState,
  ProfileNameHR,
  SocialTag
} from './StyledComponents';

function AboutMe(props){
  return(
    <ContactPage id={props.id}>
      <ProfileSection>
        <div>
          <ProfileH1>About Me</ProfileH1>
        </div>
      </ProfileSection>
      <Profile>
        <ProfileImgDiv>
          <ProfileImgTag src={ProfileImg} alt="Anthony Piazza" />
          <ProfileName>Anthony Piazza</ProfileName>          
          <ProfileNameHR/>
          <SocialLinkDiv>
            <SocialTag style={{textDecoration: "none"}} href="https://github.com/anthonypiazza">
              <i style={{ color: "white" }} className="fab fa-github-square"/>
            </SocialTag>
            <SocialTag style={{textDecoration: "none"}} href="https://www.linkedin.com/in/piazzaanthony/">
              <i style={{ color: "white" }} className="fab fa-linkedin"/>
            </SocialTag>             
            <IconLink to="section6" spy={true} smooth={true} offset={-70} duration= {500}>
              <i style={{ fontSize: '3rem', color: "white" }} className="fas fa-envelope"/>
            </IconLink> 
          </SocialLinkDiv>
          <ProfileH3>Front End Web Developer</ProfileH3>
          <CityState>Dallas, Texas</CityState>
        </ProfileImgDiv>
        <ProfileInfoDiv>
          <InfoP>I am a Front End Web Developer (React-focused) with a knack for 
          solving problems and creating innovative web solutions.</InfoP>
          <InfoP>I am grateful for the chance to have studied Full Stack Web 
          Development with some of the best web development instructors in the 
          world at Lambda School.</InfoP>
          <InfoP>Before transitioning into software development, I enjoyed working 
          in and around the tech field, first as a cryptocurrency financial analyst, 
          and later as a technical assistant at a cyber security firm. Along the way 
          I designed and implemented multiple websites for local businesses which 
          eventually led me to seek further education to grow and expand my skillset 
          in this area.</InfoP>
        </ProfileInfoDiv> 
      </Profile>     
    </ContactPage>              
  )
}

export default AboutMe;
