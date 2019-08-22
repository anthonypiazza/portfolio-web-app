import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

// import Streemly from '../imgs/streemly.jpg';
import SatoshiPic from '../imgs/satoshis-law.png';
import Airlytics from '../imgs/airlyticsicon.png';
// import SatoshiGif from '../imgs/satoshi-law-demo.gif';
// import AirlyticsGif from '../imgs/airlytics-demo.gif';
import HLFpic from '../imgs/hlfplano.png';
import GCSFSpic from '../imgs/gcsfs.png';
import KKSSpic from '../imgs/kkss.png';
import TMTpic from '../imgs/teammentaltraining.png';
import Rollinpic from '../imgs/rollin-cover.png';
import GCSFSmain from '../imgs/gcsfs-main.png';
import Rollinmain from '../imgs/rollin.png';
import '../App.css';


import {
    PortfolioContainer,
    PortfolioH1,
    // SectionHeaderHR,
    // ProjectSection,
    ProjectText,
    ProjectTextH2,
    ProjectTextP,
    ProjectLinkDiv,
    PortfolioButton,
    CodeLink,
    LinkIcon,
    // ProjectImage,
    // ProjectImagePic,
    // ProjectTwoSection,
    ProjectTwoImage,
    ProjectTwoImagePic,
    ProjectThreeImage,
    ProjectThreeImagePic,
    ProjectBox,
    HorizontalFlexBoxes,
    PortfolioBoxFilterButton,
    ResumeModal,
    ResumeIModalImg,
    HorizontalFlexFilter,
    ViewSiteButtonNew
} from './StyledComponents';

const Portfolio = (props) => {

    const [open, setOpen] = useState(false);
    const [openRollin, setOpenRollin] = useState(false);
    const [all, setAll] = useState(true)
    const [coded, setCoded] = useState(false)
    const [designed, setDesigned] = useState(false)

    const handleAllButton = () => {
        setAll(true)
        setCoded(false)
        setDesigned(false)
    }

    const handleCodedButton = () => {
        setCoded(true)
        setAll(false)
        setDesigned(false)
    }

    const handleDesignedButton = () => {
        setDesigned(true)
        setAll(false)
        setCoded(false)
    }

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
        <PortfolioContainer id={props.id}>
            <PortfolioH1 style={{ color: "#0b0b2d", marginBottom: "10px"}}>Projects</PortfolioH1>
            <HorizontalFlexFilter>
                <PortfolioBoxFilterButton onClick={handleAllButton} id={all ? 'active' : 'deactivate'}>All</PortfolioBoxFilterButton>
                <PortfolioBoxFilterButton onClick={handleDesignedButton} id={designed ? 'active' : 'deactivate'} style={{margin: '0px 5%'}}>Designed</PortfolioBoxFilterButton>
                <PortfolioBoxFilterButton onClick={handleCodedButton} id={coded ? 'active' : 'deactivate'}>Coded</PortfolioBoxFilterButton>
            </HorizontalFlexFilter>
            <HorizontalFlexBoxes>
                
                <ProjectBox id={all || coded || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectThreeImagePic src={Airlytics} alt="Airlytics Logo" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Airlytics</ProjectTextH2>
                        <ProjectTextP>An AirBnB analytics tool to optimize hosts' rates of return in Berlin</ProjectTextP>
                        {/* <ProjectThreeImage style={{background: 'none'}}>
                            <ProjectThreeImagePic style={{width: '90%'}} src={AirlyticsGif} alt="Airlytics Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectTextP>React  |  Redux  |  Git  |  Figma</ProjectTextP> 
                        <ProjectLinkDiv>
                            <PortfolioButton>
                                <CodeLink href="https://github.com/airbnb-price-opt/front-end">
                                    <LinkIcon style={{ marginRight: '0px'}} className="fab fa-github"/>
                                    View the Code
                                </CodeLink>
                            </PortfolioButton>
                            <PortfolioButton>
                                <CodeLink href="https://airlytics.netlify.com/">Official Website</CodeLink>
                            </PortfolioButton>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || coded ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={SatoshiPic} alt="Satoshi's Law" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Satoshi's Law</ProjectTextH2>
                        <ProjectTextP>Freelance tool to track hours, send invoices, and receive Bitcoin payments</ProjectTextP>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectTextP style={{ padding: '10px 0px' }}>React  |  Material-UI  |  Git  |  Figma </ProjectTextP>
                        <ProjectLinkDiv>
                            <PortfolioButton>
                                <CodeLink href="https://github.com/satoshi-s-law/frontend">
                                    <LinkIcon style={{ marginRight: '0px'}} className="fab fa-github"/>
                                    View the Code
                                </CodeLink>
                            </PortfolioButton>
                            <PortfolioButton>
                                <CodeLink href="https://www.youtube.com/watch?v=0JfRVZaGeSQ">Official Demo</CodeLink>
                            </PortfolioButton>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={HLFpic} alt="Hamilton Law Firm" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Hamilton Law Firm, PLLC.</ProjectTextH2>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectLinkDiv>
                            <PortfolioButton>
                                <CodeLink href="http://hlfplano.com/">Official Website</CodeLink>
                            </PortfolioButton>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={KKSSpic} alt="Killens Enterprise Consulting" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Killens Enterprise Consulting LLC.</ProjectTextH2>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectLinkDiv>
                            <PortfolioButton>
                                <CodeLink href="https://www.killensec.com/">Official Website</CodeLink>
                            </PortfolioButton>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={TMTpic} alt="Team Mental Training" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Team Mental Training Online Course</ProjectTextH2>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectLinkDiv>
                            <PortfolioButton>
                                <CodeLink href="https://www.teammentaltraining.com/">Official Website</CodeLink>
                            </PortfolioButton>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={GCSFSpic} alt="Global Cyber Security Summit" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>2018 Global Cybersecurity Summit</ProjectTextH2>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectLinkDiv>
                        <ViewSiteButtonNew type="button" onClick={handleOpen}>View Site Design</ViewSiteButtonNew>
                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogContent className="dialog-content">
                                <ResumeModal onClick={handleClose}>
                                    <ResumeIModalImg src={GCSFSmain} alt="2018 Global CyberSecurity Website Design" />
                                </ResumeModal>
                            </DialogContent>
                        </Dialog>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

                <ProjectBox id={all || designed ? 'show' : 'remove'}>
                    <ProjectTwoImage>
                        <ProjectTwoImagePic src={Rollinpic} alt="Rollin Premier" />
                    </ProjectTwoImage>
                    <ProjectText>
                        <ProjectTextH2>Rollin Premier Crypto Trading Group</ProjectTextH2>
                        {/* <ProjectThreeImage style={{background: 'none'}}>    
                            <ProjectThreeImagePic style={{width: '90%'}} src={SatoshiGif} alt="Satoshi's Law Demo Gif" />
                        </ProjectThreeImage> */}
                        <ProjectLinkDiv>
                            <ViewSiteButtonNew type="button" onClick={handleOpenRollin}>View Site Design</ViewSiteButtonNew>
                            <Dialog onClose={handleCloseRollin} aria-labelledby="customized-dialog-title" open={openRollin}>
                                <DialogContent className="dialog-content">
                                    <ResumeModal onClick={handleCloseRollin}>
                                        <ResumeIModalImg src={Rollinmain} alt="Rollin Premier Website Design" />
                                    </ResumeModal>
                                </DialogContent>
                            </Dialog>
                        </ProjectLinkDiv>
                    </ProjectText>
                </ProjectBox>

            </HorizontalFlexBoxes>
        </PortfolioContainer>
   
    )
}

export default Portfolio;