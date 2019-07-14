import React from 'react';
import styled from 'styled-components';

import '../components/css/Portfolio.css';
import Streemly from '../imgs/streemly.jpg';
import SatoshiPic from '../imgs/satoshis-law.png'
import LambdaFit from '../imgs/LambdaFit.png'

const CodeLink = styled.a`
    text-decoration: none;
    color: black;
`
const PortfolioButton = styled.button`
    padding: 10px 45px;
    border-radius: 5px;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
`

const Portfolio = (props) => {
    return (
        <div className="portfolio-container" id={props.id}>
            <h1 className="title-portfolio">Web Application Porfolio</h1>
            <hr></hr>
            <section className="products">
                <div className="products-text">
                    <h2>Streemly Organizational Chart</h2>
                    <p>Streemly Organizational Chart is an application that allows business owners to view their company hierarchy structure while also enabling a faster, more efficient decision making and approval process for administrative tasks.</p> 
                    <div className="button-div">
                        <PortfolioButton>
                            <CodeLink className="code-link" href="https://github.com/build-org-chart/React-Frontend-Anthony-Piazza">
                                <i class="fab fa-github"/>
                                View the Code
                            </CodeLink>
                        </PortfolioButton>
                        <PortfolioButton>
                            <CodeLink className="code-link" href="https://sharp-babbage-c8d5b5.netlify.com/">Official Website</CodeLink>
                        </PortfolioButton>
                    </div>
                </div>

                <div className="products-image">
                    <img src={Streemly} alt="Streemly Logo" />
                </div>
            </section>
            <section className="products-2">
                <div className="products-text">
                    <h2>Satoshi's Law</h2>
                    <p>Satoshi's Law is an application that tracks a user’s billable hours and allows for payments to be settled via the Bitcoin Lightning Network.</p> 
                    <div className="button-div">
                        <PortfolioButton>
                            <a className="code-link" href="https://github.com/satoshi-s-law/frontend">
                                <i class="fab fa-github"/>
                                View the Code
                            </a>
                        </PortfolioButton>
                        <PortfolioButton>Official Website</PortfolioButton>
                    </div>
                </div>

                <div className="products-image-2">
                    <img src={SatoshiPic} alt="Satoshi's Law" />
                </div>
            </section>

            <section className="products">
                <div className="products-text">
                    <h2>Product</h2>
                    <p>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <div className="button-div">
                        <PortfolioButton>
                            <a className="code-link" href="https://github.com">
                                <i class="fab fa-github"/>
                                View the Code
                            </a>
                        </PortfolioButton>
                        <PortfolioButton>
                            <a className="code-link" href="https://infallible-brattain-b0f591.netlify.com/index.html">Official Website</a>
                        </PortfolioButton>
                    </div>
                </div>

                <div className="products-image-3">
                    <img src={LambdaFit} alt="Lambda Fit logo" />
                </div>
            </section>    
        </div>    
    )
}

export default Portfolio;