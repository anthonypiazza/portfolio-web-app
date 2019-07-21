import React from "react";

import ContactForm from './ContactForm';
import MessagePic from '../imgs/email.svg';

import {
  ContactPageDiv,
  PortfolioH1,
  FormDiv,
  MessageImg,
  Footer,
  CopyrightDiv,
  FooterP,
  Disclaimers,
  FooterLink,
  SectionHeaderHR,
  ContactH1
} from './StyledComponents';


function Contact(props){
  return (
    <ContactPageDiv id={props.id}>
      <ContactH1>Get In Touch!</ContactH1> 
      <SectionHeaderHR></SectionHeaderHR>
      <FormDiv>
        <ContactForm />
        <div>
          <MessageImg src={MessagePic} alt="Chat Message"/>
        </div>
      </FormDiv>
      <Footer>
        <CopyrightDiv>
          <FooterP>©  2019 All rights reserved</FooterP>
        </CopyrightDiv>  
        <Disclaimers>  
          <FooterLink href="google.com">Privacy Policy</FooterLink>
          <FooterLink href="google.com">Terms and Conditions</FooterLink>
        </Disclaimers>
      </Footer>
    </ContactPageDiv>
  );
}

export default Contact;
