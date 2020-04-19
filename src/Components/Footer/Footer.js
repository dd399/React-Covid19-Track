import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons'
import { MDBContainer} from "mdbreact";
import styles from '../Footer/Footer.module.css';
const Footer = () =>{
    return(
        <footer className= {styles.container}  >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-0" fluid={true}>
                    <Col className = "p-5 d-flex-justify-content-center" md={4.5} >
                    <SocialIcon url = "http://linkedin.com/in/dhwanil-desai" />
                    <SocialIcon url = "http://github.com/dd399" />
                    <SocialIcon url = "https://www.youtube.com/playlist?list=PLQzIepe7IVsWiOuwNPgw-vTOxdKCjP_XS" />
                    <SocialIcon url = "https://gitconnected.com/dd399" />
                    <h3> 2020-Copyright: Dhwanil Desai </h3> 
                    <h3><a href="https://covid19.mathdro.id/api">API FOR REFERENCE</a></h3>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;