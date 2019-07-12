import React from 'react';
import '../components/css/Portfolio.css';
// import ProjectOneImage from '../imgs/hlfplano.png'

const Portfolio = (props) => {
    return (
        <div id={props.id}>
            <section className="products">
                <div className="products-text">
                    <h2>Product</h2>
                    <p>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <button className="link-to-build-1">Learn More</button>
                </div>

                <div className="products-image">
                </div>
            </section>
            <section className="products-2">
                <div className="products-text-2">
                    <h2>Product</h2>
                    <p>Concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <a className="learn-more" href="#"><button className="link-to-build-2">Learn More</button></a>
                </div>

                <div className="products-image-2">
                    <div>
                        <img src="img/track-statistic.png" alt="Rowing Machine" /> 
                    </div>    
                </div>
            </section>

            <section className="products-3">
                <div className="products-text-3">
                    <h2>Product</h2>
                    <p>We have concentrated our research efforts around making quick iterations of how to provide a rich UX/UI for gym aficionados.</p> 
                    <a className="learn-more" href="https://boring-euclid-601ad3.netlify.com/"><button>Learn More</button></a>
                </div>

                <div className="products-image-3">
                    <div>
                        <img src="img/swole.png" alt="Rowing Machine"/> 
                    </div>    
                </div>
            </section>    
        </div>    
    )
}

export default Portfolio;