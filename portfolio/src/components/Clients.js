import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './css/Clients.css';

import HLFpic from '../imgs/hlfplano.png';
import GCSFSpic from '../imgs/gcsfs.png';
import KKSSpic from '../imgs/kkss.png';
import TMTpic from '../imgs/teammentaltraining.png';
import Rollinpic from '../imgs/rollin-cover.png';
import GCSFSmain from '../imgs/gcsfs-main.png';
import Rollinmain from '../imgs/rollin.png';


function Clients(props){

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openRollin, setOpenRollin] = React.useState(false);

  const handleOpenRollin = () => {
    setOpenRollin(true);
  };

  const handleCloseRollin = () => {
    setOpenRollin(false);
  };

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
          <h3>Team Mental Training Online Course</h3>
        </div>
      </div>
      <div className="photo-grid-2">
        <div className="site-photo">
          <img className="client-site" src={GCSFSpic} alt="Global Cyber Security Summit"/>
          <div class="middle">
            <button class="text" type="button" onClick={handleOpen}>View Site Design</button>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent className="dialog-content">
                <div onClick={handleClose} className="resume-modal">
                  <img className="resume-img" src={GCSFSmain} alt="2018 Global CyberSecurity Website Design" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <h3>2018 Global Cybersecurity Summit</h3>
        </div>
        <div className="site-photo">
          <img className="client-site" src={Rollinpic} alt="Rollin Premier"/>
          <div class="middle">
          <button class="text" type="button" onClick={handleOpenRollin}>View Site Design</button>
            <Dialog
              onClose={handleCloseRollin}
              aria-labelledby="customized-dialog-title"
              open={openRollin}
            >
              <DialogContent className="dialog-content">
                <div onClick={handleCloseRollin} className="resume-modal">
                  <img className="resume-img" src={Rollinmain} alt="Rollin Premier Website Design" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <h3>Rollin Premier Crypto Trading Group</h3>
        </div>
      </div>
    </div>
  );
};

export default Clients;