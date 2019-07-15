import React from 'react';

import './css/Clients.css';

import HLFpic from '../imgs/hlfplano.png';
import GCSFSpic from '../imgs/gcsfs.png';
import KKSSpic from '../imgs/kkss.png';
import TMTpic from '../imgs/teammentaltraining.png';
import Rollinpic from '../imgs/rollin-cover.png';

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
            <button class="text"><a href="http://hlfplano.com/">View Site</a></button>
          </div>
          <h3>Hamilton Law Firm PLLC</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={KKSSpic} alt="Killens Enterprise Consulting"/>
          <div class="middle">
            <button class="text"><a href="https://www.killensec.com/">View Site</a></button>
          </div>
          <h3>Killens Enterprise Consulting LLC.</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={TMTpic} alt="Team Mental Training"/>
          <div class="middle">
            <button class="text"><a href="https://www.teammentaltraining.com/">View Site</a></button>
          </div>  
          <h3>Team Mental Training Online Course (Homepage Only)</h3>
        </div>
      </div>
      <div className="photo-grid-2">
        <div className="site-photo">
          <img className="client-site" src={GCSFSpic} alt="Global Cyber Security Summit"/>
          <div class="middle">
            <button class="text"><a href="">View Site Design</a></button>
          </div>
          <h3>2018 Global Cybersecurity Financial Summit (Domain Discontinued)</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={Rollinpic} alt="Rollin Premier"/>
          <div class="middle">
            <button class="text"><a href="">View Site Design</a></button>
          </div>
          <h3>Rollin Premier Crypto Trading Group (Domain Discontinued)</h3>
        </div>
      </div>
    </div>
  );
};

export default Clients;