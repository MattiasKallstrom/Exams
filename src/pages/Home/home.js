import React from "react";
import "./styles.css";
import emailjs from "emailjs-com";
import apiKeys from "./../../apikeys";
import { Link } from "react-router-dom";
import Input from "../../components/forms/Input/input";
import { Image } from "react-bootstrap";

class Home extends React.Component {
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
      .then((result) => {
        //Successfully sent email
        alert({
          error: "E-post skickad!",
        });
      })
      //Failed to send email
      .catch((err) => {
        alert({
          title: "E-post misslyckades att skickas",
        });
        console.error("Email error", err);
      });
    const form = document.querySelector(".form");
    form.addEventListener("submit", this.sendFeedback);
  };

  render() {
    return (
      <div className="md:ml-40">
        <div className=" w-full bg-hero bg-auto">
          <div className="text-3xl md:text-5xl flex text-red-500 font-bold justify-center -ml-5 p-5">
            Mälarö El AB
          </div>
          <div className="justify-left md:justify-center flex-wrap flex p-3  md:p-5">
            {" "}
            <Image src="https://img.icons8.com/ios/000000/checked-2--v2.png"></Image>
            <div className="flex text-black text-sm md:text-lg font-semibold px-1 pt-2">
              Kommersiella elektriska uförande
            </div>
            <Image src="https://img.icons8.com/ios/000000/checked-2--v2.png"></Image>
            <div className="flex text-black text-sm md:text-lg font-semibold px-1 pt-2">
              All typ av bostadsinstalltioner
            </div>
            <Image src="https://img.icons8.com/ios/000000/checked-2--v2.png"></Image>
            <div className="flex text-black text-sm md:text-lg font-semibold px-1 pt-2">
              Nybygge och renovering
            </div>
          </div>
        </div>

        <div className="w-full text-xl md:text-6xl flex text-red-500 text-uppercase font-bold justify-center p-5">
          Bästa elektrikern på mälaröarna
        </div>
        <div className="w-full text-sm md:text-2xl flex text-black font-semibold justify-center px-5">
          Här hittar du allt gällande elektriska reparationer, säkerhetssystem,
          hemmabio och automatisering i hemmet
        </div>
        <div className="flex flex-row mt-5 justify-center">
          <button className="bg-red-500 font-semibold flex flex-row hover:bg-black cursor-pointer p-3">
            {" "}
            <Link
              className="text-white text-3xl hover:no-underline	flex justify-center"
              to="/contact"
            >
              Boka service
            </Link>{" "}
          </button>
        </div>
        <form className="form flex flex-col justify-center mx-20" onSubmit={this.sendFeedback}>
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
        </form>
      </div>
    );
  }
}

export default Home;
