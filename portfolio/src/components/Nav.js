import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/css/Nav.css';

const Nav = () => {
    return(
        <section className="nav-bar">
            <nav className="nav">
                <NavLink className="nav-items" link to="/">Home</NavLink>
                <NavLink className="nav-items" link to="/projects">Projects</NavLink>   
                <NavLink className="nav-items" link to="/aboutme">About Me</NavLink>
                <NavLink className="nav-items" link to="/skills">Skills</NavLink>     
            </nav>
            <div className="name-div">
                <a className="nav-logo"><h1>ANTHONY PIAZZA</h1></a>
            </div>
            <div className="contact-div">
                <NavLink className="cta" link to="/contact"><button>Contact Me</button></NavLink>
            </div>
        </section>    
    )
}

export default Nav;