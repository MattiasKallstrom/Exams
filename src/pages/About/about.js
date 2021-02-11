import React, { Component } from 'react';
import './styles.css';
import {Card, Container, Col, Row} from 'react-bootstrap';



class About extends Component {
    render() {      
        return (
            <Container fluid className="aboutWrapper">
             <Card>
                    <Row className="colWrapper">
                        <Col xs={12} md={12} lg={12} className="firstCol">
                            <div className="backDrop">
                      <Card.Title className="aboutTitle">Välkommen till din elektriker på Mälaröarna </Card.Title>
                      <Card.Text className="aboutText">Vi är ett litet företag bedrivet i Ekerö sedan 20 år tillbaka</Card.Text>
                      <Card.Text className="aboutText">Alla våra arbeten har stort fokus på kvalite och omtanke. Vi utför allt från värmegolv till solpanels installation.</Card.Text>
                      <Card.Text className="aboutText">Vi har också nära kontakt med andra yrkesbrancher som är relevanta så om det är ett jobb som kräver exempelvis en VVS-montör så är det enkelt för oss att kontakta dem så att ni som kunder slipper bekymmra er över det.</Card.Text>
                      </div>
                      </Col>
                      <Col xs={12} md={12} lg={12} className="secondCol">
                      <div className="backDrop">
                           <Card.Title className="aboutTitle">Expertis områden</Card.Title>
                           <Card.Text className="aboutText">  Hushållsmaskins installtioner (diskmaskin, tvättmaskin etc) •</Card.Text>
                           <Card.Text className="aboutText">  Golvvärme samt lampor/fläktar •</Card.Text>
                           <Card.Text className="aboutText">  Allt inom el, telefoni och data •</Card.Text>
                           <Card.Text className="aboutText">  Mindre renoveringar •</Card.Text>
                           </div>
                        </Col>
                     </Row>
                  </Card>     
                  </Container>
        );
    }
}

export default About;