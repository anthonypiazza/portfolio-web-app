import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import HLFpic from '../imgs/hlfplano.png';
import GCSFSpic from '../imgs/gcsfs.png';
import KKSSpic from '../imgs/kkss.png';
import TMTpic from '../imgs/teammentaltraining.png';
import Rollinpic from '../imgs/rollin-cover.png';
import GCSFSmain from '../imgs/gcsfs-main.png';
import Rollinmain from '../imgs/rollin.png';
import '../App.css';
import {
  ClientSection,
  PortfolioH1,
  SectionHeaderHR,
  TopRowPhotoGrid,
  SiteImageDiv,
  SiteImage,
  TransitionDiv,
  ViewSiteButton,
  ViewSiteButtonLink,
  SiteH3,
  BottomRowPhotoGrid,
  ResumeModal,
  ResumeIModalImg
} from './StyledComponents';


function Clients(props){

  const [open, setOpen] = useState(false);
  const [openRollin, setOpenRollin] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const handleOpenRollin = () => {
    setOpenRollin(true);
  };

  const handleCloseRollin = () => {
    setOpenRollin(false);
  };

  return (
    <ClientSection id={props.id}>
      <div>
        <PortfolioH1>Professional Projects</PortfolioH1>
        <SectionHeaderHR></SectionHeaderHR>
      </div>
      <TopRowPhotoGrid>
        <SiteImageDiv className="site-photo">
          <SiteImage className="client-site" src={HLFpic} alt="Hamilton Law Firm"/>
          <TransitionDiv className="middle">
            <ViewSiteButton><ViewSiteButtonLink href="http://hlfplano.com/">View Site</ViewSiteButtonLink></ViewSiteButton>
          </TransitionDiv>
          <SiteH3>Hamilton Law Firm PLLC</SiteH3>
        </SiteImageDiv>
        <SiteImageDiv className="site-photo">
          <SiteImage className="client-site" src={KKSSpic} alt="Killens Enterprise Consulting"/>
          <TransitionDiv className="middle">
            <ViewSiteButton><ViewSiteButtonLink href="https://www.killensec.com/">View Site</ViewSiteButtonLink></ViewSiteButton>
          </TransitionDiv>
          <SiteH3>Killens Enterprise Consulting LLC.</SiteH3>
        </SiteImageDiv>
        <SiteImageDiv className="site-photo">
          <SiteImage className="client-site" src={TMTpic} alt="Team Mental Training"/>
          <TransitionDiv className="middle">
            <ViewSiteButton><ViewSiteButtonLink href="https://www.teammentaltraining.com/">View Site</ViewSiteButtonLink></ViewSiteButton>
          </TransitionDiv>  
          <SiteH3>Team Mental Training Online Course</SiteH3>
        </SiteImageDiv>
      </TopRowPhotoGrid>
      <BottomRowPhotoGrid>
        <SiteImageDiv className="site-photo">
          <SiteImage className="client-site" src={GCSFSpic} alt="Global Cyber Security Summit"/>
          <TransitionDiv className="middle">
            <ViewSiteButton type="button" onClick={handleOpen}>View Site Design</ViewSiteButton>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogContent className="dialog-content">
                <ResumeModal onClick={handleClose}>
                  <ResumeIModalImg src={GCSFSmain} alt="2018 Global CyberSecurity Website Design" />
                </ResumeModal>
              </DialogContent>
            </Dialog>
          </TransitionDiv>
          <SiteH3>2018 Global Cybersecurity Summit</SiteH3>
        </SiteImageDiv>
        <SiteImageDiv className="site-photo">
          <SiteImage className="client-site" src={Rollinpic} alt="Rollin Premier"/>
          <TransitionDiv className="middle">
            <ViewSiteButton type="button" onClick={handleOpenRollin}>View Site Design</ViewSiteButton>
            <Dialog onClose={handleCloseRollin} aria-labelledby="customized-dialog-title" open={openRollin}>
              <DialogContent className="dialog-content">
                <ResumeModal onClick={handleCloseRollin}>
                  <ResumeIModalImg src={Rollinmain} alt="Rollin Premier Website Design" />
                </ResumeModal>
              </DialogContent>
            </Dialog>
          </TransitionDiv>
          <SiteH3>Rollin Premier Crypto Trading Group</SiteH3>
        </SiteImageDiv>
      </BottomRowPhotoGrid>
    </ClientSection>
  );
};

export default Clients;