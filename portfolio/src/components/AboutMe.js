import React from 'react';
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import FlowerImg from '../imgs/flower-grayscale.jpg';
import ResumeImg from '../imgs/resume.png';
import ProfileImg from '../imgs/Anthony_Piazza.jpg';
import '../components/css/AboutMe.css';



const ContactPage = styled.div`
  background-image: url(${FlowerImg});
  background-position-y: center;
  background-size: 20%;
  background-color: #eff0f0;
  padding-bottom: 50px;
  background-repeat: repeat-x;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
`

function AboutMe(props){

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <ContactPage id={props.id} className="about-me-page">
      <section className="team-member-headline">
        <div>
          <h1>About Me</h1>
          <hr></hr>
        </div>
      </section>
      <section className="profiles">
        <div className="team-image">
          <img src={ProfileImg} alt="Anthony Piazza" />
          <h2>Anthony Piazza</h2>          
          <hr/>
          <h3>Software Engineer</h3>
          <p>Dallas, Texas</p>
          <div>
            <button className="modal-button" type="button" onClick={handleOpen}>View My Resume</button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent className="dialog-content">
                <div onClick={handleClose} className="resume-modal">
                  <img className="resume-img" src={ResumeImg} alt="My Resume" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="team-member-info">
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum v v Lorem ipsum Lorem ipsum Lorem ipsum 
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
        </div> 
      </section>    
    </ContactPage>              
  )
}

export default AboutMe;
