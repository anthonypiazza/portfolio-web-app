import React from 'react';

import './css/Clients.css';

import HLFpic from '../imgs/hlfplano.png';
import GCSFSpic from '../imgs/gcsfs.png';
import KKSSpic from '../imgs/kkss.png';
import TMTpic from '../imgs/teammentaltraining.png';
 
function Clients(props){
  return (
    <div id={props.id} className="client-section">
      <div>
        <h1>Freelance Clients</h1>
        <hr></hr>
      </div>
      <div className="photo-grid">
        <div className="site-photo">
          <img className="client-site" src={HLFpic} alt="Hamilton Law Firm"/>
          <div class="middle">
            <button class="text">View Site</button>
          </div>
          <h3>Hamilton Law Firm PLLC</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={GCSFSpic} alt="Global Cyber Security Summit"/>
          <div class="middle">
            <button class="text">View Site</button>
          </div>
          <h3>2018 Global Cybersecurity Financial Summit</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={KKSSpic} alt="Killens Enterprise Consulting"/>
          <div class="middle">
            <button class="text">View Site</button>
          </div>
          <h3>Killens Enterprise Consulting LLC.</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={TMTpic} alt="Team Mental Training"/>
          <div class="middle">
            <button class="text">View Site</button>
          </div>  
          <h3>Team Mental Training Online Course (Homepage Only)</h3>
        </div>
      </div>
    </div>
  );
};

export default Clients;