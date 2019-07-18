import React from "react";
import styled from "styled-components";

import './css/Contact.css';
import LoginForm from './LoginForm';
import MessagePic from '../imgs/email.svg';

const ContactPage = styled.div`
display: flex;
background-color: #eff0f0;
padding: 50px 0% 0px 0%;
justify-content: center;
font-family: 'Montserrat', sans-serif;
flex-direction: column;
`

const MessageImg = styled.img`
  width: 45%;
  height: auto;
  margin-top: 50px;
`

const FormDiv = styled.div`
display: flex;
justify-content: center;
padding-bottom: 30px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: .7rem;
`

const FooterP = styled.p`
  font-size: .7rem;
`

function Contact(){
  return (
    <ContactPage>
      <h1>Get In Touch!</h1> 
      <FormDiv>
        <LoginForm />
        <div>
          <MessageImg src={MessagePic} alt="Chat Message"/>
        </div>
      </FormDiv>
      <Footer>
        <div className="copyright">
          <FooterP>©  2019 All rights reserved</FooterP>
        </div>  
        <div className="disclaimers">  
          <FooterLink href="google.com">Privacy Policy</FooterLink>
          <FooterLink href="google.com">Terms and Conditions</FooterLink>
        </div>
      </Footer>
    </ContactPage>
  );
}

export default Contact;
