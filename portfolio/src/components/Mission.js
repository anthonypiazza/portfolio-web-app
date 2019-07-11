import React from 'react';
import '../components/css/Mission.css';

const Mission = () => {
    return (
        <section className="problem">
            <div className="problem-text">
                <h2>My Developer Skillset and Toolstack Includes...</h2>
            </div>
            <div className="boxes">
                <div className="box-div"><i class="fab fa-react"></i></div>
                <div className="box-div"><i class="fab fa-js"></i></div>
                <div className="box-div"><i class="fab fa-css3-alt"></i></div>
                <div className="box-div"><i class="fab fa-html5"></i></div>
                <div className="box-div"><i class="fab fa-less"></i></div>
            </div>
        </section>        
    )
}

export default Mission;


