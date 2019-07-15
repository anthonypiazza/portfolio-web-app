import React from "react";
import styled from "styled-components";

const ContactPage = styled.div`
height: 500px;
display: flex;
background-color: #eff0f0;
padding: 50px 0%;
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
      <div className="contact-footer-div">
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
        <div>
          <div className="copyright">
            <p>©  2019 All rights reserved</p>
          </div>  
          <div className="disclaimers">  
            <a href="google.com">Privacy Policy</a>
            <a href="google.com">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </ContactPage>
    );
}

export default Contact;
