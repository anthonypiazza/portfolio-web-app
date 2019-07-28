import React from 'react';

import {ReduxLogo} from '../imgs/redux (1).svg';

import {
    SkillSection,
    SkillIcon,
    SkillHeadline,
    SkillName,
    SkillBoxRow,
    SkillBox
} from './StyledComponents';

const Mission = props => {
    return (
        <SkillSection id={props.id}>
            <div className="problem-text">
                <SkillHeadline>Developer Skillset. Programming Toolstack.</SkillHeadline>
            </div>
            <SkillBoxRow>
                <SkillBox>
                    <SkillIcon className="fab fa-react"></SkillIcon>
                    <SkillName>ReactJS</SkillName>
                </SkillBox>
                <SkillBox>
                    <img src={ReduxLogo} alt="Redux Logo" />
                    <SkillName>Redux</SkillName>
                </SkillBox>
                <SkillBox>
                    <SkillIcon className="fab fa-js"></SkillIcon>
                    <SkillName>Javascript</SkillName>
                </SkillBox>
                <SkillBox>
                    <SkillIcon className="fab fa-css3-alt"></SkillIcon>
                    <SkillName>CSS3</SkillName>
                </SkillBox>
                <SkillBox>
                    <SkillIcon className="fab fa-html5"></SkillIcon>
                    <SkillName>HTML5</SkillName>
                </SkillBox>
                <SkillBox>
                    <SkillIcon className="fab fa-less"></SkillIcon>
                    <SkillName>LESS</SkillName>
                </SkillBox>
                <SkillBox>
                    <SkillIcon className="fab fa-git"></SkillIcon>
                    <SkillName>GitFlow</SkillName>
                </SkillBox>
            </SkillBoxRow>
        </SkillSection>        
    )
}

export default Mission;


