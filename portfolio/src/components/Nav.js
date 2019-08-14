import React from 'react';


import {
    NavSection,
    LeftNav,
    NavLinks,
    RightNav,
    SocialTag,
    SocialTagLink
} from './StyledComponents';

const Nav = () => {
    return(
        <NavSection>
            <LeftNav>
                {/* <div style={{ color: "white", fontSize: "3rem"}}>AP</div>                 */}
                <SocialTag style={{textDecoration: "none"}} href="https://github.com/anthonypiazza">
                    <i style={{ color: "white" }} className="fab fa-github-square"/>
                </SocialTag>
                <SocialTag style={{textDecoration: "none"}} href="https://www.linkedin.com/in/piazzaanthony/">
                    <i style={{ color: "white" }} className="fab fa-linkedin"/>
                </SocialTag>         
                <SocialTagLink to="section6" spy={true} smooth={true} offset={-70} duration= {500}>
                    <i style={{ color: "white" }} className="fas fa-envelope"/>
                </SocialTagLink>
            </LeftNav>
            <RightNav>                 
                <NavLinks activeClass="active" to="section1" spy={true} smooth={true} offset={-130} duration={500}>Home</NavLinks>
                <NavLinks activeClass="active" to="section2" spy={true} smooth={true} offset={-110} duration={500}>About Me</NavLinks>
                <NavLinks activeClass="active" to="section3" spy={true} smooth={true} offset={-75} duration={500}>Skills</NavLinks>
                <NavLinks activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>Projects</NavLinks>
            </RightNav> 
        </NavSection>    
    )
}

export default Nav;