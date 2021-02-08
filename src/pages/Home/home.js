import React, { Component } from 'react';
import './styles.css';
import { emailjs } from 'emailjs-com';
import { Link } from 'react-router-dom';
import Button from './../../components/forms/Button';
import Input from './../../components/forms/Input';
import hero1 from '../../assets/hero1.jpg';
import {Card, Row, Col, Container} from 'react-bootstrap';

const initialState = {
    from_name: '',
    email: '',
    telephone: '',
    message: '',
    error: ''
};


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.changeHandler = this.changeHandler.bind(this);
    }    

    changeHandler(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    sendEmail(e) {
        alert("Ditt mejl har skickats!");
        const templateParams = {
            from_name: this.state.from_name + " (" + this.state.email + ")",
            to_name: 'user_3GkPtYG6hwLsqt0msFqm1',
            message: this.state.message
          };
        e.preventDefault();
        emailjs.sendForm('default_service', 'template', templateParams, 'user_3GkPtYG6hwLsqt0msFqm1', {
            from_name: '',
            email: '',
            telephone: '',
            message: '',
        },
        console.log("SUCCESS")
        );
      }
    
    render() {
        const { from_name, email, telephone, message } = this.state;
        
        return (
            <Container fluid className="containerWrapper">
                <Card className="bg-dark text-white">
                <Card.Img src={hero1} alt="Background image"/>
                        <Card.ImgOverlay>
                            <Row className="homeRow">
                                <Col>
                          <Card.Title> Din Elektriker på Mälaröarna</Card.Title>
                            <Card.Text>
                                Vi utför allt från badrumsrenoveringar till enklare hushålls installationer.
                            </Card.Text>
                            <Card.Text>
                                Hör av dig till oss för att få en offert.
                            </Card.Text>
                                <Link to ="/about">
                                    <Button type="submit" className="navlinks">Om oss </Button>
                                </Link>
                                <Link to="/contact">
                                     <Button className="navlinks"> Kontakt </Button>
                                </Link>
                                </Col>   
                                <Col>
                        <Card.Title>Vill du bli kontaktad?</Card.Title>
                        <Card.Text>Fyll i din information så hör vi av oss så fort vi kan</Card.Text>
                       
                        <form onSubmit={this.sendEmail}>
                            <Input placeholder="Namn" type="text"
                            name="from_name"
                            value={from_name}
                            onChange={this.changeHandler}
                            />
                            <Input placeholder="E-post" type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                            />
                            <Input placeholder="Telefon" type="text"
                            name="telephone"
                            value={telephone}
                            onChange={this.changeHandler}
                            />
                            <Input placeholder="Beskriv ditt ärende" type="text"
                            name="message"
                            value={message}
                            onChange={this.changeHandler}
                            />
                            <Link to ="/" >
                            <Button onClick={this.sendEmail} type="submit" className="navlinks"> Skicka </Button>
                            </Link>
                    </form>
                    </Col>                         
                </Row>
            </Card.ImgOverlay>
            </Card>  
        </Container>   
        );
    }
}

export default Home;
