import React from 'react';

import ProfileImg from '../imgs/Anthony_Piazza.jpg';

import '../components/css/AboutMe.css';

function AboutMe(props){
  return(
    <div id={props.id} className="about-me-page">
      <section className="team-member-headline">
        <div>
          <h1>About Me</h1>
          <hr className="profile-hr"/>
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
    </div>              
  )
}

export default AboutMe;
