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
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
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
      <div>
        <div className=" w-full bg-hero bg-auto">
          <div className="text-3xl md:text-5xl flex text-uppercase text-red-500 font-bold justify-center -ml-5 p-5">
            Kontakta oss
          </div>
        </div>
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
              <button
                type="submit"
                className="bg-black font-semibold text-uppercase hover:bg-red-500 cursor-pointer p-3 h-12 w-24 my-2 text-white text-xl items-center hover:no-underline	flex justify-center"
              >
                Skicka
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
