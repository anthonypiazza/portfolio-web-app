import React from "react";
import styled from "styled-components";
import WoodImg from '../imgs/arrow.jpg';

const ContactPage = styled.div`
height: 500px;
display: flex;
background-image: url(${WoodImg});
background-size: 100%;
background-position-y: 1900px;
`

const FormContainer = styled.div`
  display: flex;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 10%;
  height: 310px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #36393f;
  border: 1px solid white;
  color: white;
  padding: 10px;
  :hover{
    background-color: #db6450;
    cursor: pointer;
    color: white;
  }
`;

function Contact(props){
    return (
    <ContactPage id={props.id}>
      <div>
        <FormContainer>
            <ContactForm>
            <Input
                placeholder="Username"
                // onChange={this.handleChange}
                type="text"
                // value={this.state.username}
                name="username"
            />
            <Input
                placeholder="Full Name"
                // onChange={this.handleChange}
                type="text"
                // value={this.state.full_name}
                name="full_name"
            />
            <Input
                placeholder="Email"
                // onChange={this.handleChange}
                type="text"
                // value={this.state.email}
                name="email"
            />
            <Input
                placeholder="Password"
                // onChange={this.handleChange}
                type="text"
                // value={this.state.password}
                name="password"
            />

            <Button>Send Message</Button>
            </ContactForm>
        </FormContainer>
        <div></div>
      </div>
      <div>
        <div class="copyright">
          <p>©  2019 All rights reserved</p>
        </div>  
        <div class="disclaimers">  
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
        </div>
      </div>
    </ContactPage>
    );
}

export default Contact;
