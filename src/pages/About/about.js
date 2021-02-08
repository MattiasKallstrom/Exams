import React, { Component } from 'react';
import './styles.css';
import aboutHero from '../../assets/aboutHero.jpg';
import {Card, Container} from 'react-bootstrap';



class About extends Component {
    render() {      
        return (
            
             <Card className="bg-dark text-white">
                 <Card.Img src={aboutHero} alt="Background image"/>
                 <Card.ImgOverlay>
                      <Container fluid className="aboutContainer">
                      <Card.Title>Välkommen till din elektriker på Mälaröarna </Card.Title>
                      <Card.Text>Vi är ett litet företag bedrivet i Ekerö sedan 20 år tillbaka</Card.Text>
                      <Card.Text>Alla våra arbeten har stort fokus på kvalite och omtanke. Vi utför allt från värmegolv till solpanels installation.</Card.Text>
                      <Card.Text>Vi har också nära kontakt med andra yrkesbrancher som är relevanta så om det är ett jobb som kräver exempelvis en VVS-montör så är det enkelt för oss att kontakta dem så att ni som kunder slipper bekymmra er över det.</Card.Text>
                      </Container>
                       
                       <Container fluid className="aboutContainer2">
                           <div className="containerText">
                           <Card.Title>Expertis områden</Card.Title>
                           <Card.Text> • Hushållsmaskins installtioner (diskmaskin, tvättmaskin etc) </Card.Text>
                           <Card.Text> • Golvvärme samt lampor/fläktar </Card.Text>
                           <Card.Text> • Allt inom el, telefoni och data </Card.Text>
                           <Card.Text> • Mindre renoveringar </Card.Text>
                           </div>
                       </Container>
          
          
      </Card.ImgOverlay>
     </Card>     
        );
    }
}

export default About;