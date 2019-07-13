import React from 'react';
import '../components/css/Portfolio.css';
// import ProjectOneImage from '../imgs/hlfplano.png'

const Portfolio = (props) => {
    return (
        <div className="portfolio-container" id={props.id}>
            <h1 className="title-portfolio">Web Application Porfolio</h1>
            <hr></hr>
            <section className="products">
                <div className="products-text">
                    <h2>Streemly Organizational Chart</h2>
                    <p>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <div className="button-div">
                        <button><i class="fab fa-github"/>View the Code</button>
                        <button>Official Website</button>
                    </div>
                </div>

                <div className="products-image">
                </div>
            </section>
            <section className="products-2">
                <div className="products-text">
                    <h2>Satoshi's Law</h2>
                    <p>Concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <div className="button-div">
                        <button><i class="fab fa-github"/>View the Code</button>
                        <button>Official Website</button>
                    </div>
                </div>

                <div className="products-image-2">
  
                </div>
            </section>

            <section className="products">
                <div className="products-text">
                    <h2>Product</h2>
                    <p>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <div className="button-div">
                        <button><i class="fab fa-github"/>View the Code</button>
                        <button>Official Website</button>
                    </div>
                </div>

                <div className="products-image">   
                </div>
            </section>    
        </div>    
    )
}

export default Portfolio;