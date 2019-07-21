import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import ResumeImg from '../imgs/resume.png';
import ProfileImg from '../imgs/Anthony_Piazza.jpg';
import '../App.css';
import {
  ContactPage,
  ProfileSection,
  ProfileH1,
  Profile,
  ProfileImgDiv,
  ProfileImgTag,
  ProfileHR,
  ProfileH3,
  ProfileInfoDiv,
  InfoP,
  ResumeModal,
  ResumeIModalImg,
  ModalButton,
  SectionHeaderHR

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
          <ProfileH3>Software Engineer</ProfileH3>
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
                  <ResumeIModalImg src={ResumeImg} alt="My Resume" />
                </ResumeModal>
              </DialogContent>
            </Dialog>
          </div>
        </ProfileImgDiv>
        <ProfileInfoDiv>
          <InfoP>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </InfoP>
          <InfoP>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </InfoP>
          <InfoP>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </InfoP>
        </ProfileInfoDiv> 
      </Profile>    
    </ContactPage>              
  )
}

export default AboutMe;
