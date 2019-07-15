import React from 'react';
import '../components/css/Mission.css';

const Mission = props => {
    return (
        <section id={props.id} className="problem">
            <div className="problem-text">
                <h2>My Developer Skillset and Toolstack Includes...</h2>
            </div>
            <div className="boxes">
                <div className="box-div">
                    <i className="fab fa-react"></i>
                    <p>ReactJS</p>
                </div>
                <div className="box-div">
                    <i className="fab fa-js"></i>
                    <p>Javascript</p>
                </div>
                <div className="box-div">
                    <i className="fab fa-css3-alt"></i>
                    <p>CSS3</p>
                </div>
                <div className="box-div">
                    <i className="fab fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div className="box-div">
                    <i className="fab fa-less"></i>
                    <p>LESS</p>
                </div>
                <div className="box-div">
                    <i className="fab fa-git"></i>
                    <p>GitFlow</p>
                </div>
            </div>
        </section>        
    )
}

export default Mission;


