import React from 'react';

// import Streemly from '../imgs/streemly.jpg';
import SatoshiPic from '../imgs/satoshis-law.png'
import Airlytics from '../imgs/airlyticsicon.png'

import {
    PortfolioContainer,
    PortfolioH1,
    SectionHeaderHR,
    ProjectSection,
    ProjectText,
    ProjectTextH2,
    ProjectTextP,
    ProjectLinkDiv,
    PortfolioButton,
    CodeLink,
    LinkIcon,
    // ProjectImage,
    // ProjectImagePic,
    ProjectTwoSection,
    ProjectTwoImage,
    ProjectTwoImagePic,
    ProjectThreeImage,
    ProjectThreeImagePic
} from './StyledComponents';

const Portfolio = (props) => {
    return (
        <PortfolioContainer id={props.id}>
            <PortfolioH1>Personal Projects</PortfolioH1>
            <SectionHeaderHR></SectionHeaderHR>
            <ProjectSection>
                <ProjectText>
                    <ProjectTextH2>Airlytics</ProjectTextH2>
                    <ProjectTextP>o An AirBnB analytics tool to optimize hosts' rates of return in Berlin</ProjectTextP>
                    <ProjectTextP>o Collaborated with 10 team members to create the application in a 1 week sprint </ProjectTextP>
                    <ProjectTextP>o Added client login authentication using Axios with localStorage to enable session persistence</ProjectTextP>
                    <ProjectTextP>o Successfully connected to Java back-end endpoints using token for Header Authorization</ProjectTextP>
                    <ProjectTextP>o Built add, update, and delete listing functionality for users via Redux-Thunk and Axios calls</ProjectTextP>
                    <ProjectTextP>o Implemented useState/useEffect React Hooks for local form state and async data rendering</ProjectTextP>
                    <ProjectTextP>o Utilized: ReactJS | Hooks | Redux | Redux-Thunk | Axios | Styled-Components | Git | Figma</ProjectTextP> 
                    <ProjectLinkDiv>
                        <PortfolioButton>
                            <CodeLink href="https://github.com/airbnb-price-opt/front-end">
                                <LinkIcon className="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>
                            <CodeLink href="https://airlytics.netlify.com/">Official Website</CodeLink>
                        </PortfolioButton>
                    </ProjectLinkDiv>
                </ProjectText>
                <ProjectThreeImage>
                    <ProjectThreeImagePic src={Airlytics} alt="Airlytics logo" />
                </ProjectThreeImage>


            </ProjectSection>
            <ProjectTwoSection>
                <ProjectText>
                    <ProjectTextH2>Satoshi's Law</ProjectTextH2>
                    <ProjectTextP>o A tool for freelancers to track billable hours, send invoices to clients, and receive payment via Bitcoin</ProjectTextP>
                    <ProjectTextP>o Collaborated with 6 team members to create the application in a 48-hour Hackathon </ProjectTextP>
                    <ProjectTextP>o Oversaw the creation of multiple UI views, configured according to design specifications</ProjectTextP>
                    <ProjectTextP>o Incorporated Styled-Components and Material-UI to mirror Figma wireframe design files</ProjectTextP>
                    <ProjectTextP>o Awarded Best Mobile UI in Lambda School's 2nd Annual Summer Hackathon out of 12 finalists</ProjectTextP>
                    <ProjectTextP>o Utilized: ReactJS | Styled-Components | Material-UI | React-Router | PropTypes | Git | Figma </ProjectTextP>
                    <ProjectLinkDiv>
                        <PortfolioButton>
                            <CodeLink href="https://github.com/satoshi-s-law/frontend">
                                <LinkIcon className="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>
                            <CodeLink href="https://www.youtube.com/watch?v=0JfRVZaGeSQ">Official Demo</CodeLink>
                        </PortfolioButton>
                    </ProjectLinkDiv>
                </ProjectText>

                <ProjectTwoImage>
                    <ProjectTwoImagePic src={SatoshiPic} alt="Satoshi's Law" />
                </ProjectTwoImage>
            </ProjectTwoSection>
{/* 
            <ProjectSection>
                <ProjectText>
                    <ProjectTextH2>Streemly Organizational Chart</ProjectTextH2>
                    <ProjectTextP>Streemly Organizational Chart is an application that allows business owners to view their company hierarchy structure while also enabling a faster, more efficient decision making and approval process for administrative tasks.</ProjectTextP> 
                    <ProjectLinkDiv>
                        <PortfolioButton>
                            <CodeLink href="https://github.com/build-org-chart/React-Frontend-Anthony-Piazza">
                                <LinkIcon className="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>
                            <CodeLink href="https://sharp-babbage-c8d5b5.netlify.com/">Official Website</CodeLink>
                        </PortfolioButton>
                    </ProjectLinkDiv>
                </ProjectText>                
                <ProjectImage>
                    <ProjectImagePic src={Streemly} alt="Streemly Logo" />
                </ProjectImage>
            </ProjectSection>  */}   
        </PortfolioContainer>    
    )
}

export default Portfolio;