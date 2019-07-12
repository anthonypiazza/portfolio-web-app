import React from 'react';
import '../components/css/Nav.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    return(
        <section className="nav-bar">
            <nav className="nav">
                <Link activeClass="active" exact to="section1" spy={true} smooth={true} offset={-70} duration= {500}>Home</Link>
                <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration= {500}>Projects</Link>   
                <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration= {500}>About Me</Link>
                <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration= {500}>Skills</Link>     
            </nav>
            <div className="name-div">
                <h1 id="anthony">ANTHONY PIAZZA</h1>
            </div>
            <div className="contact-div">
                <Link className="cta" to="section5" spy={true} smooth={true} offset={-70} duration= {500}><button>Contact Me</button></Link>
            </div>
        </section>    
    )
}

export default Nav;