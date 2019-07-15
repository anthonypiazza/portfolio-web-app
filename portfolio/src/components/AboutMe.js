import React from 'react';
import styled from "styled-components";
import WoodImg from '../imgs/flower-grayscale.jpg';

import ProfileImg from '../imgs/Anthony_Piazza.jpg';

import '../components/css/AboutMe.css';

const ContactPage = styled.div`
  background-image: url(${WoodImg});
  background-position-y: center;
  background-size: 20%;
  background-color: #eff0f0;
  padding-bottom: 50px;
  background-repeat: repeat-x;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
`

function AboutMe(props){
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
