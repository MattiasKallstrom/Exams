import React from 'react';
import './styles.css';
import emailjs from 'emailjs-com';
import apiKeys from './../../apikeys';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Container,
} from 'react-bootstrap';
import Button from '../../components/forms/Button/button';
import Input from '../../components/forms/Input/input';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name: '',
    email: '',
    telephone: '',
    feedback: '',
    error: '',
    };
  } 

  nameChange = (event) => {
    this.setState({name: event.target.value})
  }
  emailChange = (event) => {
    this.setState({email: event.target.value})
  }
  telephoneChange = (event) => {
    this.setState({telephone: event.target.value})
  }
  messageChange = (event) => {
    this.setState({feedback: event.target.value})
  }

  sendFeedback = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      'gmail', apiKeys.TEMPLATE_ID,
      event.target, apiKeys.USER_ID
    ).then(result => {
      //Successfully sent email
      alert({
        error: 'E-post skickad!'
      })
    })
    //Failed to send email
    .catch(err => {
      alert({
        title: 'E-post misslyckades att skickas'
      })
      console.error('Email error', err)
    })
    const form = document.querySelector('.form')
    form.addEventListener('submit',this.sendFeedback)
  }


  render() {
    return (

      <Container fluid className="containerWrapper">
        <Card>
            <Row>
              <Col className="homeRow">
                <div className="backDrop">
                <Card.Title> Din Elektriker på Mälaröarna</Card.Title>
                <Card.Text>
                  Vi utför allt från badrumsrenoveringar till enklare hushålls installationer.
                </Card.Text>
                <Card.Text>
                  Hör av dig till oss för att få en offert.
                </Card.Text>
                <Link to="/about">
                  <Button type="submit" className="navlinks">Om oss </Button>
                </Link>
                <Link to="/contact">
                  <Button className="navlinks"> Kontakt </Button>
                </Link>
                </div>
              </Col>
            </Row>
        </Card>
        <Row>
              <Col className="middleRow">
                <Card.Title> Bästa valet av elektriker i </Card.Title>
                <Card.Text>Ekerö, Färingsö, Adelsö, Stenhamra och Skå</Card.Text>
                <Card.Text>
                  Etablerat sedan tidigt 2000 är vi ett företag som hållt fast i starka principer som alltid ska gynna kunden.
                </Card.Text>
                <Card.Text>
                  Huvudkontoret ligger i Ekerö, då vi vill vara det självklara valet av elekektriker i alla närliggande områden.
                </Card.Text>
              </Col>
            </Row>

        <Row>
          <Col className="inputRow">
            <Card.Title>Vill du bli kontaktad?</Card.Title>
            <Card.Text>Fyll i din information så hör vi av oss så fort vi kan</Card.Text>

            <form className="form" onSubmit={this.sendFeedback}>
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
                <Button type="submit" className="navlinks"> Skicka </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
