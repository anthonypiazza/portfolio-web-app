import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import ProfileImg from '../imgs/anthony.PNG';
import '../App.css';
import {
  ContactPage,
  ProfileSection,
  ProfileH1,
  Profile,
  ProfileImgDiv,
  ProfileImgTag,
  ProfileHR,
  SocialLinkDiv,
  ProfileH3,
  ProfileInfoDiv,
  InfoP,
  ResumeModal,
  ModalButton,
  SectionHeaderHR,
  IconLink
} from './StyledComponents';

function AboutMe(props){

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <ContactPage id={props.id}>
      <ProfileSection>
        <div>
          <ProfileH1>About Me</ProfileH1>
          <SectionHeaderHR></SectionHeaderHR>
        </div>
      </ProfileSection>
      <Profile>
        <ProfileImgDiv>
          <ProfileImgTag src={ProfileImg} alt="Anthony Piazza" />
          <h2>Anthony Piazza</h2>          
          <ProfileHR/>
          <SocialLinkDiv>
            <a href="https://github.com/anthonypiazza">
              <i className="fab fa-github-square"/>
            </a>
            <a href="https://www.linkedin.com/in/piazzaanthony/">
              <i className="fab fa-linkedin"/>
            </a>             
            <IconLink to="section6" spy={true} smooth={true} offset={-70} duration= {500}>
              <i className="fas fa-envelope"/>
            </IconLink> 
          </SocialLinkDiv>
          <ProfileH3>Front End Web Developer</ProfileH3>
          <p>Dallas, Texas</p>
          <div>
            <ModalButton type="button" onClick={handleOpen}>View My Resume</ModalButton>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent className="dialog-content">
                <ResumeModal onClick={handleClose} >
                <iframe title="Anthony Resume" src="https://resume.creddle.io/embed/7bfx0nakbjd" width="850" height="1100" seamless></iframe>
                </ResumeModal>
              </DialogContent>
            </Dialog>
          </div>
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
