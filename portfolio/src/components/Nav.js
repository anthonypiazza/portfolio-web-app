import React from 'react';

import {
    NavSection,
    LeftNav,
    NavLinks,
    MiddleNav,
    MiddleNavText,
    RightNav,
    ContactButton,
} from './StyledComponents';

const Nav = () => {
    return(
        <NavSection>
            <LeftNav>
                <NavLinks activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</NavLinks>
                <NavLinks activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>About Me</NavLinks>
                <NavLinks activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>Skills</NavLinks>
                <NavLinks activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>Personal</NavLinks>   
                <NavLinks activeClass="active" to="section5" spy={true} smooth={true} offset={-70} duration={500}>Professional</NavLinks>
            </LeftNav>
            <MiddleNav>
                <MiddleNavText>ANTHONY PIAZZA</MiddleNavText>
            </MiddleNav>
            <RightNav>     
                <ContactButton to="section6" spy={true} smooth={true} offset={-70} duration= {500}>Contact Me</ContactButton>
            </RightNav>
        </NavSection>    
    )
}

export default Nav;