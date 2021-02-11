import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagramIcon from './../../assets/instagramIcon.png';
import facebookIcon from './../../assets/facebookIcon.png';
import linkedinIcon from './../../assets/linkedinIcon.png';
import {Row, Col, Image, Container} from 'react-bootstrap';
import './styles.css';

class Footer extends Component {
    render() {

    return( 
       <Container fluid className="footerContainer">
            <Row className="footerRow"> 
              <Col xs={8} lg={4}>
              <div className="footerinfo">
               <div className="footerTitles">Information</div>
                  <div className="fText">
                    Mälarö el AB <br></br>
                     Exempelvägen 208, 179 81 Ekerö<br></br>
                     Tel: 073-999-99 99 <br></br>
                     E-post:  info@mälaröel
                   </div>
                 </div>
              </Col>
              <Col xs={4} lg={4}> 
              <div className="footerlinks">
              <div className="footerTitles">Navigation</div>
              
             <Link to="/" className="fText">
                    Startsida
                 </Link><br></br>
            
             <Link to="/services" className="fText">
                    Tjänster
                 </Link><br></br>
                 <Link to="/about" className="fText">
                    Om oss
                 </Link><br></br>
                 <Link to="/contact" className="fText">
                    Kontakt
                 </Link>
                 </div>
               </Col>
                  <Col xs={12} lg={4}>
                  <div className="footerSocial">
                  <div className="footerTitles">Sociala medier</div>
                  
                  <a href="https://instagram.com">
                  <Image src={instagramIcon} className="socialImages">
                  </Image>
                  </a>

                  <a href="https://facebook.com">
                  <Image src={facebookIcon} className="socialImages">
                  </Image>
                  </a>

                  <a href="https://linkedin.com">
                  <Image src={linkedinIcon} className="socialImages">
                  </Image>
                  </a>
                  </div>
               </Col>
            </Row>
    </Container>
     )}
}
export default Footer;
