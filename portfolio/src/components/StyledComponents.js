import styled from 'styled-components';
import FlowerImg from '../imgs/flower-grayscale.jpg';
import { Link } from 'react-scroll';

//ABOUTME STYLES

export const ContactPage = styled.div`
    background-image: url(${FlowerImg});
    background-position-y: center;
    background-size: 20%;
    background-color: #0b0b2d;
    padding-bottom: 50px;
    background-repeat: repeat-x;
    margin-top: 60px;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
`
export const ProfileSection = styled.section`
    font-size: 1rem;
    text-align: center;
    padding-top: 10px;
`

export const ProfileH1 = styled.h1`
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    margin: 0px 0% 10px 0%;
    font-size:3rem;
    color: silver;
`


export const ProfileName = styled.h2`
    letter-spacing: 1px;
    font-weight: normal;
    font-size: 2rem;
`

export const Profile = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 15%;
    color: white;
    align-items: center;
    margin: 5px 3% 5px 3%;
    background-color: #0b0b2d;
    border: 1px solid white;
    @media (max-width: 1600px){
        margin: 0px 3%;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        margin: 0px 0%;
        border: none;
    }
`

export const ProfileImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-right: 10%;
    border-right: 1px solid white;
    padding: 10px 5%;
    @media (max-width: 1000px){
        border-right: none;
        margin-right: 0%;
    } 
`

export const ProfileImgTag = styled.img`
    height: auto;
    width: 200px;
    border-radius: 5px;
    border: white solid 2px;
    @media (max-width: 1000px){
        margin-left: 7px;
    } 
`

export const ProfileHR = styled.hr`
    margin: 0px 35%;
    border: 1px white;
`

export const SocialLinkDiv = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
`

export const SocialIcon = styled.i`
    color: white;
    margin-right: 10px;
    font-size: 1.2rem;
`

export const IconLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0px 3.2%;
    font-size: 1rem;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const ProfileNameHR = styled.hr`
    border-top: 1px solid white;
    margin: 00px 39% 10px 39%;
    background: white;
`

export const ProfileH3 = styled.h3`
    font-size: 1.3rem;
    font-style: italic;
    color: white;
    letter-spacing: 1px;
    font-weight: normal;
`
export const ProfileInfoDiv = styled.div`
    width: 50%;
    @media (max-width: 1000px){
        width: 80%;
    } 
`

export const InfoP = styled.p`
    text-align: left;
    padding-bottom: 10px;
    font-size: 1.2rem;
    line-height: 2;
    letter-spacing: .3px;
    font-family: 'Montserrat', sans-serif;
    @media(max-width: 600px){
        font-size: 1rem;
    }
`

export const CityState = styled.p`
    text-align: center;
    padding-bottom: 10px;
    font-size: 1.5rem;
    line-height: 2;
    letter-spacing: .3px;
    margin-top: 0px;
`

export const ResumeModal = styled.div`
    display: flex;
    justify-content: center;
`

export const ResumeIModalImg = styled.img`
    margin-top: 80px;
    width: 1000px;
    @media (max-width: 1000px){
        width: 480px;
    } 
`


//NAV STYLES
export const NavSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 9%;
    background-color: #0b0b2d;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 500;
    background: rgb(45, 108, 180);
    margin: 0px 1%;
    @media (max-width: 1000px){
        flex-direction: column-reverse;
        padding-bottom: 10px;
    }
`
export const LeftNav = styled.nav`
    width: 33%;        
    display:flex;
    margin-left: 7%;
    justify-content: flex-start;
    @media (max-width: 1600px){
        margin-left: 5%;
    }
    @media (max-width: 1500px){
        margin-left: 2%;
    }
    @media (max-width: 1400px){
        margin-left: -1%;
    }
    @media (max-width: 1300px){
        margin-left: -4%;
    }
    @media (max-width: 1200px){
        margin-left: -7%;
    }
    @media (max-width: 1100px){
        margin-left: -10%;
    }
    @media (max-width: 1000px){
        display: none;
    }
`

export const NavLinks = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0px 3.2%;
    font-size: 1.6rem;
    letter-spacing: 1px;
    &:hover{
        text-decoration: underline;
        color: silver;
        cursor: pointer;
    }
    &.active{
        color: silver;
        text-decoration: underline;
    }
    @media (max-width: 1600px) {
        font-size: 1.5rem;
        padding: 0px;
    }
    @media (max-width: 1300px) {
        font-size: 1.4rem;
        padding: 0px;
    }
    @media (max-width: 1000px) {
        font-size: 1.3rem;
        padding: 0px;
    }
`

export const RightNav = styled.div`
    width: 33%;
    @media (max-width: 1600px) {
        display:flex;
        justify-content: space-between;
    }
    @media (max-width: 1000px){
        width: 100%;
    }
`

export const ContactButton = styled(Link)`
    padding: 10px 45px;
    border-radius: 5px;
    background-color: white;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
`

export const SocialTag = styled.a`
    display: flex;
    align-items: center;

    i{
        font-size: 3rem;
    }
`

export const SocialTagLink = styled(Link)`
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
    i{
        font-size: 3rem;
    }
`


//PORTFOLIO STYLES
export const PortfolioH1 = styled.h1`
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    padding: 50px 0% 0px 0%;
    margin: 0px;
    font-size:3rem;
    /* background: rgb(186,186,186);
    background: linear-gradient(180deg, rgba(186,186,186,1) 20%, rgba(255,255,255,1) 35%); */
    background: white;
`

export const PortfolioContainer = styled.div`
    background-color: white;
`

export const LinkIcon = styled.i`
    color: #0b0b2d;
    margin-right: 10px;
    font-size: 1.2rem;
`

export const SectionHeaderHR = styled.hr`
    border-top: 2px solid black;
    margin: 10px 39% 50px 39%;
    background: white;
`

export const ProjectBox = styled.div`
    background-color: #eff0f0;
    margin: 40px 2%;
    width: 25%;
    border: 3px solid #0b0b2d;
    padding: 15px 0% 5px 0%;
    color: #0b0b2d;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    /* &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    } */
    @media(max-width: 1600px){
        width: 40%;
        margin: 40px 4%;
    }
    @media(max-width: 1000px){
        width: 90%;
        margin: 40px 8%;
    }
    @media(max-width: 600px){
        margin: 40px 4%;
        width: 100%;
    }
`

export const HorizontalFlex = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 28%;
`

export const HorizontalFlexFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 20%;
    @media(max-width: 550px){
        margin: 3%;
    }
`

export const HorizontalFlexBoxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProjectSection = styled.section`
    display: flex;
    flex-direction: row-reverse;
    padding-top: 5px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    background-color: white;
    @media (max-width: 1000px){
        flex-direction: column-reverse;
    }
`
export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    @media (max-width: 1600px){
        padding: 10px 0% 40px 0%;
    }
`
export const ProjectTextH2 = styled.h2`
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 18px;
    @media (max-width: 1000px){
        text-align: center;
        margin-bottom: 0px;
    }
    @media (max-width: 450px){
        padding: 0px 2%;
        font-size: 1.6rem;
        letter-spacing: .6px;
    }
`

export const ProjectTextP = styled.p`
    margin: 5px 0%;
    line-height: 1.45;
    padding: 10px 20%;
    font-size: .85rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    font-style: normal;
    @media (max-width: 1600px){
        font-size: 1.1rem;
    }
    @media (max-width: 1000px){
        font-size: .9rem;
    }
    @media (max-width: 600px){
        font-size: .95rem;
        margin-top: 20px; 
        padding: 10px 10%;
    }
`

export const ProjectLinkDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px; 
    @media (max-width: 1000px){
        padding-left: 0%;
    }
`

export const PortfolioBoxFilterButton = styled.button`
    padding: 10px 25px;
    border-radius: 5px;
    background-color: white;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    margin: 0px 0%;
    width: 100%;
    margin-right: 0px;
    font-size: 2rem; 
    letter-spacing: 1px;
    border: 1px solid #0b0b2d;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1600px){
        padding: 10px;
    }
`

export const PortfolioButton = styled.button`
    padding: 10px 25px;
    border-radius: 5px;
    background-color: white;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    margin: 0px 5%;
    width: 100%;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1800px){
        padding: 10px 15px;
    }
    @media (max-width: 1600px){
        padding: 10px;
    }
`

export const ViewSiteButtonNew = styled.button`
    padding: 10px 25px;
    border-radius: 5px;
    background-color: white;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0px 5%;
    width: 100%;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1800px){
        padding: 10px 15px;
        font-size: 1.2rem;
    }
    @media (max-width: 1600px){
        padding: 10px;
    }
    @media(max-width: 600px){
        font-size: 18px;
        letter-spacing: .5px;
    }
`

export const CodeLink = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    @media(max-width: 600px){
        font-size: 18px;
    }
    @media(max-width: 450px){
        letter-spacing: .5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const ProjectImage = styled.div`
    width: 50%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px){
        width: 80%;
    }
`

export const ProjectImagePic = styled.img`
    width: 25%;
    height: auto;
    @media (max-width: 1600px){
        width: 35%;
    }
`

export const ProjectTwoSection = styled.section`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    margin-top: -5px;
    margin-bottom: -3px;
    @media (max-width: 1000px){
        flex-direction: column-reverse;
    }
`  

export const ProjectTwoImage = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20%;
    border-radius: 50%;
    padding: 30px 0%;
    @media (max-width: 1000px){
        padding: 30px 0%;
    }
`

export const ProjectTwoImagePic = styled.img`
    height: auto;
    width: 50%;
    border-radius: 20%;
`

export const ProjectThreeImage = styled.div`
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20%;
    border-radius: 50%;
    padding: 39px 0%;
    @media (max-width: 1000px){
        padding: 30px 0%;
    }
`

export const ProjectThreeImagePic = styled.img`
    height: auto;
`

//CLIENTS STYLES

export const ClientSection = styled.div`
    display: flex;
    flex-direction: column;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    background-color: white;
    padding: 50px 0% 80px 0%;
    @media (max-width: 1600px){
        padding-top: 90px;
    }
    @media (max-width: 1000px){
        padding-bottom: 10px;
    } 
`

export const TopRowPhotoGrid = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    } 
`

export const BottomRowPhotoGrid = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 5% 0px 5%;
    @media (max-width: 1000px){
        flex-direction: column;
        margin: 0px 0%;
        align-items: center;
    } 
`

export const SiteImageDiv = styled.div`
    width: 20%;
    @media (max-width: 1600px){
        width: 25%;
    }
    @media (max-width: 1000px){
        width: 50%;
        padding-bottom: 30px;
    } 
    @media (max-width: 600px){
        width: 70%;
    } 
`

export const SiteImage = styled.img`
    height: 140px;
    width: 75%;
    opacity: 1; 
    transition: .5s ease;
    backface-visibility: hidden;
    border: 1px solid black;
    &:hover{
        background-color: rgba(255,255,255, 0.8);    
        opacity: 0.3;
    }
    @media(max-width: 1400px){
        width: 80%;
    }    
    @media(max-width: 1200px){
        width: 90%;
    }
    @media(max-width: 1000px){
        width: 60%;
    }
    @media(max-width: 800px){
        width: 80%;
    }
    @media(max-width: 600px){
        width: 90%;
    }
`

export const SiteH3 = styled.h3`
    margin-top: -40px;
    @media (max-width: 1000px){
        font-size: 1rem;
    } 
    @media (max-width: 600px){
        font-size: .95rem;
    } 
`

export const TransitionDiv = styled.div`
    transition: .5s ease;
    opacity: 0;
    top: 50%;
    transform: translate(0%, -220%);
`

export const ViewSiteButton = styled.button`
    background-color: white;
    color: black;
    font-size: 16px;
    padding: 16px 32px;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    border: 1px solid black;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1600px){
        padding: 10px 15px;
    }
`

export const ViewSiteButtonLink = styled.a`
    text-decoration: none;
    color: black;
`

//CONTACT STYLES

export const ContactPageDiv = styled.div`
    display: flex;
    background-color: #0b0b2d;
    padding: 50px 0% 0px 0%;
    justify-content: center;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    flex-direction: column;
    color: white;
    @media (max-width: 1600px){}
    @media (max-width: 1000px){
        padding-top: 10px;
    } 
`
export const ContactP = styled.p`
    margin: 10px 0% 0px 2.5%;
    text-align: left;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    padding-right: 20%;
    line-height: 2;
    letter-spacing: .3px;
    @media(max-width: 1600px){
        margin-left: 4%;
    }
    @media(max-width: 600px){
        font-size: 1rem;
    }
`

export const ContactH1 = styled.h1`
    padding-top: 20px;
    margin: 0px 5% 15px 16.5%;
    text-align: left;
    font-weight: lighter;
    font-style: normal;
    font-size:3rem;
    color: silver;
    @media(max-width: 1600px){
        margin-left: 14.5%;
    }
    @media(max-width: 1500px){
        margin-left: 12.2%;
    }
    @media(max-width: 1400px){
        margin-left: 10.2%;
    }
    @media(max-width: 1300px){
        margin-left: 7.8%;
    }
    @media(max-width: 1100px){
        margin-left: 9.8%;
    }
`

export const MessageImg = styled.img`
    width: 450px;
    height: auto;
    margin-right: 300px;
    margin-top: -70px;
    @media (max-width: 1600px){
        margin-right: 200px;
    }    
    @media (max-width: 1300px){
        margin-right: 150px;
    }  
    @media (max-width: 1100px){
        display: none;
    } 
`

export const FormDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    margin-left: 13%;
    @media(max-width: 1500px){
        margin-left: 10.5%;
    }
    @media(max-width: 1400px){
        margin-left: 8.5%;
    }
    @media(max-width: 1300px){
        margin-left: 6%;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #0b0b2d;
    color: white;
    width: 100%;
`

export const FooterP = styled.p`
    font-size: 1.3rem;
    text-align: left;
    margin-left: 2%;
    @media(max-width: 1000px){
        font-size: 1.1rem;
    }
`

//MISSION STYLING

export const SkillSection = styled.section`
    background: #eff0f0;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding-bottom: 83px;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
`
export const SkillIcon = styled.i`
    color: white;
    font-size: 2.2rem;
`

export const SkillHeadline = styled.h2`
    text-align: center;
    color: #0b0b2d;
    font-weight: normal;
    font-size: 3rem;
    @media(max-width: 700px){
        margin: 30px 20%;
    }
    @media(max-width: 630px){
        margin: 30px 15%;
    }
    @media(max-width: 550px){
        margin: 30px 10%;
    }
`

export const SkillName = styled.p`
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4;
    letter-spacing: .5px;
`

export const SkillBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 14%;
    @media (max-width: 1600px){
        margin: 0px 10%;
        flex-wrap: wrap;
    }
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`

export const SkillBox = styled.div`
    background-color: #0b0b2d;
    margin: 40px 2%;
    width: 100px;
    padding: 15px 3.2% 5px 3.2%;
    color: white;
    border-radius: 5px;
    text-align: center;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media(max-width: 1600px){
        margin: 40px 6%;
    }
    @media(max-width: 600px){
        margin: 40px 2%;
        width: 40%;
    }
`

//HERO STYLING

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const VerticalAlign = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SocialTagHero = styled.a`
    display: none;
    i{
        font-size: 3rem;
    }
    @media(max-width: 1000px){
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`
export const RowDiv = styled.div`
    display: none;
    @media(max-width: 1000px){
        display: flex;
        justify-content: center;
        margin: 10px 0%;
    }
`


export const SlideTitleDiv = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    margin: 0px 1%;
    padding: 30px 0%;
    background: linear-gradient(rgb(45, 108, 180), rgb(29, 70, 114));
    @media (max-width: 1000px){
        flex-direction: column-reverse;
        justify-content: center;
    } 
`

export const TitleDiv = styled.div`
    width: 100%;
`

export const FirstSlideTitle = styled.h1`
    text-align: left;
    font-size: 6rem;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    padding-top: 0px;  
    padding: 0px 0%;
    font-weight: lighter; 
    color: white;   
    letter-spacing: 2px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 3%;
    @media(max-width: 1000px){
        text-align: center;
        font-size: 4rem;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media(max-width: 600px){
        margin-left: 0%;
    }
`

export const FirstSlideTagline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0% 0px 0%;
    font-size: 1.5rem;
    margin-top: -30px;
    line-height: 1.25;
    color: white; 
    width: 100%;
    @media(max-width: 100px){
        justify-content: center;
    }
`
export const HeroImage = styled.img`
    height: 300px;
    @media(max-width: 600px){
        height: 200px;
        width: auto;
    }
`

export const FirstSlideTaglineText = styled.h3`
    text-align: left;
    font-family: komu-a, sans-serif;
    font-weight: lighter;
    font-style: normal;
    padding-top: 0px;  
    padding: 0px 0%;
    font-weight: lighter; 
    letter-spacing:1px;
    color: white;   
    text-align: center;
    margin: 10px 0%;
    display: flex;
    font-size: 2rem;
    @media(max-width: 1000px){
        justify-content: center;
        font-size: 1.5rem;
    }
`

