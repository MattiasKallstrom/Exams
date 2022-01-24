import React from "react";
import Button from "../../components/forms/Button/button";
import Input from "../../components/forms/Input/input";
import emailjs from "emailjs-com";
import apiKeys from "./../../apikeys";
import "./styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      telephone: "",
      feedback: "",
      error: "",
    };
  }

  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  telephoneChange = (event) => {
    this.setState({ telephone: event.target.value });
  };
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  sendFeedback = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("gmail", apiKeys.TEMPLATE_ID, event.target, apiKeys.USER_ID)
      .then(function(response) {
       console.log('SUCCESS!', response.status, response.text)

      })
      .catch((err) => {
        alert({
          title: "E-post misslyckades att skickas",
        });
        console.error("Email error", err);
      });
    const form = document.querySelector(".contactForm");
    form.addEventListener("submit", this.sendFeedback);
  };

  render() {
    return (
      <div className="contact">
        <div className="formWrapper">
          <h1> Kontakta oss</h1>
          <form className="contactForm" onSubmit={this.sendFeedback}>
            <Input
              placeholder="Namn"
              type="text"
              name="name"
              onChange={this.nameChange}
            />
            <Input
              placeholder="E-post"
              type="text"
              name="email"
              onChange={this.emailChange}
            />
            <Input
              placeholder="Telefon"
              type="text"
              name="telephone"
              onChange={this.telephoneChange}
            />
            <Input
              placeholder="Beskriv ditt ärende"
              type="text"
              name="message"
              onChange={this.messageChange}
            />
            <Button type="submit"> Skicka </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
