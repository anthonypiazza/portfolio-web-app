import React from "react";

import MessagePic from '../imgs/email.svg';

import {
  ContactPageDiv,
  FormDiv,
  MessageImg,
  Footer,
  FooterP,
  ContactH1,
  ContactP
} from './StyledComponents';


function Contact(props){
  return (
    <ContactPageDiv id={props.id}>
      <ContactH1>Get In Touch!</ContactH1> 
      <FormDiv>
        <div>
          <ContactP>Feel free to send me an email or reach out on 
          any social platform I’m active on :)</ContactP>
          <br/>
          <ContactP>anthonynpiazza@gmail.com</ContactP>
        </div>
        <div>
          <MessageImg src={MessagePic} alt="Chat Message"/>
        </div>
      </FormDiv>
      <Footer>
          <FooterP>©  2019 All rights reserved</FooterP> 
      </Footer>
    </ContactPageDiv>
  );
}

export default Contact;
