import React from 'react';

import Streemly from '../imgs/streemly.jpg';
import SatoshiPic from '../imgs/satoshis-law.png'
import LambdaFit from '../imgs/LambdaFit.png'

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
    ProjectImage,
    ProjectImagePic,
    ProjectTwoSection,
    ProjectTwoImage,
    ProjectTwoImagePic,
    ProjectThreeImage,
    ProjectThreeImagePic
} from './StyledComponents';

const Portfolio = (props) => {
    return (
        <PortfolioContainer id={props.id}>
            <PortfolioH1>Web Application Porfolio</PortfolioH1>
            <SectionHeaderHR></SectionHeaderHR>
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
            </ProjectSection>
            <ProjectTwoSection>
                <ProjectText>
                    <ProjectTextH2>Satoshi's Law</ProjectTextH2>
                    <ProjectTextP>Satoshi's Law is an application that tracks a user’s billable hours and allows for payments to be settled via the Bitcoin Lightning Network.</ProjectTextP> 
                    <ProjectLinkDiv>
                        <PortfolioButton>
                            <CodeLink href="https://github.com/satoshi-s-law/frontend">
                                <LinkIcon className="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>Official Website</PortfolioButton>
                    </ProjectLinkDiv>
                </ProjectText>

                <ProjectTwoImage>
                    <ProjectTwoImagePic src={SatoshiPic} alt="Satoshi's Law" />
                </ProjectTwoImage>
            </ProjectTwoSection>

            <ProjectSection>
                <ProjectText>
                    <ProjectTextH2>Product</ProjectTextH2>
                    <ProjectTextP>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</ProjectTextP> 
                    <ProjectLinkDiv>
                        <PortfolioButton>
                            <CodeLink href="https://github.com">
                                <LinkIcon className="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>
                            <CodeLink href="https://infallible-brattain-b0f591.netlify.com/index.html">Official Website</CodeLink>
                        </PortfolioButton>
                    </ProjectLinkDiv>
                </ProjectText>

                <ProjectThreeImage>
                    <ProjectThreeImagePic src={LambdaFit} alt="Lambda Fit logo" />
                </ProjectThreeImage>
            </ProjectSection>    
        </PortfolioContainer>    
    )
}

export default Portfolio;