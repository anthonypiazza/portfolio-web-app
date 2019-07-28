import styled from 'styled-components';
import FlowerImg from '../imgs/flower-grayscale.jpg';
import { Link } from 'react-scroll';
import { Form, Field } from 'formik';

//ABOUTME STYLES
export const ContactPage = styled.div`
  background-image: url(${FlowerImg});
  background-position-y: center;
  background-size: 20%;
  background-color: #eff0f0;
  padding-bottom: 50px;
  background-repeat: repeat-x;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
`
export const ProfileSection = styled.section`
    font-size: 1rem;
    text-align: center;
    padding-top: 10px;
`
export const ProfileH1 = styled.section`
    font-size: 2rem;
    margin: 0px 0%;
`

export const Profile = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 15%;
    align-items: center;
    border: 1px solid black;
    margin: 5px 20% 5px 20%;
    background-color: #eff0f0;
    box-shadow: 7px 7px 7px 7px rgba(0,0,0,0.5);
    &:hover{
        transition: transform 2s;
        transform: scale(1.05);
    }
    @media (max-width: 1600px){
        margin: 0px 3%;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        border: none;
        margin: 0px 0%;
    } 
`

export const ProfileImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-right: 10%;
    border-right: 1px solid black;
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
    border: black solid 2px;
    @media (max-width: 1000px){
        margin-left: 7px;
    } 
`

export const ProfileHR = styled.hr`
    margin: 0px 35%;
`

export const SocialLinkDiv = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
`

export const SocialIcon = styled.i`
    color: black;
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

export const ProfileH3 = styled.h3`
    font-size: 1rem;
    font-style: italic;
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
    font-size: 1rem;
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

export const ModalButton = styled.button`
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


//NAV STYLES
export const NavSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 9%;
    background-color: black;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 500;
    @media (max-width: 1000px){
        flex-direction: column-reverse;
        padding-bottom: 10px;
    }
`
export const LeftNav = styled.nav`
    width: 33%;
    @media (max-width: 1000px){
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0px 3.2%;
    font-size: 1rem;
    &:hover{
        font-weight: bold;
        transition: transform .2s;
        transform: scale(1.1);
        border: 1px white solid;
        border-radius: 10px;
        cursor: pointer;
    }
    &.active{
        font-weight: bold;
        transition: transform .2s;
        transform: scale(1.1);
        border: 1px white solid;
        border-radius: 10px;
    }
    @media (max-width: 1600px) {
        font-size: .8rem;
        padding: 0px 2.2%;
    }
`

export const MiddleNav = styled.div`
    width: 33%;
    @media (max-width: 1000px){
        width: 100%;
    }
`

export const MiddleNavText = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24.5px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
`

export const RightNav = styled.div`
    width: 33%;
    @media (max-width: 1000px){
        padding-bottom: 15px;
        width: 100%;
    }
`

export const ContactButton = styled(Link)`
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



//PORTFOLIO STYLES
export const PortfolioH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    padding: 50px 0% 0px 0%;
    margin: 0px;
    /* background: rgb(186,186,186);
    background: linear-gradient(180deg, rgba(186,186,186,1) 20%, rgba(255,255,255,1) 35%); */
    background: white;
`

export const PortfolioContainer = styled.div`
    background-color: white;
`

export const LinkIcon = styled.i`
    color: black;
    margin-right: 10px;
    font-size: 1.2rem;
`

export const SectionHeaderHR = styled.hr`
    border-top: 2px solid black;
    margin: 10px 39% 50px 39%;
    background: white;
`

export const ProjectSection = styled.section`
    display: flex;
    flex-direction: row-reverse;
    padding-top: 5px;
    margin-top: -5px;
    margin-bottom: -3px;
    font-family: 'Montserrat', sans-serif;
    background-color: white;
    @media (max-width: 1000px){
        flex-direction: column-reverse;
    }
`
export const ProjectText = styled.div`
    width: 50%;
    padding-top: 155px;
    padding-bottom: 155px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    @media (max-width: 1600px){
        padding: 10px 0% 40px 0%;
    }
    @media (max-width: 1000px){
        width: 100%;
    }
`
export const ProjectTextH2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: bolder;
    text-align: left;
    padding: 0px 10%;
    @media (max-width: 1000px){
        font-size: 1.3rem;
        text-align: center;
    }
`

export const ProjectTextP = styled.p`
    margin-top: 18px;
    line-height: 1.45;
    padding: 0px 10%;
    font-size: 1.3rem;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 1600px){
        font-size: 1.1rem;
    }
    @media (max-width: 1000px){
        font-size: .9rem;
    }
`

export const ProjectLinkDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 10%;
    width: 90%;
    @media (max-width: 1000px){
        justify-content: center;
        padding-left: 0%;
        width: 100%;
    }
`

export const PortfolioButton = styled.button`
    padding: 10px 45px;
    border-radius: 5px;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    margin-right: 30px;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1600px){
        padding: 10px;
    }
`

export const CodeLink = styled.a`
    text-decoration: none;
    color: black;
`

export const ProjectImage = styled.div`
    width: 50%;
    background-color: #da6351;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px){
        width: 100%;
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
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px){
        width: 100%;
        padding: 30px 0%;
    }
`

export const ProjectTwoImagePic = styled.img`
    height: auto;
    width: 30%;
    @media (max-width: 1600px){
        width: 40%;
    }
    
`

export const ProjectThreeImage = styled.div`
    width: 50%;
    background-color: #bb1333;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px){
        width: 100%;
        padding: 30px 0%;
    }
`

export const ProjectThreeImagePic = styled.img`
    width: 35%;
    height: auto;
    @media (max-width: 1600px){
        width: 45%;
    }
`

//CLIENTS STYLES

export const ClientSection = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    background-color: white;
    padding: 50px 0% 80px 0%;
    @media (max-width: 1600px){
        margin-top: 40px;
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
    font-family: 'Montserrat', sans-serif;
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
    background-color: black;
    padding: 50px 0% 0px 0%;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    flex-direction: column;
    color: white;
    @media (max-width: 1600px){}
    @media (max-width: 1000px){
        padding-top: 10px;
    } 
`

export const ContactH1 = styled.h1`
    padding-top: 20px;
    font-size: 2rem;
    margin: 0px;
`

export const MessageImg = styled.img`
    width: 45%;
    height: auto;
    margin-top: 50px;
    @media (max-width: 1000px){
        display: none;
    } 
`

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: .7rem;
  text-align: center;
  padding-left: 2%;
  &:hover {
    -webkit-text-stroke: 1px white; 
    text-align: right;
  }
  @media(max-width: 1000px){
      padding-left: 5%;
  }
`

export const FooterP = styled.p`
  font-size: .7rem;
  text-align: left;
  margin-left: 2%;
`

export const CopyrightDiv = styled.div`
   width: 50%
`

export const Disclaimers = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    justify-content: flex-end;
    margin-right: 2%;
    flex-direction: row;
`

export const FormStyle = styled(Form)`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 7%;
    width: 40%;
    @media(max-width: 800px){
        width: 90%;
    }
`

export const FormErrors = styled.p`
    font-size: 1rem;
`

export const FormField = styled(Field)`
    padding: 10px 0% 10px 2%;
    width: 99%;
    margin: 5px 0% 25px 0%;
    border: none;
    border-radius: 5px;
`
export const TextArea = styled(Field)`
    padding: 10px 200px;
    margin: 5px 0% 25px 0%;
    border: none;
    border-radius: 5px;
`

export const FormSubmitButton = styled.button`
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

//MISSION STYLING

export const SkillSection = styled.section`
    background: #eff0f0;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    padding-bottom: 83px;
    font-family: 'Montserrat', sans-serif;
`
export const SkillIcon = styled.i`
    color:white;
    font-size: 2.2rem;
`

export const SkillHeadline = styled.h2`
    font-size: 1.5rem;
    text-align: center;
`

export const SkillName = styled.p`
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4;
    @media (max-width: 1600px){
        font-size: .9rem;
    }
`

export const SkillBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 5%;
    @media (max-width: 1600px){
        margin: 0px 10%;
    }
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

export const SkillBox = styled.div`
    background-color: black;
    margin: 40px 2.68%;
    padding: 15px 3.2% 5px 3.2%;
    color: white;
    border-radius: 5px;
    text-align: center;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
`

//HERO STYLING

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #2f2f2f;
`


export const SlideTitleDiv = styled.div`
    margin-left: 10%; 
    width: 100%;   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1600px){
        align-items: center;
        margin-left: 0%;
    } 
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

export const SlideButton = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    padding: 16px 0%;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    border: 1px solid black;    
    margin: 45px 80% 10px 0%;
    background-color: white;
    color: black;
    text-decoration: none;
    font-size: 1.4rem;
    &:hover{
        transition: transform .2s;
        transform: scale(1.1);
    }
    @media (max-width: 1600px){
        margin: 25px 35% 10px 35%;
        font-size: 1.1rem;
    }
    @media (max-width: 1000px){
        font-size: .9rem;
        margin: 15px 30% 10px 30%;
    } 
`

export const SlideButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`

export const SecondSlideText = styled.p`
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 500;
    margin-top: -10px;
    color: black;
    text-align: left;
    @media (max-width: 1600px){
        font-size: 1.1rem;
        text-align: center;
    } 
    @media (max-width: 1000px){
        font-size: .9rem;
    } 
`
export const SecondSlideTagline = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 14px;
    line-height: 1.25;
    color: black;  
`

export const SecondSlideTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 3.9rem;
    text-align: left;
    @media (max-width: 1600px){
        font-size: 3rem;
        padding-top: 10px;
    } 
    @media (max-width: 1000px){
        font-size: 2.2rem;
        text-align: center;
        margin-top: 50px;
    } 
`

export const SecondSlideSubTagline = styled.p`
    font-weight: 500;
    margin-bottom: 50px;
    margin-top: -40px;
    font-size: 2.2rem;
    font-style: italic;
    color: black;
    text-align: left;
    @media (max-width: 1600px){
        font-size: 1.8rem;
        padding-top: 15px;
        text-align: center;
    } 
    @media (max-width: 1000px){
        font-size: 1.3rem;
    } 
`

export const SlideTwoButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -15px;
    @media (max-width: 1600px){
        margin-top: 10px;
    } 
    @media (max-width: 1000px){
        font-size: .9rem;
    } 
`

// .button-div-3 > a{
//     width: 100%;
//     margin: 5px 75% 10px 9.5%;
//     font-family: 'Montserrat', sans-serif;
//     background-color: white;
//     color: black;
//     text-decoration: none;
//     font-size: 1.4rem;
// }

