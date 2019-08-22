import styled from 'styled-components';

//HERO STYLING

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #2f2f2f;
`


export const SlideTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    margin: 0px 2%;
    padding: 150px 0%;
    box-shadow: rgba(62, 64, 66, 0.2) 0px 4px 4px 2px;
    background: linear-gradient(rgb(45, 108, 180), rgb(29, 70, 114)); 
`


export const FirstSlideTitle = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-family: 'Montserrat', sans-serif;
    padding-top: 0px;   
    color: white;   
    @media (max-width: 1600px){
        font-size: 3rem;
    } 
    @media (max-width: 1000px){
        font-size: 2.2rem;
        margin-top: 50px;
    } 
`

export const FirstSlideTagline = styled.div`
    text-align: left;
    padding: 0px 0%;
    font-size: 1.5rem;
    margin-top: -30px;
    line-height: 1.25;
    color: white; 
    @media (max-width: 1600px){
        font-size: 1.2rem;
    } 
    @media (max-width: 1000px){
        font-size: .9rem;
        text-align: center;
        padding: 0px 0%;
    } 
`
