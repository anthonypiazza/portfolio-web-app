import React from 'react';

import '../components/css/AboutMe.css';

function AboutMe(props){
  return(
    <div>
      <section id={props.id} className="team-member-headline">
        <div>
          <h1>About Me</h1>
          <hr/>
          <p>United by our passion for maximizing weightlifting efficiency in the gym, our team consists of individuals based across the US combining our unique expertises into one amazing app!</p>
        </div>
      </section>
      <section className="profiles">
        <div className="team-member border-blank">
          <div className="team-image">
            <img src="../../imgs/Anthony-Piazza.jpg'" alt="Anthony Piazza" />
            <h2>Anthony Piazza</h2>          
            <hr/>
            <h3>UI Developer</h3>
            <p>Dallas, Texas</p>
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
        </div> 
      </section>    
    </div>              
  )
}

export default AboutMe;
